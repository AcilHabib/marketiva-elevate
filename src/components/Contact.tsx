import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal, SectionHeading } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

const LOCATION_URL = "https://share.google/Q10G60jOizrqssFbd";

const details = [
  { icon: Phone, label: "Phone", value: "+213 675 36 78 96", href: "tel:+213675367896" },
  { icon: Mail, label: "Email", value: "contact@am.com", href: "mailto:contact@am.com" },
  { icon: MapPin, label: "Location", value: "View on Google Maps", href: LOCATION_URL },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-pad container-px relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Let's Talk"
          title={
            <>
              Ready to build something{" "}
              <span className="text-gradient">powerful?</span>
            </>
          }
          subtitle="Tell us about your project and our team will get back to you within 24 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-[image:var(--gradient-primary)] p-8 text-primary-foreground">
              <div>
                <h3 className="text-xl font-semibold">Algeria Marketiva</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Where innovation builds powerful brands.
                </p>
              </div>
              <div className="space-y-4">
                {details.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.label === "Location" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-background/15 p-4 transition-colors hover:bg-background/25"
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
                <Field label="Name">
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="input-field"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="input-field"
                  />
                </Field>
              </div>
              <Field label="Message">
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="input-field resize-none"
                />
              </Field>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                Send Message
                <Send size={15} className="transition-transform group-hover:translate-x-1" />
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
