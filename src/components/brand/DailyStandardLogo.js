import Image from "next/image";

/** @type {`/images/${string}` | `/${string}`} */
export const LOGO_SRC = "/images/logo_raw.jpg";

const LOGO_WIDTH = 1254;
const LOGO_HEIGHT = 1254;

export default function DailyStandardLogo({
  className = "",
  title = "The Daily Standard",
  variant = "default",
  priority = false,
}) {
  const sizeClass =
    variant === "compact"
      ? "h-10 w-auto sm:h-12"
      : "h-auto w-full max-w-xs sm:max-w-sm";

  return (
    <Image
      src={LOGO_SRC}
      alt={title}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={`object-contain object-left ${sizeClass} ${className}`.trim()}
    />
  );
}
