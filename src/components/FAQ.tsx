import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/i18n/I18nProvider";

export function FAQ() {
  const { t } = useI18n();

  return (
    <section id="faq" className="section-pad container-px relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={<GradientTitle {...t.faq.title} />}
          subtitle={t.faq.subtitle}
        />

        <Reveal delay={0.15} className="mt-12">
          <div className="rounded-2xl border border-border bg-card/50 p-2 backdrop-blur-sm sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="border-border/60 px-3 sm:px-4"
                >
                  <AccordionTrigger className="gap-3 py-5 text-start text-base font-medium hover:no-underline [&[data-state=open]]:text-primary">
                    <span className="flex items-start gap-3">
                      <HelpCircle size={18} className="mt-0.5 shrink-0 text-primary/70" />
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="ps-9 text-sm leading-relaxed text-muted-foreground">
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.a}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
