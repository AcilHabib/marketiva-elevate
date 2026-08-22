import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/i18n/ThemeProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { BrandLogo } from "./BrandLogo";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useI18n();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.clients, href: "/#clients" },
    { label: t.nav.testimonials, href: "/#testimonials" },
    { label: t.nav.formations, href: "/#formations" },
    { label: t.nav.faq, href: "/#faq" },
    { label: t.nav.team, href: "/#team" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const logoOnLightBar = scrolled && theme === "light";
  const logoAppearance = logoOnLightBar ? "default" : "nav";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = cn(
    "whitespace-nowrap rounded-md px-1.5 py-1 text-[10px] font-medium tracking-wide transition-colors xl:px-2 xl:text-xs",
    logoOnLightBar
      ? "text-muted-foreground hover:text-foreground"
      : "text-white/75 hover:text-white",
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "container-px mx-auto max-w-7xl transition-all duration-300",
          scrolled
            ? "my-2 rounded-2xl border border-border bg-background/80 py-2 shadow-[var(--shadow-card)] backdrop-blur-xl lg:my-2.5 lg:py-2.5"
            : "py-3 lg:py-4",
          !scrolled && "bg-gradient-to-b from-background/50 to-transparent",
        )}
      >
        <div className="flex items-center gap-2 lg:gap-3">
          <a href="/" className="flex shrink-0 items-center" aria-label={brand.name}>
            <BrandLogo
              variant="inline"
              appearance={logoAppearance}
              className="hidden xl:inline-flex"
              wordmarkClassName="text-sm"
              markClassName="h-8 w-8"
            />
            <BrandLogo
              variant="icon"
              appearance={logoAppearance}
              className="xl:hidden"
              markClassName="h-8 w-8"
            />
          </a>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex xl:gap-0.5"
            aria-label="Main"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="ms-auto flex shrink-0 items-center gap-1">
            <div className="hidden items-center gap-0.5 sm:flex">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <a
              href="/#contact"
              className="hidden rounded-full bg-[image:var(--gradient-primary)] px-3 py-2 text-[10px] font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5 sm:inline-flex xl:px-4 xl:py-2.5 xl:text-xs"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "grid h-9 w-9 place-items-center rounded-lg border lg:hidden",
                logoOnLightBar
                  ? "border-border text-foreground"
                  : "border-white/20 bg-white/5 text-white backdrop-blur-sm",
              )}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-px mx-auto max-w-7xl lg:hidden"
          >
            <div className="rounded-2xl border border-border bg-background/95 p-3 shadow-[var(--shadow-card)] backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-end gap-1 border-b border-border pb-3 sm:hidden">
                <ThemeToggle compact />
                <LanguageSwitcher compact />
              </div>
              <div className="grid grid-cols-2 gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-[image:var(--gradient-primary)] px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
