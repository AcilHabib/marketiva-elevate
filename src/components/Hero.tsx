import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { useI18n } from "@/i18n/I18nProvider";
import type { Lang } from "@/i18n/translations";

const heroCopy: Record<
  Lang,
  { line1: string; line2: string; accent: string; positioning: string }
> = {
  fr: {
    line1: "Marketing intelligent.",
    line2: "Croissance",
    accent: "réelle.",
    positioning: "STRATÉGIE · CRÉATIVITÉ · PERFORMANCE",
  },
  en: {
    line1: "Intelligent marketing.",
    line2: "Real",
    accent: "growth.",
    positioning: "STRATEGY · CREATIVITY · PERFORMANCE",
  },
  ar: {
    line1: "تسويق ذكي.",
    line2: "نمو",
    accent: "حقيقي.",
    positioning: "استراتيجية · إبداع · أداء",
  },
};

export function Hero() {
  const { lang } = useI18n();
  const copy = heroCopy[lang];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full scale-105 object-cover object-center"
        />
        {/* Deep navy / brand-blue overlay — readable text, photo still present */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.18 0.06 255 / 0.82) 0%, oklch(0.12 0.05 258 / 0.88) 45%, oklch(0.08 0.03 255 / 0.92) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.08_0.03_255/0.45)_100%)]" />
      </div>

      <div className="container-px relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.35rem,6.5vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white"
        >
          <span className="block">{copy.line1}</span>
          <span className="mt-1 block sm:mt-2">
            {copy.line2}{" "}
            <span className="text-[oklch(0.72_0.14_252)]">{copy.accent}</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-[11px] font-medium uppercase tracking-[0.32em] text-white/70 sm:mt-10 sm:text-xs sm:tracking-[0.38em]"
        >
          {copy.positioning}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 h-px w-16 origin-center bg-[oklch(0.66_0.14_252/0.85)] sm:mt-8 sm:w-20"
          aria-hidden
        />
      </div>
    </section>
  );
}
