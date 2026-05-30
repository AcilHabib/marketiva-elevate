import { Reveal, SectionHeading } from "./primitives";
import { team } from "./content";
import { TeamAvatar } from "./TeamAvatar";

export function Team() {
  return (
    <section id="team" className="section-pad container-px relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The People"
          title={
            <>
              Meet the team behind{" "}
              <span className="text-gradient">the work</span>
            </>
          }
          subtitle="A multidisciplinary team of specialists turning ambitious ideas into polished reality."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="relative aspect-square overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <TeamAvatar name={m.name} index={i} photo={m.photo} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {m.role}
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
