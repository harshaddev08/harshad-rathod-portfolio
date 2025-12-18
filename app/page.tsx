import Link from "next/link";
import { profile } from "./profile-data";
import { PageSection } from "../components/page-section";
import { SkillChip } from "../components/skill-chip";
import { ButtonLink } from "../components/button-link";
import { StatsGrid } from "../components/stats-grid";
import { ProjectCard } from "../components/project-card";
import { FloatingNav } from "../components/floating-nav";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-indigo-100/40 text-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950/40 dark:text-zinc-50"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[-20%] -z-10 h-[480px] bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_65%)]" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-20 pt-12 sm:px-10 lg:px-16">
        <nav className="sticky top-6 z-30 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/60 bg-white/80 px-6 py-3 shadow-lg shadow-zinc-900/5 backdrop-blur-lg dark:border-white/10 dark:bg-zinc-950/70">
          <Link
            href="#top"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500 dark:text-indigo-300"
          >
            HR
          </Link>
          <div className="hidden items-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1 transition-colors hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:bg-indigo-400/10 dark:hover:text-indigo-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <ButtonLink href="#contact">Let’s collaborate</ButtonLink>
        </nav>
        <div className="md:hidden">
          <div className="mx-auto mt-4 flex w-full max-w-5xl flex-wrap gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/60 bg-white/70 px-4 py-1 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-zinc-950/70 dark:hover:border-indigo-400 dark:hover:text-indigo-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <header
          id="about"
          className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/90 px-8 py-12 shadow-xl shadow-zinc-900/5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/70 sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.22),_transparent_55%)]" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:border-indigo-400/40 dark:bg-indigo-400/15 dark:text-indigo-200">
                  {profile.role}
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {profile.name}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  {profile.tagline}
                </p>
              </div>

              <ul className="grid gap-4 text-base text-zinc-700 dark:text-zinc-200 sm:grid-cols-2">
                {profile.summary.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900/70"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-indigo-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href={profile.contact[1]?.href ?? "#contact"}>
                  Email me
                </ButtonLink>
                <ButtonLink
                  href={profile.contact[2]?.href ?? "#contact"}
                  variant="secondary"
                >
                  View LinkedIn
                </ButtonLink>
              </div>
            </div>

            <div className="w-full max-w-sm space-y-4 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg dark:border-white/10 dark:bg-zinc-900/70">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-300">
                Based in
              </p>
              <p className="text-xl font-semibold text-zinc-900 dark:text-white">
                {profile.location}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {profile.availability}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {profile.services.slice(0, 3).map((service) => (
                  <SkillChip key={service}>{service}</SkillChip>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <StatsGrid stats={profile.stats} />
          </div>
        </header>

        <PageSection
          id="skills"
          eyebrow="Capabilities"
          title="Core Technologies & Tooling"
          description="Combining modern JavaScript ecosystems, component-driven design, and backend collaboration to ship thoughtful digital products."
        >
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <SkillChip key={skill}>{skill}</SkillChip>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {profile.services.map((service) => (
              <span
                key={service}
                className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-200"
              >
                {service}
              </span>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="projects"
          eyebrow="Selected Work"
          title="Projects That Made An Impact"
          description="From integrated marketplaces to specialized commerce platforms, these engagements highlight my focus on performance, usability, and maintainability."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {profile.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </PageSection>

        <PageSection
          id="education"
          eyebrow="Education"
          title="Academic Foundations"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {profile.education.map((degree) => (
              <article
                key={degree.program}
                className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-md dark:border-white/10 dark:bg-zinc-900/70"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {degree.program}
                </h3>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                  {degree.institution}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {degree.period}
                </p>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="contact"
          eyebrow="Get In Touch"
          title="Let’s Build Something Together"
          description="Available for MERN stack, React, and Next.js engagements. I enjoy collaborating on products that combine thoughtful design with robust engineering."
          className="mb-10"
        >
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={profile.contact[0]?.href ?? "#"}
              variant="secondary"
            >
              Call
            </ButtonLink>
            <ButtonLink href={profile.contact[1]?.href ?? "#"}>
              Email
            </ButtonLink>
            <ButtonLink
              href={profile.contact[2]?.href ?? "#"}
              variant="secondary"
            >
              LinkedIn
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            I’m always keen to discuss challenging frontend builds,
            cross-platform experiences, and performance-focused product work.
            Drop a message and I’ll respond within one business day.
          </p>
        </PageSection>

        <footer className="mx-auto w-full max-w-4xl rounded-[32px] border border-white/60 bg-white/80 px-8 py-6 text-sm text-zinc-500 shadow-inner backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-400">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <Link
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-600 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:text-indigo-200"
            >
              Back to top
            </Link>
          </div>
        </footer>
      </main>
      <FloatingNav items={navItems} />
    </div>
  );
}
