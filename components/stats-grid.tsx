import type { Stat } from "../app/profile-data";

type StatsGridProps = {
  stats: Stat[];
};

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/60"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%)]" />
          <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-300">
            {stat.label}
          </dt>
          <dd className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-white">
            {stat.value}
          </dd>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {stat.description}
          </p>
        </div>
      ))}
    </dl>
  );
}
