"use client";

import { useMemo, useState } from "react";

import ContactTurnstile from "@/components/contact/ContactTurnstile";
import DateField from "@/components/ui/DateField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import {
  contactRecipientForId,
  contactRecipients,
  orgInquiryEmail,
} from "@/config";
import { digitsFromTelInput, formatUsPhoneMask } from "@/lib/phone-format";

const DEFAULT_RECIPIENT = "general";
const TURNSTILE_ENABLED = Boolean(
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim(),
);
const SHOW_RECIPIENT_PICKER = contactRecipients.length > 1;

const EMPTY_FORM = {
  recipient: DEFAULT_RECIPIENT,
  name: "",
  email: "",
  phone: "",
  preferredDate: "",
  comments: "",
  website: "",
  company: "",
};

const labelClass =
  "block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#f7f6f3]/45";
const inputClass =
  "mt-1.5 w-full rounded-sm border border-white/10 bg-[#1c1814]/70 px-4 py-3 text-sm text-[#f7f6f3] placeholder:text-[#f7f6f3]/30 focus:border-[#e4b049]/45 focus:outline-none focus:ring-1 focus:ring-[#e4b049]/25";
const errorClass = "mt-1.5 text-xs text-rose-300";

function isValidEmail(value) {
  const v = String(value ?? "").trim();
  if (!v) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v);
}

function clientFieldErrors(form, turnstileToken) {
  const errors = {};
  if (!contactRecipientForId(form.recipient)) {
    errors.recipient = "Choose who you would like to reach.";
  }
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!isValidEmail(form.email)) errors.email = "Enter a valid email address.";
  const phoneDigits = digitsFromTelInput(form.phone);
  if (form.phone.trim() && phoneDigits.length > 0 && phoneDigits.length < 10) {
    errors.phone = "Enter all 10 digits, or leave phone blank.";
  }
  if (TURNSTILE_ENABLED && !turnstileToken) {
    errors.turnstile = "Verification is still loading. Wait a moment, then try again.";
  }
  return errors;
}

