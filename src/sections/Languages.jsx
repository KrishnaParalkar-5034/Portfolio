import { languages } from '../data';
import { useReveal } from '../useReveal';

/**
 * Languages section with progress bars.
 */
export default function Languages() {
  const [ref, visible] = useReveal();

  return (
    <section className="relative py-16 md:py-24 lg:py-28">
      <div ref={ref} className={`max-w-3xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl text-white mb-3"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '3px' }}
          >
            LANGUAGES
          </h2>
          <div className="w-16 h-[2px] bg-[var(--color-accent)] mx-auto" />
        </div>

        {/* Language bars */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {languages.map((lang, i) => (
            <div key={i} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-white text-sm font-medium tracking-wide">{lang.name}</span>
                <span className="text-[var(--color-accent)] text-sm">{lang.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#ffffff10] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#60b8ff] transition-all duration-1000 ease-out shadow-[0_0_10px_var(--color-accent-glow)]"
                  style={{ width: visible ? `${lang.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
