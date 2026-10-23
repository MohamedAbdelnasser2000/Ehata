"use client";

/**
 * Dark mode = a `.dark` class on <html>, persisted in localStorage (cookies
 * don't exist in a static export). `ThemeScript` runs before paint to stop
 * flashes. The toggle reads/writes the DOM class and mirrors it through
 * useSyncExternalStore via a MutationObserver — React never owns the source
 * of truth, so no effect-based setState syncing (React 19 lint-clean).
 */
import { Moon, Sun } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "./locale-provider";

const STORAGE_KEY = "ehata:theme";

/** Inline, pre-hydration script — rendered as a string, no imports allowed. */
export function ThemeScript() {
  const src = `(function(){try{var s=localStorage.getItem("${STORAGE_KEY}");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var c=document.documentElement.classList;if(d)c.add("dark");else c.remove("dark");}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: src }} />;
}

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getThemeSnapshot = () =>
  document.documentElement.classList.contains("dark");

// During SSR there is no document; the pre-paint script has already decided.
const getServerSnapshot = () => false;

export function useIsDark() {
  return useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerSnapshot,
  );
}

export function useThemeToggle() {
  return useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  }, []);
}

/** Pill switch; icons swap via CSS so the visible state never awaits JS. */
export function ThemeToggle({ className }: { className?: string }) {
  const { t } = useLocale();
  const isDark = useIsDark();
  const toggle = useThemeToggle();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.nav.toggleTheme}
      aria-pressed={isDark}
      className={cn(
        "relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-foreground transition-colors hover:border-blue/40 hover:text-blue",
        className,
      )}
    >
      <Sun className="h-[18px] w-[18px] hidden dark:block" aria-hidden />
      <Moon className="h-[18px] w-[18px] dark:hidden" aria-hidden />
    </button>
  );
}
