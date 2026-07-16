import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe,
  MessageCircle,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Reveal } from "@/components/primitives";
import { cn } from "@/lib/utils";

const WEBSITE = "https://algeriamarketiva.com";
const WHATSAPP = "213550064571";
const EMAIL = "algeriamarketiva@gmail.com";
const LOCATION_URL =
  "https://www.google.com/maps/place/Rue+Haffad+Abdelmadid,+Setif/@36.1899798,5.4049042,17z/data=!3m1!4b1!4m6!3m5!1s0x12f3159c7ff9faff:0x951009c80d3b589f!8m2!3d36.1899798!4d5.4074791!16s%2Fg%2F1tx75lmg?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D";

type LinkItem = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  external?: boolean;
  disabled?: boolean;
};

const links: LinkItem[] = [
  {
    id: "website",
    label: "Website",
    description: "algeriamarketiva.com",
    icon: Globe,
    href: WEBSITE,
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "0550 06 45 71",
    icon: MessageCircle,
    href: `https://wa.me/${WHATSAPP}`,
    external: true,
  },
  {
    id: "email",
    label: "Email",
    description: EMAIL,
    icon: Mail,
    href: `mailto:${EMAIL}`,
  },
  {
    id: "location",
    label: "Location",
    description: "Rue Haffad Abdelmadjid, Sétif",
    icon: MapPin,
    href: LOCATION_URL,
    external: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    description: "Coming Soon",
    icon: Facebook,
    disabled: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    description: "Coming Soon",
    icon: Instagram,
    disabled: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Coming Soon",
    icon: Linkedin,
    disabled: true,
  },
];

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Algeria Marketiva — Links" },
      {
        name: "description",
        content:
          "Official links for Algeria Marketiva — website, WhatsApp, email, and location. Where Innovation Builds Powerful Brands.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Algeria Marketiva — Links" },
      {
        property: "og:description",
        content:
          "Connect with Algeria Marketiva. Website, WhatsApp, email, and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/brand/logo-full.png" },
    ],
  }),
  component: LinksPage,
});

function LinksPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 18, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 bottom-24 h-64 w-64 rounded-full bg-[oklch(0.55_0.16_262)]/25 blur-3xl"
      />

      <main className="container-px relative z-10 mx-auto flex min-h-screen max-w-lg flex-col items-center px-5 py-14 sm:py-20">
        <Reveal className="flex w-full flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
            <Sparkles size={12} className="text-[var(--gold)]" />
            Connect with us
          </span>

          <BrandLogo
            variant="full"
            className="mt-8 h-24 w-auto max-w-[200px] object-contain sm:h-28 sm:max-w-[220px]"
          />

          <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Algeria <span className="text-gradient">Marketiva</span>
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
            Where Innovation Builds Powerful Brands
          </p>
        </Reveal>

        <ul className="mt-10 flex w-full list-none flex-col gap-3 sm:mt-12 sm:gap-3.5">
          {links.map((link, i) => (
            <Reveal key={link.id} delay={0.06 + i * 0.06} y={20}>
              <LinkCard link={link} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.55} className="mt-12 text-center sm:mt-14">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Algeria Marketiva
          </p>
        </Reveal>
      </main>
    </div>
  );
}

function LinkCard({ link }: { link: LinkItem }) {
  const Icon = link.icon;
  const baseClass = cn(
    "group relative flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-start transition-all duration-300 sm:gap-5 sm:px-5 sm:py-5",
    "glass shadow-[var(--shadow-elegant)]",
    link.disabled
      ? "cursor-not-allowed opacity-45"
      : "hover:-translate-y-0.5 hover:border-primary/35 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
  );

  const content = (
    <>
      <span
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12",
          link.disabled
            ? "bg-secondary/60 text-muted-foreground"
            : "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]",
        )}
      >
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-sm font-semibold tracking-tight sm:text-base">
          {link.label}
        </span>
        <span
          className={cn(
            "mt-0.5 block truncate text-xs sm:text-sm",
            link.disabled ? "text-muted-foreground/80" : "text-muted-foreground",
          )}
        >
          {link.description}
        </span>
      </span>
      {!link.disabled && (
        <ArrowUpRight
          size={16}
          className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        />
      )}
      {link.disabled && (
        <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Soon
        </span>
      )}
    </>
  );

  if (link.disabled || !link.href) {
    return (
      <div className={baseClass} aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={baseClass}
    >
      {content}
    </a>
  );
}
