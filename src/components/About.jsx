import { useInView } from '../hooks/useInView'

const HIGHLIGHTS = [
  { icon: '⚡', label: 'Fast Learner' },
  { icon: '🎯', label: 'Detail Oriented' },
  { icon: '🛠️', label: 'Problem Solver' },
  { icon: '🤝', label: 'Team Player' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      className="py-24 bg-zinc-50 dark:bg-zinc-900/40"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 section-hidden ${inView ? 'in-view' : ''}`}
      >
        {/* Section label */}
        <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
          About
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Turning ideas into <br />
              <span className="gradient-text">digital reality</span>
            </h2>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                I'm a full stack developer with a passion for building clean, performant web applications.
                I specialize in the <span className="text-zinc-900 dark:text-zinc-200 font-medium">React + Node.js</span> ecosystem and love working across the entire product stack.
              </p>
              <p>
                Currently focused on crafting intuitive user experiences backed by robust APIs and efficient databases.
                I care deeply about code quality, developer experience, and shipping things that actually work.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open source, or leveling up my system design skills.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — code card */}
          <div className="relative">
            {/* Decorative glow */}
            <div
              className="absolute -inset-4 rounded-2xl opacity-30 dark:opacity-20"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #7c3aed, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
            <div className="relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 shadow-xl">
              {/* Window bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-200 dark:border-zinc-700/60 bg-zinc-50 dark:bg-zinc-800/50">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-zinc-400 dark:text-zinc-500 font-mono">about.js</span>
              </div>
              {/* Code */}
              <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto text-left">
                <code>
                  <span className="text-zinc-400 dark:text-zinc-500">{'// '}</span>
                  <span className="text-zinc-400 dark:text-zinc-500">who am I?</span>{'\n'}
                  <span className="text-violet-600 dark:text-violet-400">const </span>
                  <span className="text-sky-600 dark:text-sky-400">developer</span>
                  <span className="text-zinc-700 dark:text-zinc-300"> = {'{'}</span>{'\n'}
                  {'  '}
                  <span className="text-emerald-600 dark:text-emerald-400">name</span>
                  <span className="text-zinc-700 dark:text-zinc-300">: </span>
                  <span className="text-amber-600 dark:text-amber-400">'Shubheksha Shrestha'</span>
                  <span className="text-zinc-700 dark:text-zinc-300">,</span>{'\n'}
                  {'  '}
                  <span className="text-emerald-600 dark:text-emerald-400">role</span>
                  <span className="text-zinc-700 dark:text-zinc-300">: </span>
                  <span className="text-amber-600 dark:text-amber-400">'Full Stack Dev'</span>
                  <span className="text-zinc-700 dark:text-zinc-300">,</span>{'\n'}
                  {'  '}
                  <span className="text-emerald-600 dark:text-emerald-400">stack</span>
                  <span className="text-zinc-700 dark:text-zinc-300">: [</span>
                  <span className="text-amber-600 dark:text-amber-400">'React'</span>
                  <span className="text-zinc-700 dark:text-zinc-300">, </span>
                  <span className="text-amber-600 dark:text-amber-400">'Node'</span>
                  <span className="text-zinc-700 dark:text-zinc-300">, </span>
                  <span className="text-amber-600 dark:text-amber-400">'MySQL'</span>
                  <span className="text-zinc-700 dark:text-zinc-300">],</span>{'\n'}
                  {'  '}
                  <span className="text-emerald-600 dark:text-emerald-400">available</span>
                  <span className="text-zinc-700 dark:text-zinc-300">: </span>
                  <span className="text-violet-600 dark:text-violet-400">true</span>
                  <span className="text-zinc-700 dark:text-zinc-300">,</span>{'\n'}
                  {'  '}
                  <span className="text-emerald-600 dark:text-emerald-400">coffee</span>
                  <span className="text-zinc-700 dark:text-zinc-300">: </span>
                  <span className="text-amber-600 dark:text-amber-400">'always ☕'</span>{'\n'}
                  <span className="text-zinc-700 dark:text-zinc-300">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
