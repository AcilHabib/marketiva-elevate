import { useI18n } from "@/i18n/I18nProvider";
import { BrandLogo } from "./BrandLogo";

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
        <div className="flex items-center">
          <BrandLogo variant="full" className="h-14 w-auto max-w-[200px]" />
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

        <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground md:items-end">
          <p>
            © {new Date().getFullYear()} Algeria Marketiva. {t.footer.rights}
          </p>
          <p>
            {t.footer.madeBy}{" "}
            <a
              href="https://portfolio-acilhabibs-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Assil Habib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
