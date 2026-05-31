import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, dirOf, type Dict, type Lang } from "./translations";

const STORAGE_KEY = "am-lang";
const DEFAULT_LANG: Lang = "fr";

type I18nContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (lang: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function applyDocument(lang: Lang) {
  if (typeof document === "undefined") return;
  const el = document.documentElement;
  el.lang = lang;
  el.dir = dirOf(lang);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Hydrate persisted language on the client after mount (avoids SSR mismatch).
  useEffect(() => {
    const stored = (typeof localStorage !== "undefined" &&
      localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (stored && stored in translations) {
      setLangState(stored);
      applyDocument(stored);
    } else {
      applyDocument(DEFAULT_LANG);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    applyDocument(next);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const value: I18nContextValue = {
    lang,
    dir: dirOf(lang),
    setLang,
    t: translations[lang],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