function todayIsoDate() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function ContactInquiryForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [formStartedAt] = useState(() => Date.now());
  const [turnstileToken, setTurnstileToken] = useState("");
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const minPreferredDate = useMemo(() => todayIsoDate(), []);
  const selectedRecipient = contactRecipientForId(form.recipient);

  const errors = clientFieldErrors(form, turnstileToken);
  const showError = (field) => Boolean(touched[field] && errors[field]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") setStatus("idle");
    if (serverError) setServerError("");
  }

  function markTouched(field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handlePhoneChange(e) {
    const digits = digitsFromTelInput(e.target.value);
    update("phone", formatUsPhoneMask(digits));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({
      recipient: true,
      name: true,
      email: true,
      phone: true,
      preferredDate: true,
      comments: true,
      ...(TURNSTILE_ENABLED ? { turnstile: true } : {}),
    });

    const nextErrors = clientFieldErrors(form, turnstileToken);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          formStartedAt,
          turnstileToken,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data?.errors && typeof data.errors === "object") {
          setTouched((prev) => ({
            ...prev,
            ...Object.fromEntries(Object.keys(data.errors).map((k) => [k, true])),
          }));
        }
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "Could not send your message.",
        );
      }

      setStatus("success");
      setForm(EMPTY_FORM);
      setTurnstileToken("");
      setTouched({});
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Could not send your message.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-sm border border-[#bb7e3b]/25 bg-[#241c16] p-7 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.45)] sm:p-9">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#bb7e3b] via-[#e4b049] to-[#c2652a]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-[#e4b049]/10 blur-3xl"
      />

      <div className="relative z-10">
        <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#e4b049]">
          <span
            aria-hidden
            className="inline-block h-px w-8 bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
          />
          Inquiry
        </p>
        <h2 className="mt-3 font-serif text-2xl font-semibold text-[#f7f6f3] sm:text-3xl">
          Tell us what’s on your mind
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#f7f6f3]/65">
          Share a bit of context and we’ll reply at the email you provide — usually
          within a couple of business days.
        </p>

        {status === "success" ? (
          <p
            className="mt-6 rounded-sm border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200/95"
            role="status"
          >
            Thank you — your message is on its way. We’ll be in touch soon.
          </p>
        ) : null}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => update("website", e.target.value)}
            />
            <label htmlFor="contact-company">Company</label>
            <input
              id="contact-company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </div>

          {SHOW_RECIPIENT_PICKER ? (
            <fieldset>
              <legend className={`${labelClass} mb-3`}>Who should receive this?</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactRecipients.map((entry) => {
                  const selected = form.recipient === entry.id;
                  return (
                    <label
                      key={entry.id}
                      className={[
                        "flex cursor-pointer flex-col gap-1 rounded-sm border px-4 py-3.5 transition",
                        selected
                          ? "border-[#e4b049]/45 bg-[#e4b049]/10 ring-1 ring-[#e4b049]/25"
                          : "border-white/10 bg-white/[0.03] hover:border-[#bb7e3b]/35 hover:bg-white/[0.05]",
                      ].join(" ")}
                    >
                      <span className="flex items-start gap-2.5">
                        <input
                          type="radio"
                          name="recipient"
                          value={entry.id}
                          checked={selected}
                          onChange={() => update("recipient", entry.id)}
                          onBlur={() => markTouched("recipient")}
                          className="mt-1 size-4 shrink-0 accent-[#e4b049]"
                        />
                        <span className="min-w-0">
                          <span className="block font-serif text-base font-medium text-[#f7f6f3]">
                            {entry.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-5 text-[#f7f6f3]/60">
                            {entry.description}
                          </span>
                          <span className="mt-1 block truncate text-[0.7rem] tracking-wide text-[#e4b049]/80">
                            {entry.email}
                          </span>
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              {showError("recipient") ? (
                <p className={`${errorClass} mt-2`} role="alert">
                  {errors.recipient}
                </p>
              ) : null}
            </fieldset>
          ) : (
            <p className="rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#f7f6f3]/65">
              Messages go to{" "}
              <a
                href={`mailto:${selectedRecipient.email}`}
                className="font-medium text-[#e4b049] underline-offset-4 transition hover:underline"
              >
                {selectedRecipient.email}
              </a>
              .
            </p>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                onBlur={() => markTouched("name")}
                className={inputClass}
                aria-invalid={showError("name")}
              />
              {showError("name") ? (
                <p className={errorClass} role="alert">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                onBlur={() => markTouched("email")}
                className={inputClass}
                aria-invalid={showError("email")}
              />
              {showError("email") ? (
                <p className={errorClass} role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                Phone <span className="font-normal normal-case tracking-normal opacity-70">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                maxLength={24}
                value={form.phone}
                onChange={handlePhoneChange}
                onBlur={() => markTouched("phone")}
                className={inputClass}
                placeholder="(555) 555-5555"
                aria-invalid={showError("phone")}
              />
              {showError("phone") ? (
                <p className={errorClass} role="alert">
                  {errors.phone}
                </p>
              ) : null}
            </div>

            <DateField
              id="contact-preferred-date"
              label="Preferred start date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={(e) => update("preferredDate", e.target.value)}
              min={minPreferredDate}
              labelClassName={labelClass}
              inputClassName={inputClass}
              colorScheme="dark"
            />
          </div>

          <div>
            <label htmlFor="contact-comments" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-comments"
              name="comments"
              rows={5}
              maxLength={4000}
              value={form.comments}
              onChange={(e) => update("comments", e.target.value)}
              className={`${inputClass} min-h-[7.5rem] resize-y`}
              placeholder="What you’re working on, where you’d like to start, and any questions before a discovery call."
            />
          </div>

          {serverError ? (
            <p className={errorClass} role="alert">
              {serverError}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <PrimaryButton type="submit" disabled={submitting} className="px-6 py-2.5">
              {submitting
                ? "Sending…"
                : SHOW_RECIPIENT_PICKER
                  ? `Send to ${selectedRecipient.label}`
                  : "Send message"}
            </PrimaryButton>
            <p className="text-xs text-[#f7f6f3]/55">
              Or email{" "}
              <a
                href={`mailto:${orgInquiryEmail}`}
                className="text-[#e4b049] underline decoration-[#e4b049]/35 underline-offset-2 transition hover:decoration-[#e4b049]"
              >
                {orgInquiryEmail}
              </a>{" "}
              directly.
            </p>
          </div>

          {TURNSTILE_ENABLED ? (
            <div className="pt-2">
              <div className="flex justify-end">
                <ContactTurnstile
                  onToken={setTurnstileToken}
                  onExpire={() => setTurnstileToken("")}
                  onError={() => setTurnstileToken("")}
                />
              </div>
              {showError("turnstile") ? (
                <p className={`${errorClass} mt-2 text-right`} role="alert">
                  {errors.turnstile}
                </p>
              ) : null}
            </div>
          ) : null}
        </form>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-[0.65rem] uppercase tracking-[0.22em] text-[#f7f6f3]/40">
          Virtual coaching · Nutrition · Exercise · Faith
        </p>
      </div>
    </div>
  );
}
