import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BrandLogo } from "./BrandLogo";
import { brand } from "@/lib/brand";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const navCopy: Record<
  Lang,
  {
    services: string;
    work: string;
    about: string;
    resources: string;
    cta: string;
  }
> = {
  fr: {
    services: "Services",
    work: "Réalisations",
    about: "À propos",
    resources: "Ressources",
    cta: "Contactez-nous",
  },
  en: {
    services: "Services",
    work: "Work",
    about: "About",
    resources: "Resources",
    cta: "Contact us",
  },
  ar: {
    services: "الخدمات",
    work: "أعمالنا",
    about: "من نحن",
    resources: "الموارد",
    cta: "تواصل معنا",
  },
};

export function Navbar() {
  const { lang } = useI18n();
  const copy = navCopy[lang];
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: copy.services, href: "/#services" },
    { label: copy.work, href: "/projects" },
    { label: copy.about, href: "/#about" },
    { label: copy.resources, href: "/#formations" },
  ];

  const solid = scrolled || !isHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-[background-color,backdrop-filter,border-color] duration-500",
          solid
            ? "border-b border-white/[0.06] bg-[oklch(0.12_0.04_255/0.82)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-px mx-auto flex h-[4.25rem] max-w-7xl items-center gap-6 lg:h-[4.75rem] lg:gap-10">
          <a href="/" className="flex shrink-0 items-center" aria-label={brand.name}>
            <BrandLogo
              variant="inline"
              appearance="nav"
              className="hidden sm:inline-flex"
              wordmarkClassName="text-[0.95rem] tracking-[-0.01em]"
              markClassName="h-8 w-8"
            />
            <BrandLogo
              variant="icon"
              appearance="nav"
              className="sm:hidden"
              markClassName="h-8 w-8"
            />
          </a>

          <nav
            className="hidden flex-1 items-center justify-center gap-9 lg:flex xl:gap-11"
            aria-label="Main"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium tracking-[0.04em] text-white/70 transition-colors duration-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="ms-auto flex shrink-0 items-center gap-3 sm:gap-4">
            <div
              className={cn(
                "hidden sm:block",
                "[&_button]:rounded-none [&_button]:border-0 [&_button]:bg-transparent [&_button]:px-2 [&_button]:py-1.5",
                "[&_button]:text-[13px] [&_button]:font-medium [&_button]:tracking-[0.04em] [&_button]:text-white/70",
                "[&_button]:hover:bg-transparent [&_button]:hover:text-white",
                "[&_svg]:text-white/55",
              )}
            >
              <LanguageSwitcher />
            </div>

            <a
              href="/#contact"
              className="group hidden items-center gap-1.5 text-[13px] font-medium tracking-[0.04em] text-white transition-colors duration-300 hover:text-[oklch(0.78_0.1_252)] sm:inline-flex"
            >
              {copy.cta}
              <ArrowUpRight
                size={14}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center text-white/85 transition-colors hover:text-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[4.25rem] z-40 bg-[oklch(0.1_0.035_255/0.96)] backdrop-blur-xl lg:hidden"
          >
            <div className="container-px mx-auto flex h-full max-w-7xl flex-col px-6 py-10">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="border-b border-white/[0.06] py-4 text-2xl font-medium tracking-[-0.02em] text-white/90"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto space-y-6 pb-8">
                <div
                  className={cn(
                    "[&_button]:rounded-none [&_button]:border-0 [&_button]:bg-transparent [&_button]:px-0",
                    "[&_button]:text-base [&_button]:text-white/70 [&_button]:hover:bg-transparent [&_button]:hover:text-white",
                    "[&_svg]:text-white/55",
                  )}
                >
                  <LanguageSwitcher />
                </div>
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-lg font-medium text-white"
                >
                  {copy.cta}
                  <ArrowUpRight size={18} strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
