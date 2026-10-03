import { shootingSkills, gear } from '../data';
import { useReveal } from '../useReveal';

/**
 * Shooting section — what I shoot + gear list + shooting skills.
 */
export default function Shooting() {
  const [ref, visible] = useReveal();

  return (
    <section id="shooting" className="relative py-20 md:py-28">
      <div className="section-glow right-0 top-0 opacity-20" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-14">
          <p className="section-subtitle">PRODUCTION &amp; CAMERA</p>
          <h2 className="section-title">SHOOTING &amp; GEAR</h2>
          <div className="section-accent-line" />
          <p className="text-[var(--color-text-dim)] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            I don't just edit — I shoot too. Vlogs, reels, YouTube content, events, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Shooting Skills */}
          <div className="glass-card p-6 md:p-8">
            <h3
              className="text-xl text-white mb-6 tracking-wider flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-2xl">🎯</span>
              SHOOTING SKILLS
            </h3>
            <div className="space-y-4">
              {shootingSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)] flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-[var(--color-text-dim)] group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gear List */}
          <div className="glass-card p-6 md:p-8">
            <h3
              className="text-xl text-white mb-6 tracking-wider flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-2xl">⚙️</span>
              MY GEAR
            </h3>
            <div className="space-y-4">
              {gear.map((g, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 border border-[var(--color-accent)]/20 group-hover:border-[var(--color-accent)] transition-colors mt-0.5">
                    <span className="text-[var(--color-accent)] text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{g.item}</p>
                    <p className="text-[var(--color-text-dim)] text-xs mt-0.5 leading-relaxed">{g.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
