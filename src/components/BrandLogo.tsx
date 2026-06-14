import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  /** inline: mark + wordmark · icon: mark only · full: original branded asset */
  variant?: "inline" | "icon" | "full";
  /** default = theme colors · nav = white on hero/nav · on-primary = light on colored surfaces */
  appearance?: "default" | "nav" | "on-primary";
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
};

function LogoMark({
  className,
  appearance = "default",
}: {
  className?: string;
  appearance?: "default" | "nav" | "on-primary";
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block shrink-0",
        appearance === "nav" && "bg-white",
        appearance === "on-primary" && "bg-primary-foreground",
        appearance === "default" && "bg-primary",
        className,
      )}
      style={{
        WebkitMaskImage: `url(${brand.mark})`,
        maskImage: `url(${brand.mark})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

function Wordmark({
  className,
  appearance = "default",
}: {
  className?: string;
  appearance?: "default" | "nav" | "on-primary";
}) {
  if (appearance === "nav") {
    return (
      <span
        className={cn(
          "font-display font-bold leading-none tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]",
          className,
        )}
      >
        Algeria Marketiva
      </span>
    );
  }

  return (
    <span className={cn("font-display font-bold leading-none tracking-tight", className)}>
      <span className="text-foreground">Algeria </span>
      <span className="text-primary">Marketiva</span>
    </span>
  );
}

export function BrandLogo({
  variant = "inline",
  appearance = "default",
  className,
  markClassName,
  showWordmark = true,
  wordmarkClassName,
}: BrandLogoProps) {
  if (variant === "full") {
    return (
      <img
        src={brand.full}
        alt={brand.name}
        className={cn("h-auto w-auto max-w-full object-contain object-left", className)}
      />
    );
  }

  if (variant === "icon") {
    return (
      <LogoMark
        appearance={appearance}
        className={cn("h-9 w-9", markClassName, className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark appearance={appearance} className={cn("h-9 w-9", markClassName)} />
      {showWordmark && (
        <Wordmark appearance={appearance} className={cn("text-base sm:text-lg", wordmarkClassName)} />
      )}
    </span>
  );
}
