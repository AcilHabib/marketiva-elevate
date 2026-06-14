import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  /** inline: mark + wordmark for nav/footer · icon: mark only · full: branded asset with background */
  variant?: "inline" | "icon" | "full";
  /** brand = primary blue mark · on-primary = light mark for colored surfaces */
  markTone?: "brand" | "on-primary";
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
};

function LogoMark({
  className,
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "on-primary";
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block shrink-0",
        tone === "on-primary" ? "bg-primary-foreground" : "bg-primary",
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

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display font-bold leading-none tracking-tight", className)}>
      <span className="text-foreground">Algeria </span>
      <span className="text-primary">Marketiva</span>
    </span>
  );
}

export function BrandLogo({
  variant = "inline",
  markTone = "brand",
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
        className={cn("h-10 w-auto max-w-[min(100%,220px)] object-contain object-left", className)}
      />
    );
  }

  if (variant === "icon") {
    return <LogoMark tone={markTone} className={cn("h-9 w-9", markClassName, className)} />;
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark tone={markTone} className={cn("h-9 w-9", markClassName)} />
      {showWordmark && <Wordmark className={cn("text-base sm:text-lg", wordmarkClassName)} />}
    </span>
  );
}
