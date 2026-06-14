import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal, SectionHeading, GradientTitle } from "./primitives";
import { useI18n } from "@/i18n/I18nProvider";
import { BrandLogo } from "./BrandLogo";

const LOCATION_URL = "https://share.google/Q10G60jOizrqssFbd";

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const schema = z.object({
    name: z.string().trim().min(2, t.contact.errors.name).max(100),
    email: z.string().trim().email(t.contact.errors.email).max(255),
    message: z.string().trim().min(10, t.contact.errors.message).max(1000),
  });

  const details = [
    { icon: Phone, label: t.contact.labels.phone, value: "+213 675 36 78 96", href: "tel:+213675367896", external: false },
    { icon: Mail, label: t.contact.labels.email, value: "contact@am.com", href: "mailto:contact@am.com", external: false },
    { icon: MapPin, label: t.contact.labels.location, value: t.contact.labels.locationValue, href: LOCATION_URL, external: true },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success(t.contact.toast.success);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-pad container-px relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={<GradientTitle {...t.contact.title} />}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-[image:var(--gradient-primary)] p-8 text-primary-foreground">
              <div>
                <BrandLogo variant="icon" markTone="on-primary" markClassName="mb-4 h-12 w-12" />
                <h3 className="text-xl font-semibold">{t.contact.cardTitle}</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  {t.contact.cardTagline}
                </p>
              </div>
              <div className="space-y-4">
                {details.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.external ? "_blank" : undefined}
                    rel="noreferrer"
                    dir="ltr"
                    className="flex items-center gap-4 rounded-xl bg-background/15 p-4 text-start transition-colors hover:bg-background/25"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background/20">
                      <d.icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-primary-foreground/70">
                        {d.label}
                      </span>
                      <span className="text-sm font-medium">{d.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.contact.form.name}>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="input-field"
                  />
                </Field>
                <Field label={t.contact.form.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="input-field"
                  />
                </Field>
              </div>
              <Field label={t.contact.form.message}>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="input-field resize-none"
                />
              </Field>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                {t.contact.form.submit}
                <Send size={15} className="transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
