export default function ConnectLayout({ children }) {
  return (
    <div className="relative min-h-dvh bg-slate-50 text-site-fg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-yellow-50/80 via-slate-50 to-white"
      />
      {children}
    </div>
  );
}
