/**
 * Start Next.js dev on the first free port from PORT (default 3003), then open the browser.
 * Stops any existing dev server for this project so `pnpm run dev` runs in the foreground.
 */

const fs = require("fs");
const http = require("http");
const net = require("net");
const path = require("path");
const { spawn } = require("child_process");
const { execFile } = require("child_process");

const HOST = process.env.HOSTNAME || "localhost";
const START_PORT = Number(process.env.PORT) || 3003;
const MAX_PORT_TRIES = 50;
const projectRoot = path.join(__dirname, "..");
const nextBin = path.join(projectRoot, "node_modules", ".bin", "next");
const devLockPath = path.join(projectRoot, ".next", "dev", "lock");

/** Bind address passed to `next dev --hostname`. */
function nextHostname() {
  return HOST === "0.0.0.0" ? "0.0.0.0" : "127.0.0.1";
}

/**
 * Host used for port probes. Dual-stack `::` detects listeners on IPv4 or IPv6.
 */
function probeHost() {
  return HOST === "0.0.0.0" ? "0.0.0.0" : "::";
}

function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.unref();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });
    server.listen({ port, host: probeHost(), ipv6Only: false });
  });
}

async function findAvailablePort(startPort) {
  for (let offset = 0; offset < MAX_PORT_TRIES; offset += 1) {
    const port = startPort + offset;
    if (await isPortAvailable(port)) return port;
  }
  throw new Error(
    `No free port found between ${startPort} and ${startPort + MAX_PORT_TRIES - 1}`,
  );
}

function isProcessAlive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readDevLock() {
  try {
    const raw = fs.readFileSync(devLockPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function removeDevLock() {
  try {
    fs.unlinkSync(devLockPath);
  } catch {
    // ignore
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function terminateProcess(pid) {
  if (!Number.isInteger(pid) || pid <= 0 || pid === process.pid) return;
  try {
    process.kill(pid, "SIGTERM");
  } catch {
    // already gone
  }
}

/**
 * Stop a prior `next dev` for this project (e.g. background Cursor terminal).
 * Next.js only allows one dev server per app directory.
 */
async function stopExistingDevServer() {
  const lock = readDevLock();
  if (!lock?.pid) {
    removeDevLock();
    return;
  }

  if (isProcessAlive(lock.pid)) {
    console.log(
      `[dev] Stopping existing dev server (PID ${lock.pid}) on ${lock.appUrl ?? `port ${lock.port}`}`,
    );
    terminateProcess(lock.pid);
    await sleep(400);
    if (isProcessAlive(lock.pid)) {
      try {
        process.kill(lock.pid, "SIGKILL");
      } catch {
        // ignore
      }
      await sleep(200);
    }
  }

  removeDevLock();
}

function waitForServer(url, maxAttempts = 120) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const check = () => {
      attempts += 1;
      const req = http.get(url, (res) => {
        res.resume();
        resolve();
      });

      req.on("error", () => {
        req.destroy();
        if (attempts >= maxAttempts) {
          reject(new Error(`Dev server did not respond at ${url}`));
          return;
        }
        setTimeout(check, 500);
      });

      req.setTimeout(2000, () => {
        req.destroy();
        if (attempts >= maxAttempts) {
          reject(new Error(`Dev server did not respond at ${url}`));
          return;
        }
        setTimeout(check, 500);
      });
    };

    setTimeout(check, 800);
  });
}

function openBrowser(url) {
  if (process.env.BROWSER === "none") return Promise.resolve();
  if (process.platform === "darwin") {
    return new Promise((resolve) => {
      execFile("open", [url], () => resolve());
    });
  }
  return Promise.resolve();
}

async function main() {
  await stopExistingDevServer();

  const port = await findAvailablePort(START_PORT);
  const hostname = nextHostname();
  const url = `http://${HOST === "0.0.0.0" ? "localhost" : HOST}:${port}`;

  if (port !== START_PORT) {
    console.log(`[dev] Port ${START_PORT} is in use — starting on ${port}`);
  }

  const child = spawn(
    nextBin,
    ["dev", "--port", String(port), "--hostname", hostname],
    {
      cwd: projectRoot,
      stdio: "inherit",
      env: {
        ...process.env,
        PORT: String(port),
        WATCHPACK_POLLING: "true",
        CHOKIDAR_USEPOLLING: "true",
      },
    },
  );

  let browserOpened = false;

  waitForServer(url)
    .then(async () => {
      if (browserOpened) return;
      browserOpened = true;
      await openBrowser(url);
    })
    .catch((err) => {
      console.warn(`[dev] Browser not opened: ${err.message}`);
    });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }
    process.exit(code ?? 0);
  });

  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
      if (!child.killed) child.kill(signal);
    });
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
