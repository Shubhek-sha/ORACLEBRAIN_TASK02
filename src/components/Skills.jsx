import { useInView } from "../hooks/useInView";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    color: "sky",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 60 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    color: "violet",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    category: "Tools & DevOps",
    color: "emerald",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Docker", level: 60 },
      { name: "Postman", level: 88 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const TECH_TAGS = [
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "REST API",
  "Vite",
  "HTML5",
  "CSS3",
  "Docker",
  "Postman",
];

const COLOR_MAP = {
  sky: "bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800/40 text-sky-700 dark:text-sky-300",
  violet:
    "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800/40 text-violet-700 dark:text-violet-300",
  emerald:
    "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300",
};

const BAR_COLOR = {
  sky: "bg-sky-500",
  violet: "bg-violet-500",
  emerald: "bg-emerald-500",
};

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-24 bg-white dark:bg-zinc-950">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 section-hidden ${inView ? "in-view" : ""}`}
      >
        {/* Header */}
        <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
          Skills
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            My tech stack
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">
            Tools and technologies I work with daily
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SKILL_GROUPS.map(({ category, color, skills }) => (
            <div
              key={category}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-700/60 bg-zinc-50 dark:bg-zinc-900/50 hover:border-violet-300 dark:hover:border-violet-700/60 transition-colors duration-200"
            >
              <span
                className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-4 border ${COLOR_MAP[color]}`}
              >
                {category}
              </span>
              <div className="space-y-3">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                        {name}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${BAR_COLOR[color]}`}
                        style={{ width: inView ? `${level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-700/60 bg-zinc-50 dark:bg-zinc-900/50">
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
            Quick view
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-violet-400 dark:hover:border-violet-600 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-150 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
