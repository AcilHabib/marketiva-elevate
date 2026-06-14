import { useState } from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import { team } from "./content";
import { TeamAvatar } from "./TeamAvatar";
import { useI18n } from "@/i18n/I18nProvider";
import { getBusinessPlan } from "@/i18n/businessPlans";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function Team() {
  const { t, lang } = useI18n();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = team.find((m) => m.id === selectedId);
  const plan = selectedId ? getBusinessPlan(lang, selectedId) : undefined;

  return (
    <section id="team" className="section-pad container-px relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.team.eyebrow}
          title={<GradientTitle {...t.team.title} />}
          subtitle={t.team.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={(i % 5) * 0.06}>
              <button
                type="button"
                onClick={() => setSelectedId(m.id)}
                className="group w-full overflow-hidden rounded-2xl border border-border bg-card/60 text-start backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative aspect-square overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <TeamAvatar name={m.name} index={i} photo={m.photo} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-3 left-3 right-3 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground/90 opacity-0 transition-opacity group-hover:opacity-100">
                    {t.team.viewPlan}
                    <ChevronRight size={12} className="rtl:rotate-180" />
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-semibold sm:text-base">{m.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {t.team.roles[m.id]}
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-primary">{t.team.experience}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedId} onOpenChange={(open) => !open && setSelectedId(null)}>
        <DialogContent className="max-h-[min(90vh,820px)] max-w-2xl overflow-y-auto rounded-2xl border-border bg-background/95 backdrop-blur-xl sm:max-w-3xl">
          {selected && plan && (
            <>
              <DialogHeader className="space-y-3 border-b border-border pb-4 text-start">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border">
                    <TeamAvatar
                      name={selected.name}
                      index={team.findIndex((m) => m.id === selected.id)}
                      photo={selected.photo}
                    />
                  </div>
                  <div>
                    <DialogTitle className="font-display text-xl">{selected.name}</DialogTitle>
                    <DialogDescription className="mt-1 text-sm text-muted-foreground">
                      {t.team.roles[selected.id]} · {t.team.experience}
                    </DialogDescription>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Briefcase size={13} />
                  {t.team.planTitle}
                </div>
              </DialogHeader>

              <div className="space-y-6 pt-2 text-sm leading-relaxed text-muted-foreground">
                {plan.intro.split("\n\n").map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}

                <ol className="space-y-5">
                  {plan.steps.map((step, idx) => (
                    <li key={step.title} className="rounded-xl border border-border bg-card/40 p-4">
                      <h4 className="font-display text-sm font-semibold text-foreground">
                        {idx + 1}. {step.title}
                      </h4>
                      <ul className="mt-3 list-inside list-disc space-y-1 text-xs sm:text-sm">
                        {step.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p className="mt-3 text-xs font-medium text-primary">
                        {t.team.outcomeLabel}: {step.outcome}
                      </p>
                    </li>
                  ))}
                </ol>

                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {t.team.frameworkTitle}
                  </h4>
                  <div className="mt-3 space-y-1 font-mono text-xs text-muted-foreground">
                    {plan.framework.map((line, i) => (
                      <div key={line} className="flex items-center gap-2">
                        {i > 0 && <span className="text-primary/60">↓</span>}
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {t.team.deliverablesTitle}
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {plan.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="text-primary">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {t.team.resultTitle}
                  </h4>
                  <p className="mt-2 text-sm">{plan.result}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
