import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { BrandLogo } from "./BrandLogo";
import { brand } from "@/lib/brand";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.clients, href: "#clients" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`container-px mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled
            ? "my-3 rounded-2xl border border-border bg-background/70 py-3 backdrop-blur-xl"
            : "py-5"
        }`}
      >
        <a href="#home" className="flex shrink-0 items-center" aria-label={brand.name}>
          <BrandLogo variant="inline" className="hidden sm:inline-flex" />
          <BrandLogo variant="icon" className="sm:hidden" markClassName="h-8 w-8" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
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

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle compact />
          <LanguageSwitcher compact />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-px mx-auto max-w-7xl md:hidden"
        >
          <div className="rounded-2xl border border-border bg-background/95 p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-[image:var(--gradient-primary)] px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
