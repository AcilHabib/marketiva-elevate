import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Algeria Marketiva — Links" },
      {
        name: "description",
        content:
          "All the ways to connect with Algeria Marketiva — website, WhatsApp, email, and location.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Algeria Marketiva — Links" },
      {
        property: "og:description",
        content: "Connect with Algeria Marketiva across every channel.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/brand/logo-full.png" },
    ],
  }),
  component: LinksPage,
});

type LinkItem = {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  external?: boolean;
  disabled?: boolean;
};

const primaryLinks: LinkItem[] = [
  {
    label: "Website",
    value: "algeriamarketiva.com",
    href: "https://algeriamarketiva.com",
    icon: Globe,
    external: true,
  },
  {
    label: "WhatsApp",
    value: "+213 550 06 45 71",
    href: "https://wa.me/213550064571",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Email",
    value: "algeriamarketiva@gmail.com",
    href: "mailto:algeriamarketiva@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Rue Haffad Abdelmadjid, Sétif",
    href: "https://www.google.com/maps/place/Rue+Haffad+Abdelmadid,+Setif/@36.1899798,5.4049042,17z/data=!3m1!4b1!4m6!3m5!1s0x12f3159c7ff9faff:0x951009c80d3b589f!8m2!3d36.1899798!4d5.4074791!16s%2Fg%2F1tx75lmg",
    icon: MapPin,
    external: true,
  },
];

const socialLinks: LinkItem[] = [
  { label: "Facebook", value: "#", href: "#", icon: Facebook, disabled: true },
  { label: "Instagram", value: "#", href: "#", icon: Instagram, disabled: true },
  { label: "LinkedIn", value: "#", href: "#", icon: Linkedin, disabled: true },
];

function LinksPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] translate-x-1/3 translate-y-1/3 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,hsl(var(--background))_75%)]" />
      </div>

      <main className="container-px mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="rounded-2xl border border-border bg-card/60 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm">
            <BrandLogo variant="icon" markClassName="h-14 w-14" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Algeria <span className="text-primary">Marketiva</span>
          </h1>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground sm:text-base">
            Where Innovation Builds Powerful Brands
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
          }}
          className="mt-10 w-full space-y-3"
        >
          {primaryLinks.map((item) => (
            <LinkCard key={item.label} item={item} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex items-center gap-3"
        >
          {socialLinks.map((s) => (
            <SocialButton key={s.label} item={s} />
          ))}
        </motion.div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Algeria Marketiva. All rights reserved.
        </p>
      </main>
    </div>
  );
}

function LinkCard({ item }: { item: LinkItem }) {
  const Icon = item.icon;
  return (
    <motion.a
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0 },
      }}
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      dir="ltr"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card/70 p-4 text-start shadow-[var(--shadow-card)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]">
        <Icon size={18} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {item.label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-foreground">
          {item.value}
        </span>
      </span>
      <span
        aria-hidden
        className="text-muted-foreground transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </motion.a>
  );
}

function SocialButton({ item }: { item: LinkItem }) {
  const Icon = item.icon;
  const base =
    "grid h-11 w-11 place-items-center rounded-full border border-border bg-card/70 backdrop-blur-sm transition-all";

  if (item.disabled) {
    return (
      <span
        aria-label={`${item.label} (coming soon)`}
        title={`${item.label} — coming soon`}
        className={`${base} cursor-not-allowed text-muted-foreground/60`}
      >
        <Icon size={17} />
      </span>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className={`${base} text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary`}
    >
      <Icon size={17} />
    </a>
  );
}
