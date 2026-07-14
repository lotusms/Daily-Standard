"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useState,
  useSyncExternalStore,
} from "react";
import DailyStandardLogo from "@/components/brand/DailyStandardLogo";
import NavDropdown from "@/components/nav/NavDropdown";
import { mainNav, orgName } from "@/config";

function isActivePath(pathname, href, prefix) {
  if (prefix) return pathname === href || pathname.startsWith(`${href}/`);
  if (href === "/") return pathname === "/";
  return pathname === href;
}

function navItemKey(item) {
  return item.href ?? `group:${item.label}`;
}

function isNavItemActive(pathname, item) {
  if (Array.isArray(item.children) && item.children.length > 0) {
    if (item.pathPrefix && pathname.startsWith(`${item.pathPrefix}/`)) return true;
    return item.children.some(
      (child) =>
        pathname === child.href || pathname.startsWith(`${child.href}/`),
    );
  }
  return isActivePath(pathname, item.href, item.prefix);
}

function activeParentNavKey(pathname) {
  const parent = mainNav.find(
    (item) =>
      Array.isArray(item.children) &&
      item.children.length > 0 &&
      isNavItemActive(pathname, item),
  );
  return parent ? navItemKey(parent) : null;
}

function NavLink({ href, label, prefix, onNavigate, className = "" }) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href, prefix);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`group relative py-1 text-[0.7rem] font-serif font-bold uppercase tracking-[0.28em] transition-colors ${className} ${
        active
          ? "text-site-secondary"
          : "text-slate-600 hover:text-site-secondary"
      }`}
    >
      <span className="relative z-10">{label}</span>
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-site-primary transition-all duration-300 ${
          active
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
        }`}
        aria-hidden
      />
    </Link>
  );
}

const SCROLL_FADE_RANGE_PX = 10;

function subscribeWindowScroll(callback) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function scrollFadeSnapshot() {
  const y = window.scrollY;
  if (y <= 0) return 0;
  if (y >= SCROLL_FADE_RANGE_PX) return 1;
  return y / SCROLL_FADE_RANGE_PX;
}

function scrollFadeServerSnapshot() {
  return 0;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(() =>
    activeParentNavKey(pathname),
  );
  const [lastPathname, setLastPathname] = useState(pathname);
  const panelId = useId();

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileExpanded(activeParentNavKey(pathname));
  }

  const scrollFade = useSyncExternalStore(
    subscribeWindowScroll,
    scrollFadeSnapshot,
    scrollFadeServerSnapshot,
  );

  const headerFade = open ? 1 : scrollFade;

  function setScrollLocked(locked) {
    document.body.style.overflow = locked ? "hidden" : "";
    document.documentElement.style.overflow = locked ? "hidden" : "";
  }

  useEffect(() => {
    setScrollLocked(open);
    return () => setScrollLocked(false);
  }, [open]);

  useEffect(() => {
    setScrollLocked(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-110 border-b border-slate-200/80 py-2">
        {/* Blur lives on a sibling layer so the SVG logo is not re-rasterized. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundColor: `rgba(248, 250, 252, ${0.72 + 0.28 * headerFade})`,
            boxShadow:
              headerFade > 0
                ? `0 8px 32px -12px rgba(15, 23, 42, ${0.08 * headerFade})`
                : "none",
            backdropFilter:
              headerFade > 0.01 ? `blur(${20 * headerFade}px)` : "none",
            WebkitBackdropFilter:
              headerFade > 0.01 ? `blur(${20 * headerFade}px)` : "none",
          }}
        />
        <div className="relative z-120 mx-auto flex h-20 max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="group relative z-10 flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500/60"
            onClick={close}
            aria-label={`${orgName} — home`}
          >
            <DailyStandardLogo
              variant="compact"
              className="w-auto"
              title={orgName}
            />
          </Link>

          <nav
            aria-label="Main"
            className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 min-[992px]:flex"
          >
            {mainNav.map((item) => {
              const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;
              if (hasChildren) {
                return <NavDropdown key={navItemKey(item)} item={item} light />;
              }
              return (
                <NavLink
                  key={navItemKey(item)}
                  href={item.href}
                  label={item.label}
                  prefix={item.prefix}
                />
              );
            })}
          </nav>

          <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/book"
              className="hidden rounded-full border border-yellow-500/50 bg-yellow-400 px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-sm transition hover:bg-yellow-300 min-[420px]:inline sm:text-xs"
            >
              Book a call
            </Link>

            <button
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-yellow-400/60 hover:bg-yellow-50 min-[992px]:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`h-0.5 w-5 origin-center rounded-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-5 origin-center rounded-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        className={`mobile-nav-panel fixed inset-0 z-100 flex h-full min-h-dvh flex-col min-[992px]:hidden ${open ? "mobile-nav-panel--open" : ""} transition-[visibility,opacity] duration-300 ease-out ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-slate-50" aria-hidden />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-[20%] top-0 h-64 w-64 rounded-full bg-yellow-300/30 blur-[80px]" />
          <div className="absolute -right-[10%] bottom-0 h-72 w-72 rounded-full bg-slate-300/40 blur-[90px]" />
        </div>

        <div className="relative z-10 flex h-full min-h-dvh flex-1 flex-col pt-[max(5.5rem,env(safe-area-inset-top))]">
          <nav
            aria-label="Mobile main"
            className="flex flex-1 flex-col justify-start gap-0 overflow-y-auto px-2 sm:px-6"
          >
            {mainNav.map((item, i) => {
              const active = isNavItemActive(pathname, item);
              const animationDelay = open ? `${70 + i * 55}ms` : "0ms";
              const itemKey = navItemKey(item);
              const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;

              if (hasChildren) {
                const expanded = mobileExpanded === itemKey;
                return (
                  <div key={itemKey} className="border-b border-slate-200/80">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileExpanded((prev) =>
                          prev === itemKey ? null : itemKey,
                        )
                      }
                      style={{ animationDelay }}
                      className={`mobile-nav-item flex w-full items-center justify-between py-5 pl-4 pr-2 text-left transition-colors sm:py-6 ${
                        active
                          ? "bg-yellow-50 text-slate-900"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span className="font-serif text-2xl font-semibold tracking-[-0.02em]">
                        {item.label}
                      </span>
                      <span className="text-yellow-600">{expanded ? "−" : "+"}</span>
                    </button>
                    {expanded ? (
                      <ul className="space-y-1 px-6 pb-5">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={close}
                              className="block rounded-lg px-4 py-3 text-slate-700 hover:bg-yellow-50"
                            >
                              <span className="font-serif text-lg font-medium">
                                {child.label}
                              </span>
                              {child.description ? (
                                <span className="mt-1 block text-sm text-slate-500">
                                  {child.description}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={itemKey}
                  href={item.href}
                  onClick={close}
                  style={{ animationDelay }}
                  className={`mobile-nav-item border-b border-slate-200/80 py-5 pl-4 pr-2 font-serif text-2xl font-semibold tracking-[-0.02em] transition-colors sm:py-6 ${
                    active
                      ? "bg-yellow-50 text-slate-900"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="shrink-0 border-t border-slate-200 bg-white/80 px-6 py-6 backdrop-blur-sm">
            <Link
              href="/book"
              onClick={close}
              className="flex items-center justify-center rounded-2xl border border-yellow-500/50 bg-yellow-400 px-5 py-4 font-serif text-xl font-semibold text-slate-900 transition hover:bg-yellow-300"
            >
              Book a Zoom call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
