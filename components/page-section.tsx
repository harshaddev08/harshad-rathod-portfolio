import type { PropsWithChildren, ReactNode } from "react";

type PageSectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
}>;

export function PageSection({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: PageSectionProps) {
  const baseClass =
    "relative flex w-full flex-col gap-8 overflow-hidden rounded-[32px] border border-zinc-200/60 bg-white/80 p-10 shadow-lg shadow-zinc-900/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl focus-within:shadow-xl dark:border-white/10 dark:bg-zinc-950/60 dark:text-white";
  const auraClass =
    "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.14),_transparent_60%)] opacity-70 dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_55%)]";

  return (
    <section
      id={id}
      className={`scroll-mt-28 ${baseClass}${className ? ` ${className}` : ""}`}
    >
      <div className={auraClass} />
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          {title}
        </h2>
        {description && (
          <div className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {description}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}
