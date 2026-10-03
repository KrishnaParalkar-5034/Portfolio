import { personal, stats } from '../data';
import { useReveal } from '../useReveal';

/**
 * About Me section with bio paragraph and stats row.
 */
export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section-glow -left-60 top-0 opacity-25" />

      <div ref={ref} className={`max-w-4xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-12">
          <p className="section-subtitle">GET TO KNOW ME</p>
          <h2 className="section-title">ABOUT ME</h2>
          <div className="section-accent-line" />
        </div>

        {/* Bio */}
        <p className="text-[var(--color-text-dim)] text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-14">
          {personal.bio}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center group flex flex-col items-center justify-center min-h-[110px]"
            >
              <p
                className="text-3xl md:text-4xl text-white mb-1.5 group-hover:text-[var(--color-accent)] transition-colors leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {s.value}
              </p>
              <p className="text-xs text-[var(--color-text-dim)] tracking-wider uppercase leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
