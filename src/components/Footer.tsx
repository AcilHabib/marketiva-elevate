import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.clients, href: "#clients" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
            AM
          </span>
          <span className="font-display text-sm font-semibold">
            Algeria <span className="text-gradient">Marketiva</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Algeria Marketiva. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
