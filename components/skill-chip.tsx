import type { PropsWithChildren } from "react";

export function SkillChip({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/60 bg-gradient-to-r from-white/90 to-white/60 px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-inset ring-white/70 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-md dark:border-white/10 dark:from-white/10 dark:to-white/5 dark:text-zinc-200 dark:ring-white/10">
      {children}
    </span>
  );
}
