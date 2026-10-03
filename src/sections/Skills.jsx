import { skills } from '../data';
import { useReveal } from '../useReveal';

/**
 * Software Skills section with icon tiles and progress rings.
 * All 5 skills centered in a single row on desktop, 3+2 on smaller screens.
 */
export default function Skills() {
  const [ref, visible] = useReveal();

  // SVG ring parameters
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="section-glow -left-40 bottom-0 opacity-20" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-14">
          <p className="section-subtitle">TOOLKIT &amp; EDITING</p>
          <h2 className="section-title">SOFTWARE SKILLS</h2>
          <div className="section-accent-line" />
        </div>

        {/* Skills — 2 on mobile, 3 on tablet, 5 on desktop, centered */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => {
            const offset = circumference - (skill.level / 100) * circumference;
            return (
              <div
                key={i}
                className="glass-card p-5 flex flex-col items-center gap-3 group cursor-default w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)]"
              >
                {/* Progress ring */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50" cy="50" r={radius}
                      stroke="#ffffff10"
                      strokeWidth="6"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50" cy="50" r={radius}
                      stroke={skill.accent}
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      className="progress-ring-circle"
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: visible ? offset : circumference,
                        filter: `drop-shadow(0 0 6px ${skill.accent}60)`,
                      }}
                    />
                  </svg>
                  {/* Centre abbreviation */}
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-full"
                    style={{ background: skill.color }}
                  >
                    <span
                      className="text-white text-lg font-bold"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {skill.abbr}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <span className="text-sm text-[var(--color-text-dim)] group-hover:text-white transition-colors text-center font-medium leading-tight">
                  {skill.name}
                </span>

                {/* Percentage */}
                <span className="text-xs font-semibold text-[var(--color-accent)]">{skill.level}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
