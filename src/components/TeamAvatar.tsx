const PALETTES = [
  ["oklch(0.66 0.16 252)", "oklch(0.5 0.16 262)"],
  ["oklch(0.6 0.12 240)", "oklch(0.4 0.05 258)"],
  ["oklch(0.7 0.13 250)", "oklch(0.55 0.1 230)"],
  ["oklch(0.62 0.14 258)", "oklch(0.45 0.12 270)"],
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

/**
 * Elegant default SVG avatar. Pass `photo` later to replace with a real image.
 */
export function TeamAvatar({
  name,
  index = 0,
  photo,
}: {
  name: string;
  index?: number;
  photo?: string;
}) {
  const [c1, c2] = PALETTES[index % PALETTES.length];
  const gid = `grad-${index}`;

  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={name}
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="oklch(1 0 0 / 0.18)" />
          <stop offset="100%" stopColor="oklch(1 0 0 / 0)" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#${gid})`} />
      <rect width="200" height="200" fill={`url(#${gid}-glow)`} />
      {/* subtle geometric flourishes */}
      <circle cx="160" cy="48" r="60" fill="oklch(1 0 0 / 0.06)" />
      <circle cx="34" cy="170" r="44" fill="oklch(0 0 0 / 0.1)" />
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Sora, sans-serif"
        fontSize="68"
        fontWeight="600"
        fill="oklch(1 0 0 / 0.92)"
      >
        {initials(name)}
      </text>
    </svg>
  );
}
