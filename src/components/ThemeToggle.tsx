import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/i18n/ThemeProvider";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative grid place-items-center overflow-hidden rounded-full border border-border bg-secondary/40 transition-all hover:border-primary/40 hover:bg-secondary/70 ${
        compact ? "h-10 w-10" : "h-10 w-10"
      }`}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[image:var(--gradient-sheen)] opacity-0 transition-opacity group-hover:opacity-100" />
      <motion.span
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
        className="relative z-10"
      >
        {isDark ? (
          <Sun
            size={17}
            className="text-[var(--gold)] drop-shadow-[0_0_8px_oklch(0.82_0.1_85/0.5)]"
          />
        ) : (
          <Moon
            size={17}
            className="text-primary drop-shadow-[0_0_8px_oklch(0.55_0.16_255/0.35)]"
          />
        )}
      </motion.span>
    </button>
  );
}
