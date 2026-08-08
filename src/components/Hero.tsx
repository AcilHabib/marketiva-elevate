import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export function Hero() {
  const { t } = useI18n();
  const stats = [
    { value: "16+", label: t.hero.stats.brands },
    { value: "15", label: t.hero.stats.specialists },
    { value: "360°", label: t.hero.stats.scope },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-80 dark:opacity-80 light:opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10 dark:via-background/40 light:via-background/70" />
      </div>

      <motion.div
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 bottom-1/4 h-64 w-64 rounded-full bg-[oklch(0.55_0.16_262)]/20 blur-3xl"
      />

      <div className="container-px relative z-10 mx-auto max-w-7xl pt-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          <Sparkles size={14} className="text-[var(--gold)]" />
          {t.hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          {t.hero.title.lead}{" "}
          <span className="text-gradient">{t.hero.title.accent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
          >
            {t.hero.ctaPrimary}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46 }}
          className="mt-16 flex max-w-lg gap-10 border-t border-border pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold text-foreground">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
