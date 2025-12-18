import type { Project } from "../app/profile-data";
import { ButtonLink } from "./button-link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-transparent bg-gradient-to-br from-white/90 via-white/70 to-white/50 p-[1px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:from-white/10 dark:via-white/5 dark:to-white/0">
      <div className="relative flex h-full flex-col gap-4 rounded-[26px] border border-white/70 bg-white/95 p-6 shadow-inner backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/70">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.2),_transparent_55%)]" />
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        {project.demoUrl && (
          <div className="mt-auto pt-2">
            <ButtonLink href={project.demoUrl} target="_blank">
              View Live Demo
            </ButtonLink>
          </div>
        )}
      </div>
    </article>
  );
}
