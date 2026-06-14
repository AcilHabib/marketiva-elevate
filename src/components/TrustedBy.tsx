import { SectionHeading, GradientTitle } from "./primitives";
import { clients, type Client } from "./content";
import { useI18n } from "@/i18n/I18nProvider";

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex h-20 min-w-[260px] items-center gap-4 rounded-xl border border-border bg-card/50 px-6 backdrop-blur-sm transition-colors hover:border-primary/40">
      {client.logo ? (
        <>
          <img
            src={client.logo}
            alt=""
            loading="lazy"
            className="h-10 w-14 shrink-0 object-contain opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span dir="auto" className="font-display text-sm font-medium leading-snug text-foreground/90">
            {client.name}
          </span>
        </>
      ) : (
        <span dir="auto" className="font-display text-sm font-medium tracking-wide text-muted-foreground">
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
    </section>
  );
}
