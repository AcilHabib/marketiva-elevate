import { Camera, Megaphone, Code2 } from "lucide-react";
import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import { useI18n } from "@/i18n/I18nProvider";

const courseIcons = [Camera, Megaphone, Code2];

export function Formations() {
  const { t } = useI18n();
  const courses = t.formations.courses;

  return (
    <section id="formations" className="section-pad container-px relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.formations.eyebrow}
          title={<GradientTitle {...t.formations.title} />}
          subtitle={t.formations.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {courses.map((course, i) => {
            const Icon = courseIcons[i] ?? Camera;
            return (
              <Reveal key={course.title} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--shadow-card)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{course.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {course.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    {t.formations.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
