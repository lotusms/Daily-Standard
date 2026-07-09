"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

const TESTIMONIALS = [
  {
    id: "marcus",
    name: "Marcus T.",
    role: "Engineer · 38",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "I came for nutrition advice and stayed because someone finally told me the truth. Down 28 pounds, training three days a week, and my marriage is better because I'm present again.",
  },
  {
    id: "david",
    name: "David R.",
    role: "Father of three · 42",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "The faith conversations weren't preachy — they were practical. I stopped drifting through Sundays and started leading at home with intention.",
  },
  {
    id: "james",
    name: "James K.",
    role: "Small business owner · 35",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote:
      "Zoom sessions fit my schedule. No gym bro nonsense — just a plan I could actually follow while running a company and coaching Little League.",
  },
  {
    id: "andre",
    name: "Andre W.",
    role: "Veteran · 44",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "After the military I lost my structure. This coaching gave me a standard again — meals, workouts, and morning prayer that I actually keep.",
  },
  {
    id: "chris",
    name: "Chris M.",
    role: "Teacher · 31",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "I thought I needed a harder program. I needed accountability. Six months in, I'm stronger, leaner, and finally consistent.",
  },
];

const ROTATE_MS = 5500;
const TRANSITION_MS = 1400;
const ROTATE_EASE = "cubic-bezier(0.6, 0.05, 0.2, 1)";

/** Returns true once the component has mounted on the client; false during SSR. */
const noopSubscribe = () => () => {};
function useHasMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

function initialsFor(name) {
  return String(name || "")
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function Avatar({ testimonial, isActive }) {
  const mounted = useHasMounted();
  const [failed, setFailed] = useState(false);
  const showImage = mounted && Boolean(testimonial.image) && !failed;

  const wellClass = "bg-slate-800 text-blue-100";

  const ringActive =
    "border-yellow-400 shadow-lg shadow-yellow-500/20 ring-2 ring-yellow-400/30";

  const ringIdle = "border-slate-200 shadow-sm";

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-[28%] border-2 transition duration-700 ${
        isActive
          ? `scale-[1.08] ${ringActive}`
          : `scale-100 opacity-80 group-hover:opacity-100 ${ringIdle}`
      }`}
    >
      {showImage ? (
        <Image
          src={testimonial.image}
          alt={`Portrait of ${testimonial.name}`}
          fill
          sizes="(max-width: 640px) 64px, 96px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center text-sm font-semibold uppercase tracking-[0.18em] ${wellClass}`}
          aria-hidden="true"
        >
          {initialsFor(testimonial.name)}
        </div>
      )}
    </div>
  );
}

export default function HomeTestimonialWheel({ testimonials = TESTIMONIALS }) {
  const items = useMemo(
    () => (Array.isArray(testimonials) && testimonials.length > 0 ? testimonials : TESTIMONIALS),
    [testimonials],
  );
  const n = items.length;

  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  /** Bumps on manual navigation so the interval restarts and cannot double-fire with a tick. */
  const [autoAdvanceEpoch, setAutoAdvanceEpoch] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (n <= 1 || paused || reducedMotion) return undefined;
    const id = window.setInterval(() => {
      setStep((s) => s + 1);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [n, paused, reducedMotion, autoAdvanceEpoch]);

  const wheelRotation = step * (360 / n);
  const active = ((n - (step % n)) % n + n) % n;
  const transition = reducedMotion ? "none" : `transform ${TRANSITION_MS}ms ${ROTATE_EASE}`;

  function bumpAutoAdvanceEpoch() {
    setAutoAdvanceEpoch((e) => e + 1);
  }

  function jumpTo(i) {
    const delta = ((active - i) % n + n) % n;
    if (delta === 0) return;
    setStep((s) => s + delta);
    bumpAutoAdvanceEpoch();
  }

  /** Wheel rotates CW when `step` increases, so `next` advances and `prev` rewinds. */
  function next() {
    setStep((s) => s + 1);
    bumpAutoAdvanceEpoch();
  }
  function prev() {
    setStep((s) => s - 1);
    bumpAutoAdvanceEpoch();
  }

  const eyebrow =
    "text-xs font-bold uppercase tracking-[0.32em] text-slate-500";

  const heading =
    "font-serif text-3xl font-semibold tracking-[-0.02em] text-slate-800 sm:text-4xl";

  const role = "mt-1 text-sm text-slate-500";

  const quote = "mt-6 text-base leading-8 text-slate-600";

  const quoteMark = "text-yellow-500/80";

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="relative z-10 w-full overflow-hidden border-y border-slate-200 bg-white py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_0%,rgba(234,179,8,0.12),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(148,163,184,0.15),transparent_50%)]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-12">
        <div
          className="relative mx-auto aspect-square w-full max-w-[340px] [--avatar:4rem] [--radius:8.5rem] sm:max-w-[420px] sm:[--avatar:5rem] sm:[--radius:10.5rem] lg:max-w-[460px] lg:[--avatar:5.5rem] lg:[--radius:11.5rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}>
          <div
            className="relative h-full w-full"
            style={{
              transform: `rotate(${wheelRotation}deg)`,
              transition,
            }}
          >
            {items.map((t, i) => {
              const itemAngle = (i * 360) / n;
              const isActive = i === active;
              return (
                <button
                  type="button"
                  key={t.id ?? t.name}
                  onClick={() => jumpTo(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-pressed={isActive}
                  className="group absolute left-1/2 top-1/2 rounded-[28%] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  style={{
                    width: "var(--avatar)",
                    height: "var(--avatar)",
                    transform: `translate(-50%, -50%) rotate(${itemAngle}deg) translateX(var(--radius)) rotate(${-(itemAngle + wheelRotation)}deg)`,
                    transition,
                  }}
                >
                  <Avatar testimonial={t} isActive={isActive} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <p className={eyebrow}>What our clients say</p>
          <div
            className="relative mt-6 min-h-80 sm:min-h-72"
            aria-live="polite"
            aria-atomic="true"
          >
            {items.map((t, i) => {
              const isActive = i === active;
              return (
                <article
                  key={t.id ?? t.name}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <h3 className={heading}>{t.name}</h3>
                  {t.role ? <p className={role}>{t.role}</p> : null}
                  <blockquote className={quote}>
                    <span className={quoteMark} aria-hidden="true">&ldquo;</span>
                    {t.quote}
                    <span className={quoteMark} aria-hidden="true">&rdquo;</span>
                  </blockquote>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Testimonial selector"
            >
              {items.map((t, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={`dot-${t.id ?? t.name}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show testimonial ${i + 1} of ${n}`}
                    onClick={() => jumpTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      isActive
                        ? "w-8 bg-blue-400"
                        : "w-3 bg-white/20 hover:bg-white/35"
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-7 sm:gap-9">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="group inline-flex items-center gap-3 py-1 text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-200/70 transition-colors duration-300 hover:text-neutral-100 focus:outline-none focus-visible:text-neutral-100"
              >
                <svg
                  viewBox="0 0 40 12"
                  className="h-2.5 w-10 transition-transform duration-500 ease-out group-hover:-translate-x-1.5 group-focus-visible:-translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M40 6 L1 6" />
                  <path d="M6 1 L1 6 L6 11" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="group inline-flex items-center gap-3 py-1 text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-200/70 transition-colors duration-300 hover:text-neutral-100 focus:outline-none focus-visible:text-neutral-100"
              >
                <svg
                  viewBox="0 0 40 12"
                  className="h-2.5 w-10 transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M0 6 L39 6" />
                  <path d="M34 1 L39 6 L34 11" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
