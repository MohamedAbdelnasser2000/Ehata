"use client";

/**
 * LocaleProvider — client-side i18n for a static export.
 * Exposes `t` (the whole typed dictionary), `locale`, and `setLocale`.
 * Persisting to localStorage is mandatory: cookies don't exist in an export.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  dictionaries,
  dirOf,
  pick,
  type Locale,
  type LocalizedText,
} from "@/lib/i18n";

type Dictionary = typeof dictionaries.en;

interface LocaleContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLocale: (next: Locale) => void;
  /** Resolve a bilingual content field against the active locale. */
  tr: (text: LocalizedText) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "ehata:locale";

export function LocaleProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Restore the saved preference after mount (avoids hydration mismatch).
  useEffect(() => {
    // Deferred setState (react-hooks/set-state-in-effect): run in a frame callback.
    const id = window.requestAnimationFrame(() => {
      const pathname = window.location.pathname;
      if (/^\/ar\/projects\/[^/]+\/?$/.test(pathname)) {
        setLocaleState("ar");
        localStorage.setItem(STORAGE_KEY, "ar");
        return;
      }
      if (/^\/projects\/[^/]+\/?$/.test(pathname)) {
        setLocaleState("en");
        localStorage.setItem(STORAGE_KEY, "en");
        return;
      }
      if (/^\/ar\/services(?:\/|$)/.test(pathname) || /^\/ar\/contact\/?$/.test(pathname)) {
        setLocaleState("ar");
        localStorage.setItem(STORAGE_KEY, "ar");
        return;
      }
      if (/^\/services(?:\/|$)/.test(pathname) || /^\/contact\/?$/.test(pathname)) {
        setLocaleState("en");
        localStorage.setItem(STORAGE_KEY, "en");
        return;
      }
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "ar") setLocaleState(stored);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  // Drive <html lang> and <html dir> so the whole document mirrors RTL.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dirOf(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir: dirOf(locale),
      t: dictionaries[locale],
      setLocale,
      tr: (text: LocalizedText) => pick(locale, text),
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
