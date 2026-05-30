/**
 * Premium illustrated team avatars.
 *
 * For members without a real photo, we render an elegant, flat-vector human
 * character illustration (not initials). Each illustration is deterministically
 * generated from the member index so it stays unique yet consistent in style
 * with the rest of the team. When a `photo` is provided, the real image is
 * shown instead.
 */

const SKIN = [
  "#f4d0b0",
  "#e8b88f",
  "#d49a6a",
  "#b3784f",
  "#8a5a3b",
  "#f1c9a5",
];

const HAIR = [
  "#2b2b33",
  "#4a3526",
  "#1c1c22",
  "#5c4632",
  "#3a2d24",
  "#6b5847",
];

// Brand-aligned apparel palette (blues / slate / gold accents)
const APPAREL: [string, string][] = [
  ["oklch(0.55 0.16 255)", "oklch(0.42 0.14 262)"],
  ["oklch(0.4 0.05 258)", "oklch(0.3 0.04 258)"],
  ["oklch(0.5 0.12 240)", "oklch(0.38 0.1 245)"],
  ["oklch(0.6 0.14 250)", "oklch(0.46 0.12 258)"],
  ["oklch(0.35 0.03 258)", "oklch(0.26 0.03 258)"],
  ["oklch(0.52 0.13 262)", "oklch(0.4 0.12 268)"],
];

const BG: [string, string][] = [
  ["oklch(0.7 0.13 252)", "oklch(0.5 0.16 262)"],
  ["oklch(0.62 0.1 240)", "oklch(0.4 0.06 258)"],
  ["oklch(0.72 0.12 250)", "oklch(0.55 0.12 230)"],
  ["oklch(0.66 0.14 258)", "oklch(0.46 0.13 270)"],
];

type Variant = {
  skin: string;
  hair: string;
  apparel: [string, string];
  bg: [string, string];
  hairStyle: number; // 0..5
  beard: boolean;
  glasses: boolean;
};

function buildVariant(index: number): Variant {
  return {
    skin: SKIN[index % SKIN.length],
    hair: HAIR[(index * 3 + 1) % HAIR.length],
    apparel: APPAREL[index % APPAREL.length],
    bg: BG[index % BG.length],
    hairStyle: index % 6,
    beard: index % 3 === 1,
    glasses: index % 4 === 2,
  };
}

function Hair({ style, color }: { style: number; color: string }) {
  switch (style) {
    case 0: // short top
      return (
        <path
          d="M62 96 C62 60 138 60 138 96 C138 80 128 64 100 64 C72 64 62 80 62 96 Z"
          fill={color}
        />
      );
    case 1: // buzz / very short
      return (
        <path
          d="M64 94 C64 64 136 64 136 94 C130 78 118 70 100 70 C82 70 70 78 64 94 Z"
          fill={color}
        />
      );
    case 2: // wavy side part
      return (
        <path
          d="M60 100 C58 62 100 52 130 66 C146 74 142 92 140 100 C138 84 120 74 104 78 C92 82 86 92 60 100 Z"
          fill={color}
        />
      );
    case 3: // top bun
      return (
        <>
          <circle cx="100" cy="50" r="13" fill={color} />
          <path
            d="M62 98 C62 62 138 62 138 98 C136 80 124 66 100 66 C76 66 64 80 62 98 Z"
            fill={color}
          />
        </>
      );
    case 4: // long hair to shoulders
      return (
        <path
          d="M58 150 C50 110 54 66 100 60 C146 66 150 110 142 150 C140 120 134 96 130 96 C132 78 120 66 100 66 C80 66 68 78 70 96 C66 96 60 120 58 150 Z"
          fill={color}
        />
      );
    default: // 5: curly
      return (
        <path
          d="M60 98 C56 84 62 56 100 56 C138 56 144 84 140 98 C138 86 132 92 126 86 C122 96 112 88 108 92 C104 84 96 84 92 92 C88 88 78 96 74 86 C68 92 62 86 60 98 Z"
          fill={color}
        />
      );
  }
}

