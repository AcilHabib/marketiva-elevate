import { Lightbulb, Target, Rocket, Layers } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Forward-thinking ideas and technology that keep your brand ahead of the curve.",
  },
  {
    icon: Target,
    title: "Strategy",
    text: "Every decision backed by insight, intent and measurable business goals.",
  },
  {
    icon: Layers,
    title: "Creativity",
    text: "Distinctive design and storytelling that makes your brand unforgettable.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    text: "Modernising Algerian businesses with the tools to scale and compete globally.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad container-px relative">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title={
              <>
                A premium partner for{" "}
                <span className="text-gradient">ambitious Algerian brands</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Algeria Marketiva is a premium creative and digital agency built to
              help businesses evolve. We blend strategy, design, media and
              technology into one seamless force — guiding companies through
              modern branding, digital transformation and sustainable growth.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Rooted in national identity and local market expertise, we carry a
              clear ambition: to elevate Algerian business to a world-class
              standard with solutions that feel as refined as they are
              effective.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
