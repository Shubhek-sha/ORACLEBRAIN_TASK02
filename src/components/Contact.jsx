import { useState } from 'react'
import { useInView } from '../hooks/useInView'

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { icon: <MailIcon />,     label: 'shubheksha@example.com',       href: 'mailto:shubheksha@example.com' },
  { icon: <LinkedInIcon />, label: 'linkedin.com/in/shubheksha',   href: '#' },
  { icon: <GithubIcon />,   label: 'github.com/shubheksha',        href: '#' },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm]         = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit (no backend yet)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm(INITIAL_FORM)
    }, 1200)
  }

  const inputClass =
    'w-full px-4 py-2.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-700 ' +
    'bg-white dark:bg-zinc-800/50 text-zinc-900 dark:text-white ' +
    'placeholder-zinc-400 dark:placeholder-zinc-500 ' +
    'focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 dark:focus:border-violet-500 ' +
    'transition-colors'

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 section-hidden ${inView ? 'in-view' : ''}`}
      >
        {/* Header */}
        <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
          Contact
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Let's work together
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — info */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
              I'm currently open to freelance projects, full-time roles, and interesting collaborations.
              Don't hesitate to reach out — I usually respond within 24 hours.
            </p>

            <div className="space-y-3">
              {SOCIAL_LINKS.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700/60
                    hover:border-violet-400/60 dark:hover:border-violet-600/60
                    bg-zinc-50 dark:bg-zinc-900/50 hover:bg-violet-50 dark:hover:bg-violet-950/20
                    text-zinc-600 dark:text-zinc-400 hover:text-violet-700 dark:hover:text-violet-300
                    transition-all duration-200 group text-sm font-medium"
                >
                  <span className="text-zinc-400 group-hover:text-violet-500 transition-colors">{icon}</span>
                  {label}
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg
              bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/40
              text-green-700 dark:text-green-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center rounded-xl border border-green-200 dark:border-green-800/40 bg-green-50 dark:bg-green-950/20">
                <span className="text-4xl mb-3">🎉</span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Message sent!</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">I'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-violet-600 dark:text-violet-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Name <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Email <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project inquiry / Collaboration / ..."
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                    Message <span className="text-violet-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                    px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700
                    disabled:opacity-60 disabled:cursor-not-allowed
                    text-white font-medium text-sm transition-all duration-200
                    shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <SendIcon />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
