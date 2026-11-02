import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import { services } from "./content";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

const PROJECT_LINKED_SERVICES: Record<
  string,
  "design" | "videography" | "software" | "photography" | "impression"
> = {
  brand: "design",
  content: "videography",
  web: "software",
  photography: "photography",
  print: "impression",
};

export function Services() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="section-pad container-px relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[var(--gold)]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={<GradientTitle {...t.services.title} />}
          subtitle={t.services.subtitle}
        />

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles size={12} className="text-[var(--gold)]" />
            {t.services.tapHint}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const text = t.services.items[s.id];
            const isOpen = expanded === s.id;
            const Icon = s.icon;
            const projectsSection = PROJECT_LINKED_SERVICES[s.id];
            const projectsLabel = projectsSection
              ? t.projectsPage.sections[projectsSection].title
              : null;

            return (
              <Reveal
                key={s.id}
                delay={(i % 3) * 0.06}
                className={cn(isOpen && "sm:col-span-2 lg:col-span-3")}
              >
                <motion.article
                  layout
                  data-expanded={isOpen}
                  onClick={() => toggle(s.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(s.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  className={cn(
                    "service-card-glow group relative cursor-pointer overflow-hidden rounded-2xl border transition-shadow duration-500",
                    isOpen
                      ? "border-primary/50 bg-card shadow-[var(--shadow-elegant)]"
                      : "border-border bg-card/60 backdrop-blur-sm hover:border-primary/35 hover:shadow-[var(--shadow-card)]",
                    s.featured && !isOpen && "ring-1 ring-primary/20",
                  )}
                  whileHover={!isOpen ? { y: -4 } : undefined}
                  transition={{ layout: { duration: 0.45, ease: [0.21, 0.6, 0.35, 1] } }}
                >
                  <div className="relative z-10 p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <motion.div
                          layout
                          className={cn(
                            "grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors",
                            s.featured || isOpen
                              ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]"
                              : "bg-secondary text-primary group-hover:bg-primary/15",
                          )}
                        >
                          <Icon size={22} />
                        </motion.div>
                        <div className="min-w-0 text-start">
                          <motion.h3 layout className="text-lg font-semibold leading-snug">
                            {text.title}
                          </motion.h3>
                          <motion.p
                            layout
                            className="mt-2 text-sm leading-relaxed text-muted-foreground"
                          >
                            {text.description}
                          </motion.p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35 }}
                        className={cn(
                          "mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-secondary/50",
                          isOpen && "border-primary/40 bg-primary/10 text-primary",
                        )}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && text.highlights && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -8 }}
                            animate={{ y: 0 }}
                            exit={{ y: -8 }}
                            transition={{ duration: 0.35, delay: 0.05 }}
                            className="mt-6 border-t border-border/80 pt-6"
                          >
                            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                              {text.highlights.map((item, idx) => (
                                <motion.li
                                  key={item}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.06 + idx * 0.04 }}
                                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-primary)] shadow-[0_0_8px_oklch(0.66_0.16_252/0.5)]" />
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {projectsLabel && (
                      <a
                        href={`/projects?service=${s.id}`}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        {t.services.seeProjects.replace("{{name}}", projectsLabel)}
                        <ArrowUpRight size={15} strokeWidth={2} />
                      </a>
                    )}
                  </div>

                  {!isOpen && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
