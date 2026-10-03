import { services } from '../data';
import { useReveal } from '../useReveal';

/**
 * "What I Create" section — service cards with icons.
 * 5 equal-width cards that wrap; last row stays centered.
 */
export default function Services() {
  const [ref, visible] = useReveal();

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="section-glow right-0 top-1/3 opacity-25" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-14">
          <p className="section-subtitle">SERVICES &amp; EXPERTISE</p>
          <h2 className="section-title">WHAT I CREATE</h2>
          <div className="section-accent-line" />
        </div>

        {/* Uniform wrapping cards — last row centered */}
        <div className="flex flex-wrap justify-center gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, i }) {
  return (
    <div
      className="glass-card p-6 md:p-8 flex flex-col items-center text-center gap-4 group w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]"
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <span className="text-4xl group-hover:scale-110 transition-transform duration-300 leading-none">
        {s.icon}
      </span>
      <h3
        className="text-lg text-white tracking-wider leading-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {s.title}
      </h3>
      <p className="text-sm text-[var(--color-text-dim)] leading-relaxed">
        {s.desc}
      </p>
    </div>
  );
}
