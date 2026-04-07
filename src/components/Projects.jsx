import { useInView } from "../hooks/useInView";

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: "DevConnect",
    tagline: "Social platform for developers",
    description:
      "A full-stack community platform where developers can share posts, follow each other, and collaborate. Features real-time notifications, markdown support, and a responsive feed.",
    tags: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
    accent: "violet",
    emoji: "🔗",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow",
    tagline: "Project management, simplified",
    description:
      "A Kanban-style task management app with drag-and-drop, priority labels, deadline tracking, and team assignment. Built for productivity without the bloat.",
    tags: ["React", "Express", "MySQL", "REST API"],
    accent: "sky",
    emoji: "📋",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "ShopNest",
    tagline: "E-commerce storefront",
    description:
      "A modern e-commerce store with product listings, cart management, user authentication, and order history. Stripe-ready checkout flow with a clean UI.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    accent: "emerald",
    emoji: "🛍️",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "WeatherNow",
    tagline: "Minimal weather dashboard",
    description:
      "A clean weather app using the OpenWeather API. Shows current conditions, 5-day forecasts, hourly charts, and supports location search with auto-detect.",
    tags: ["React", "REST API", "Tailwind CSS", "Vite"],
    accent: "amber",
    emoji: "🌤️",
    github: "#",
    live: "#",
    featured: false,
  },
];

const ACCENT_MAP = {
  violet: {
    border: "hover:border-violet-400/50 dark:hover:border-violet-500/40",
    badge:
      "bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/50",
    emoji: "bg-violet-100 dark:bg-violet-950/50",
    label: "text-violet-500 dark:text-violet-400",
    shadow: "hover:shadow-violet-500/10",
  },
  sky: {
    border: "hover:border-sky-400/50 dark:hover:border-sky-500/40",
    badge:
      "bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/50",
    emoji: "bg-sky-100 dark:bg-sky-950/50",
    label: "text-sky-500 dark:text-sky-400",
    shadow: "hover:shadow-sky-500/10",
  },
  emerald: {
    border: "hover:border-emerald-400/50 dark:hover:border-emerald-500/40",
    badge:
      "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50",
    emoji: "bg-emerald-100 dark:bg-emerald-950/50",
    label: "text-emerald-500 dark:text-emerald-400",
    shadow: "hover:shadow-emerald-500/10",
  },
  amber: {
    border: "hover:border-amber-400/50 dark:hover:border-amber-500/40",
    badge:
      "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/50",
    emoji: "bg-amber-100 dark:bg-amber-950/50",
    label: "text-amber-500 dark:text-amber-400",
    shadow: "hover:shadow-amber-500/10",
  },
};

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView();
  const ac = ACCENT_MAP[project.accent];

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col p-6 rounded-xl border border-zinc-200 dark:border-zinc-700/60
        bg-white dark:bg-zinc-900/50 ${ac.border} transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl ${ac.shadow} section-hidden ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {project.featured && (
        <span
          className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest
          text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50
          border border-violet-200 dark:border-violet-800/50 px-2 py-0.5 rounded-full"
        >
          Featured
        </span>
      )}

      {/* Emoji icon */}
      <div
        className={`w-10 h-10 rounded-lg ${ac.emoji} flex items-center justify-center text-xl mb-4`}
      >
        {project.emoji}
      </div>

      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
        {project.title}
      </h3>
      <p className={`text-xs font-medium ${ac.label} mb-3`}>
        {project.tagline}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-0.5 rounded border ${ac.badge}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 border-t border-zinc-100 dark:border-zinc-800 pt-4">
        <a
          href={project.github}
          className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <GithubIcon /> GitHub
        </a>
        <a
          href={project.live}
          className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <ExternalLinkIcon /> Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 section-hidden ${headerInView ? "in-view" : ""}`}
        >
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              Things I've built
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              A selection of side projects and work
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
