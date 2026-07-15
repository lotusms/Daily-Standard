"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { googleReviewUrl } from "@/config";

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

const ROTATE_MS = 6000;

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

function RosterAvatar({ testimonial, isActive }) {
  const mounted = useHasMounted();
  const [failed, setFailed] = useState(false);
  const showImage = mounted && Boolean(testimonial.image) && !failed;

  return (
    <span
      className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 transition duration-300 ${
        isActive
          ? "border-[#e4b049] shadow-[0_0_0_3px_rgba(228,176,73,0.25)]"
          : "border-[#bb7e3b]/30 group-hover:border-[#bb7e3b]/60"
      }`}
    >
      {showImage ? (
        <Image
          src={testimonial.image}
          alt=""
          fill
          sizes="40px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className={`flex h-full w-full items-center justify-center text-[0.65rem] font-bold tracking-wider ${
            isActive
              ? "bg-linear-to-br from-[#bb7e3b] to-[#c2652a] text-white"
              : "bg-[#bb7e3b]/15 text-[#bb7e3b]"
          }`}
          aria-hidden
        >
          {initialsFor(testimonial.name)}
        </span>
      )}
    </span>
  );
}

export default function HomeTestimonialWheel({ testimonials = TESTIMONIALS }) {
  const items = useMemo(
    () =>
      Array.isArray(testimonials) && testimonials.length > 0
        ? testimonials
        : TESTIMONIALS,
    [testimonials],
  );
  const n = items.length;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

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
      setActive((i) => (i + 1) % n);
      setEpoch((e) => e + 1);
      setProgressKey((k) => k + 1);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [n, paused, reducedMotion, epoch]);

  // Restart the progress bar when autoplay resumes so it stays in sync.
  const wasPausedRef = useRef(false);
  useEffect(() => {
    if (wasPausedRef.current && !paused) {
      setProgressKey((k) => k + 1);
    }
    wasPausedRef.current = paused;
  }, [paused]);

  function select(i) {
    if (i === active) return;
    setActive(i);
    setEpoch((e) => e + 1);
    setProgressKey((k) => k + 1);
  }

  function next() {
    setActive((i) => (i + 1) % n);
    setEpoch((e) => e + 1);
    setProgressKey((k) => k + 1);
  }

  function prev() {
    setActive((i) => (i - 1 + n) % n);
    setEpoch((e) => e + 1);
    setProgressKey((k) => k + 1);
  }

  const current = items[active] ?? items[0];
  const fadeClass = reducedMotion ? "" : "animate-testimonial-fade";

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="relative z-10 w-full overflow-hidden py-16 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 85% 10%, rgba(228,176,73,0.14), transparent 42%), radial-gradient(ellipse at 10% 90%, rgba(187,126,59,0.12), transparent 48%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#bb7e3b]">
              <span
                aria-hidden
                className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              What clients say
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#2e2e2e] sm:text-4xl">
              Voices held to the{" "}
              <span className="bg-linear-to-r from-[#bb7e3b] via-[#c2652a] to-[#e4b049] bg-clip-text text-transparent">
                standard
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 self-end sm:self-auto">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bb7e3b]/35 text-[#bb7e3b] transition hover:border-[#bb7e3b] hover:bg-[#bb7e3b]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bb7e3b]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path
                  d="M15 5 L8 12 L15 19"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bb7e3b]/35 text-[#bb7e3b] transition hover:border-[#bb7e3b] hover:bg-[#bb7e3b]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bb7e3b]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path
                  d="M9 5 L16 12 L9 19"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-8">
          <ol
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0"
            aria-label="Choose a testimonial"
          >
            {items.map((t, i) => {
              const isActive = i === active;
              return (
                <li key={t.id ?? t.name} className="shrink-0 lg:w-full">
                  <button
                    type="button"
                    onClick={() => select(i)}
                    aria-pressed={isActive}
                    className={`group flex w-full min-w-[11rem] items-center gap-3 rounded-sm border px-3 py-2.5 text-left transition duration-300 lg:min-w-0 ${
                      isActive
                        ? "border-[#bb7e3b]/55 bg-[#2e2e2e] text-white shadow-[0_12px_28px_-16px_rgba(187,126,59,0.55)]"
                        : "border-transparent bg-white/60 text-slate-600 hover:border-[#bb7e3b]/25 hover:bg-white"
                    }`}
                  >
                    <RosterAvatar testimonial={t} isActive={isActive} />
                    <span className="min-w-0">
                      <span
                        className={`block truncate font-serif text-base font-semibold ${
                          isActive ? "text-white" : "text-[#2e2e2e]"
                        }`}
                      >
                        {t.name}
                      </span>
                      {t.role ? (
                        <span
                          className={`mt-0.5 block truncate text-xs ${
                            isActive ? "text-white/55" : "text-slate-500"
                          }`}
                        >
                          {t.role}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div
            className="relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-sm border border-[#bb7e3b]/25 bg-[#2e2e2e] p-7 text-white shadow-[0_28px_70px_-36px_rgba(46,46,46,0.65)] sm:min-h-[22rem] sm:p-9 lg:p-10"
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#bb7e3b]/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 left-1/4 h-44 w-44 rounded-full bg-[#e4b049]/12 blur-3xl"
            />

            <p
              aria-hidden
              className="font-serif text-7xl leading-none text-[#e4b049]/35 sm:text-8xl"
            >
              &ldquo;
            </p>

            <blockquote
              key={`quote-${current.id ?? current.name}-${epoch}`}
              className={`relative z-10 -mt-6 max-w-3xl font-serif text-lg leading-relaxed text-white/95 sm:text-xl sm:leading-relaxed ${fadeClass}`}
            >
              {current.quote}
            </blockquote>

            <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
              <p className="font-serif text-xl font-semibold text-[#e4b049]">
                {current.name}
              </p>
              {current.role ? (
                <p className="mt-1 text-sm text-white/55">{current.role}</p>
              ) : null}
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10" aria-hidden>
              {!reducedMotion ? (
                <div
                  key={progressKey}
                  className={`h-full bg-linear-to-r from-[#bb7e3b] via-[#e4b049] to-[#c2652a] animate-testimonial-progress${
                    paused ? " [animation-play-state:paused]" : ""
                  }`}
                />
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          {googleReviewUrl ? (
            <PrimaryButton
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave us a review
            </PrimaryButton>
          ) : (
            <PrimaryButton href="/contact">Leave us a review</PrimaryButton>
          )}
        </div>
      </div>
    </section>
  );
}
