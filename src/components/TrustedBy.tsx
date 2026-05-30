import { Reveal, SectionHeading } from "./primitives";
import { clients } from "./content";

function ClientCard({ name }: { name: string }) {
  return (
    <div className="flex h-20 min-w-[220px] items-center justify-center rounded-xl border border-border bg-card/50 px-8 text-center backdrop-blur-sm transition-colors hover:border-primary/40">
      <span className="font-display text-sm font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  const row = [...clients, ...clients];
  return (
    <section id="clients" className="section-pad relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted By"
          title={
            <>
              Brands that grow with{" "}
              <span className="text-gradient">Marketiva</span>
            </>
          }
          subtitle="From retail and sports to logistics and manufacturing — businesses across Algeria and beyond rely on us."
        />
      </div>

      {/* Marquee */}
      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-5 px-3">
          {row.map((c, i) => (
            <ClientCard key={`${c}-${i}`} name={c} />
          ))}
        </div>
      </div>

      {/* Static grid for richness */}
      <div className="container-px mx-auto mt-12 max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.slice(0, 8).map((c, i) => (
            <Reveal key={c} delay={(i % 4) * 0.06}>
              <ClientCard name={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
