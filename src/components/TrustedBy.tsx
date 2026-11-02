"use client";

import { SectionHeading, GradientTitle } from "./primitives";
import { useI18n } from "@/i18n/I18nProvider";
import type { TrustedBrand } from "@/admin/types";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex h-[4.75rem] w-40 shrink-0 items-center justify-center px-4 sm:h-[5.25rem] sm:w-48 sm:px-5">
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-12 max-w-[min(100%,148px)] rounded-lg object-contain opacity-70 grayscale-[25%] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14 sm:max-w-[168px] sm:rounded-xl"
      />
    </div>
  );
}

export function TrustedBy({ brands }: { brands: TrustedBrand[] }) {
  const { t } = useI18n();
  const logoClients = brands.filter((c) => Boolean(c.logoUrl));
  const row = logoClients.length > 0 ? [...logoClients, ...logoClients] : [];

  return (
    <section
      id="clients"
      className="relative overflow-hidden pb-10 pt-[clamp(5rem,10vw,9rem)] sm:pb-12"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.clientsSection.eyebrow}
          title={<GradientTitle {...t.clientsSection.title} />}
          subtitle={t.clientsSection.subtitle}
        />
      </div>

      <div className="relative mt-8 sm:mt-10">
        {row.length === 0 ? (
          <p className="container-px mx-auto max-w-7xl text-center text-sm text-muted-foreground">
            —
          </p>
        ) : (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

            <div className="flex w-max animate-[marquee_42s_linear_infinite] items-center gap-1 sm:gap-2">
              {row.map((c, i) => (
                <ClientLogo key={`${c.id}-${i}`} name={c.name} logo={c.logoUrl} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
