import type { Experience } from "../app/profile-data";

type ExperienceTimelineProps = {
  experience: Experience[];
};

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <ol className="relative border-l border-indigo-200/60 pl-6 dark:border-indigo-500/20">
      {experience.map((role, index) => (
        <li
          key={`${role.company}-${role.period}`}
          className="relative pb-12 last:pb-0"
        >
          <span className="absolute -left-[13px] top-1 h-6 w-6 rounded-full border-4 border-white bg-indigo-500 shadow-lg dark:border-zinc-950 dark:bg-indigo-400" />
          <article className="rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/70">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {role.role}
                </h3>
                <p className="text-base text-indigo-600 dark:text-indigo-300">
                  {role.company}
                </p>
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                <p>{role.period}</p>
                <p>{role.location}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {role.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
          {index !== experience.length - 1 && (
            <span className="absolute -left-[1px] top-6 h-full w-[2px] bg-gradient-to-b from-indigo-400/60 to-transparent dark:from-indigo-500/40" />
          )}
        </li>
      ))}
    </ol>
  );
}
