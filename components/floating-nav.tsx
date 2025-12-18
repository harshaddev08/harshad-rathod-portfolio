"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type FloatingNavItem = {
  label: string;
  href: string;
};

type FloatingNavProps = {
  items: FloatingNavItem[];
};

export function FloatingNav({ items }: FloatingNavProps) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 240);
    };

    const matchMedia = window.matchMedia("(max-width: 768px)");
    const applyMediaState = (matches: boolean) => {
      setIsMobile(matches);
      setExpanded(!matches);
    };

    handleScroll();
    applyMediaState(matchMedia.matches);

    window.addEventListener("scroll", handleScroll, { passive: true });
    const listener = (event: MediaQueryListEvent) =>
      applyMediaState(event.matches);
    if (typeof matchMedia.addEventListener === "function") {
      matchMedia.addEventListener("change", listener);
    } else {
      matchMedia.addListener(listener);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (typeof matchMedia.removeEventListener === "function") {
        matchMedia.removeEventListener("change", listener);
      } else {
        matchMedia.removeListener(listener);
      }
    };
  }, []);

  const toggleExpanded = () => {
    if (!isMobile) {
      return;
    }
    setExpanded((prev) => !prev);
  };

  const placementClass = isMobile
    ? "bottom-6 left-4 right-4"
    : "bottom-6 right-6";
  const visibilityClass = visible
    ? "translate-y-0 opacity-100"
    : "pointer-events-none translate-y-4 opacity-0";

  return (
    <div
      className={`fixed z-40 transition-all duration-300 ${placementClass} ${visibilityClass}`}
    >
      {isMobile && (
        <button
          type="button"
          onClick={toggleExpanded}
          className="ml-auto flex items-center gap-2 rounded-full border border-zinc-200/60 bg-gradient-to-r from-white/96 via-zinc-50/95 to-white/92 px-4 py-2 text-sm font-semibold text-indigo-600 shadow-lg shadow-indigo-500/10 backdrop-blur-lg transition-colors hover:border-indigo-300 hover:text-indigo-700 dark:border-white/10 dark:bg-gradient-to-r dark:from-zinc-900/92 dark:via-zinc-950/92 dark:to-black/92 dark:text-indigo-200 dark:hover:border-indigo-300 dark:hover:text-indigo-100"
          aria-expanded={expanded}
          aria-controls="floating-nav"
        >
          {expanded ? "Close" : "Navigate"}
        </button>
      )}
      {expanded && (
        <nav
          id="floating-nav"
          className={`mt-3 flex ${
            isMobile
              ? "flex-wrap items-center gap-2 rounded-[28px] border border-zinc-200/70 bg-gradient-to-br from-white/97 via-zinc-50/95 to-white/92 px-4 py-4 shadow-lg shadow-indigo-500/10 dark:border-white/12 dark:bg-gradient-to-br dark:from-zinc-900/92 dark:via-zinc-950/92 dark:to-black/92"
              : "flex-col gap-3 rounded-[28px] border border-zinc-200/60 bg-gradient-to-br from-white/97 via-zinc-50/95 to-white/92 p-5 shadow-xl shadow-indigo-500/10 dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900/92 dark:via-zinc-950/92 dark:to-black/92"
          } backdrop-blur-lg`}
        >
          {!isMobile && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
              Navigate
            </p>
          )}
          <div
            className={`flex ${
              isMobile
                ? "w-full flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.25em]"
                : "flex-col gap-2 text-sm font-medium"
            } text-zinc-700 dark:text-zinc-100`}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border px-4 py-2 transition-colors hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:border-indigo-300 dark:hover:bg-indigo-400/10 dark:hover:text-indigo-200 ${
                  isMobile
                    ? "border-zinc-200/70 bg-white/85 dark:border-white/15 dark:bg-zinc-900/80"
                    : "border-transparent text-zinc-600 hover:text-indigo-600 dark:text-zinc-200 dark:hover:text-indigo-200"
                }`}
                onClick={() => {
                  if (isMobile) {
                    setExpanded(false);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
