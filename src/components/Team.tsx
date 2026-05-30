import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import { team } from "./content";
import { TeamAvatar } from "./TeamAvatar";
import { useI18n } from "@/i18n/I18nProvider";

export function Team() {
  const { t } = useI18n();
  return (
    <section id="team" className="section-pad container-px relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.team.eyebrow}
          title={<GradientTitle {...t.team.title} />}
          subtitle={t.team.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={(i % 4) * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="relative aspect-square overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <TeamAvatar name={m.name} index={i} photo={m.photo} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold">{m.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {t.team.roles[m.id]}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