export function TeamAvatar({
  name,
  index = 0,
  photo,
}: {
  name: string;
  index?: number;
  photo?: string;
}) {
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

  const v = buildVariant(index);
  const id = `av-${index}`;

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={name}
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={v.bg[0]} />
          <stop offset="100%" stopColor={v.bg[1]} />
        </linearGradient>
        <linearGradient id={`${id}-cloth`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={v.apparel[0]} />
          <stop offset="100%" stopColor={v.apparel[1]} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="30%" r="75%">
          <stop offset="0%" stopColor="oklch(1 0 0 / 0.16)" />
          <stop offset="100%" stopColor="oklch(1 0 0 / 0)" />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="200" height="200" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${id}-clip)`}>
        {/* Background */}
        <rect width="200" height="200" fill={`url(#${id}-bg)`} />
        <rect width="200" height="200" fill={`url(#${id}-glow)`} />
        <circle cx="158" cy="44" r="58" fill="oklch(1 0 0 / 0.06)" />
        <circle cx="36" cy="172" r="40" fill="oklch(0 0 0 / 0.08)" />

        {/* Shoulders / apparel */}
        <path
          d="M40 200 C40 158 66 140 100 140 C134 140 160 158 160 200 Z"
          fill={`url(#${id}-cloth)`}
        />
        {/* Collar / shirt detail */}
        <path
          d="M86 142 L100 158 L114 142 L108 140 L100 150 L92 140 Z"
          fill="oklch(1 0 0 / 0.18)"
        />

        {/* Neck */}
        <path d="M88 128 L88 146 Q100 154 112 146 L112 128 Z" fill={v.skin} />
        <path d="M88 138 Q100 148 112 138 L112 128 L88 128 Z" fill="oklch(0 0 0 / 0.08)" />

        {/* Ears */}
        <circle cx="68" cy="104" r="7" fill={v.skin} />
        <circle cx="132" cy="104" r="7" fill={v.skin} />

        {/* Head */}
        <path
          d="M70 98 C70 70 130 70 130 98 L130 110 C130 134 116 148 100 148 C84 148 70 134 70 110 Z"
          fill={v.skin}
        />
        {/* soft cheek shading */}
        <ellipse cx="100" cy="120" rx="30" ry="24" fill="oklch(0 0 0 / 0.04)" />

        {/* Hair (drawn behind for long styles handled via order) */}
        <Hair style={v.hairStyle} color={v.hair} />

        {/* Eyebrows */}
        <path d="M80 104 Q88 100 96 104" stroke={v.hair} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M104 104 Q112 100 120 104" stroke={v.hair} strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Eyes */}
        <ellipse cx="88" cy="112" rx="3.4" ry="4" fill="#2b2b33" />
        <ellipse cx="112" cy="112" rx="3.4" ry="4" fill="#2b2b33" />
        <circle cx="89" cy="110.5" r="1" fill="#fff" opacity="0.9" />
        <circle cx="113" cy="110.5" r="1" fill="#fff" opacity="0.9" />

        {/* Nose */}
        <path d="M100 116 L97 126 Q100 129 103 126" stroke="oklch(0 0 0 / 0.18)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Mouth */}
        <path d="M91 134 Q100 141 109 134" stroke="#9a5a4a" strokeWidth="2.6" fill="none" strokeLinecap="round" />

        {/* Optional beard */}
        {v.beard && (
          <path
            d="M74 116 C76 140 88 150 100 150 C112 150 124 140 126 116 C120 130 112 134 100 134 C88 134 80 130 74 116 Z"
            fill={v.hair}
            opacity="0.92"
          />
        )}

        {/* Optional glasses */}
        {v.glasses && (
          <g stroke="oklch(0.2 0.02 258)" strokeWidth="2.4" fill="none">
            <rect x="78" y="106" width="18" height="13" rx="5" />
            <rect x="104" y="106" width="18" height="13" rx="5" />
            <path d="M96 112 L104 112" />
            <path d="M78 110 L70 108" />
            <path d="M122 110 L130 108" />
          </g>
        )}
      </g>
    </svg>
  );
}
