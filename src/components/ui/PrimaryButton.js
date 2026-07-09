"use client";

import Link from "next/link";

const BASE_CLASSES =
  "inline-flex min-w-fit items-center justify-center gap-2 rounded-full border px-6 py-3.5 font-serif text-sm font-semibold capitalize tracking-wide transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

const VARIANT_CLASSES =
  "border-yellow-500/60 bg-linear-to-br from-yellow-400 via-yellow-400 to-amber-500 text-slate-900 shadow-[0_10px_32px_-8px_rgba(234,179,8,0.45)] hover:border-yellow-400 hover:from-yellow-300 hover:to-yellow-500 focus-visible:ring-yellow-500/70";

export default function PrimaryButton({
  href,
  type = "button",
  icon = null,
  iconPosition = "left",
  className = "",
  children,
  ...props
}) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES} ${className}`.trim();
  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
