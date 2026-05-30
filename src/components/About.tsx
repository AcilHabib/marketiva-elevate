import { Lightbulb, Target, Rocket, Layers } from "lucide-react";
import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [Lightbulb, Target, Layers, Rocket];

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="section-pad container-px relative">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow={t.about.eyebrow}
            title={<GradientTitle {...t.about.title} />}
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.about.p1}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t.about.p2}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {t.about.pillars.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
