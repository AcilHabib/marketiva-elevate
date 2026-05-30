import { Reveal, SectionHeading } from "./primitives";
import { services } from "./content";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="section-pad container-px relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Premium solutions across{" "}
              <span className="text-gradient">creative & digital</span>
            </>
          }
          subtitle="A full-spectrum agency — from brand strategy and development to media, print and storefront branding."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)] ${
                  s.featured
                    ? "bg-[image:var(--gradient-primary)] text-primary-foreground"
                    : "bg-card/60 backdrop-blur-sm"
                }`}
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl ${
                    s.featured
                      ? "bg-background/20"
                      : "bg-secondary text-primary"
                  }`}
                >
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    s.featured ? "text-primary-foreground/85" : "text-muted-foreground"
                  }`}
                >
                  {s.description}
                </p>

                {s.items && (
                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Check size={13} className="shrink-0 text-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
