import { education, experience, languages } from '../data';
import { useReveal } from '../useReveal';

/**
 * Background section: Education & Experience + Languages.
 */
export default function Education() {
  const [ref, visible] = useReveal();

  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="section-glow -right-40 top-1/3 opacity-20" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-12">
          <p className="section-subtitle">BACKGROUND</p>
          <h2 className="section-title">EDUCATION &amp; EXPERIENCE</h2>
          <div className="section-accent-line" />
        </div>

        {/* Top row: Education & Experience — equal height */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Education Card */}
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3
                className="text-lg md:text-xl text-white tracking-wider font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                EDUCATION
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-[var(--color-accent)]/30">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
                  <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                    {edu.year}
                  </p>
                  <p className="text-white text-sm font-semibold tracking-wide leading-snug">
                    {edu.institution}
                  </p>
                  <p className="text-[var(--color-text-dim)] text-xs mt-1 leading-relaxed">
                    {edu.field}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Card */}
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="14" x="2" y="7" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3
                className="text-lg md:text-xl text-white tracking-wider font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                EXPERIENCE
              </h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-[var(--color-accent)]/30">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
                  <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                    {exp.dates}
                  </p>
                  <p className="text-white text-sm font-semibold tracking-wide uppercase leading-snug">
                    {exp.role}
                  </p>
                  <p className="text-[var(--color-text-dim)] text-xs mt-0.5 mb-3 leading-relaxed">
                    {exp.platform}
                  </p>
                  <ul className="space-y-1.5 text-xs text-[var(--color-text-dim)]">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Card */}
        <div className="glass-card p-6 md:p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3
              className="text-lg md:text-xl text-white tracking-wider font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              LANGUAGES
            </h3>
          </div>

          <div className="space-y-5 w-full">
            {languages.map((lang, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm font-semibold tracking-widest uppercase">
                    {lang.name}
                  </span>
                  <span className="text-[var(--color-accent)] text-sm font-bold tabular-nums">
                    {lang.level}%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#ffffff08] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#33deff] transition-all duration-1000 ease-out shadow-[0_0_14px_var(--color-accent)]"
                    style={{ width: visible ? `${lang.level}%` : '0%', transitionDelay: `${i * 150}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
