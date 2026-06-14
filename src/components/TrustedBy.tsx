import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import { clients, type Client } from "./content";
import { useI18n } from "@/i18n/I18nProvider";

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex h-20 min-w-[220px] items-center justify-center rounded-xl border border-border bg-card/50 px-8 text-center backdrop-blur-sm transition-colors hover:border-primary/40">
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          className="max-h-12 max-w-[180px] object-contain opacity-90 transition-opacity hover:opacity-100"
        />
      ) : (
        <span className="font-display text-sm font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
          {client.name}
        </span>
      )}
    </div>
  );
}

export function TrustedBy() {
  const { t } = useI18n();
  const row = [...clients, ...clients];
  return (
    <section id="clients" className="section-pad relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.clientsSection.eyebrow}
          title={<GradientTitle {...t.clientsSection.title} />}
          subtitle={t.clientsSection.subtitle}
        />
      </div>

      {/* Marquee */}
      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-5 px-3">
          {row.map((c, i) => (
            <ClientCard key={`${c.id}-${i}`} client={c} />
          ))}
        </div>
      </div>

      {/* Static grid for richness */}
      <div className="container-px mx-auto mt-12 max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.slice(0, 8).map((c, i) => (
            <Reveal key={c.id} delay={(i % 4) * 0.06}>
              <ClientCard client={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
