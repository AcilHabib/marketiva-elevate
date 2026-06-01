import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import { testimonialsMeta } from "./content";
import { TeamAvatar } from "./TeamAvatar";
import { useI18n } from "@/i18n/I18nProvider";

function TestimonialCard({
  id,
  avatarIndex,
  quote,
  name,
  role,
  company,
}: {
  id: string;
  avatarIndex: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <article
      key={id}
      className="group relative w-[min(100%,340px)] shrink-0 snap-center rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-[var(--shadow-card)] sm:w-[360px] sm:p-7"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[image:var(--gradient-sheen)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <Quote size={28} className="relative text-primary/40" />
      <p className="relative mt-4 text-sm leading-relaxed text-foreground/90">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="relative mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
          <TeamAvatar name={name} index={avatarIndex} />
        </div>
        <div className="min-w-0 text-start">
          <p className="truncate text-sm font-semibold">{name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {role} · {company}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const { t } = useI18n();
  const items = testimonialsMeta.map((meta) => ({
    ...meta,
    ...t.testimonials.items[meta.id],
  }));

  const track = [...items, ...items];

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-primary/5 blur-[100px]" />

      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={<GradientTitle {...t.testimonials.title} />}
          subtitle={t.testimonials.subtitle}
        />

        <Reveal delay={0.12} className="mt-14">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-e from-background to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-s from-background to-transparent sm:w-24" />

            <div className="overflow-hidden">
              <motion.div
                className="flex w-max gap-5 py-2"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" },
                }}
              >
                {track.map((item, i) => (
                  <TestimonialCard key={`${item.id}-${i}`} {...item} />
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
