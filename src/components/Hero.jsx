import { useEffect, useState } from 'react'

const ROLES = [
  'Full Stack Developer',
  'React Enthusiast',
  'Node.js Engineer',
  'UI/UX Craftsman',
]

function ArrowDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible]     = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#7c3aed 1px, transparent 1px),
                            linear-gradient(90deg, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] dark:opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full text-xs font-medium
          bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300
          border border-violet-200 dark:border-violet-800/60 animate-fade-in-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span className="text-zinc-900 dark:text-white">Hi, I'm </span>
          <span className="gradient-text">Shubheksha</span>
        </h1>

        {/* Rotating role */}
        <div
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10 flex items-center justify-center animate-fade-in-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          <span
            className="text-zinc-500 dark:text-zinc-400 transition-all duration-400"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-8px)' }}
          >
            {ROLES[roleIndex]}
          </span>
        </div>

        {/* One-liner */}
        <p
          className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          I build <span className="text-zinc-800 dark:text-zinc-200 font-medium">scalable web experiences</span> — clean interfaces, solid APIs, and systems that just work.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.65s', opacity: 0 }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            View My Work
            <ExternalLinkIcon />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex justify-center gap-10 mt-16 animate-fade-in-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          {[
            { label: 'Projects Built', value: '10+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Open Source', value: '5+' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 dark:text-zinc-600 hover:text-violet-500 dark:hover:text-violet-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownIcon />
      </button>
    </section>
  )
}
