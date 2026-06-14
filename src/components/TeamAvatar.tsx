import { cn } from "@/lib/utils";

type TeamAvatarProps = {
  name: string;
  index: number;
  photo?: string;
  className?: string;
};

const PALETTE = [
  "from-primary/30 to-[oklch(0.55_0.16_262)]/40",
  "from-[oklch(0.55_0.16_262)]/30 to-primary/40",
  "from-[oklch(0.68_0.14_72)]/25 to-primary/30",
  "from-primary/25 to-accent/40",
];

export function TeamAvatar({ name, index, photo, className }: TeamAvatarProps) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className={cn("h-full w-full object-cover object-top", className)}
      />
    );
  }

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-gradient-to-br",
        PALETTE[index % PALETTE.length],
        className,
      )}
    >
      <span className="font-display text-3xl font-bold text-foreground/80">{initials}</span>
    </div>
  );
}
