import { personal } from '../data';
import { useReveal } from '../useReveal';

/**
 * Hero / Profile section — first thing visitors see.
 * Portrait on RIGHT (desktop), text on LEFT. Portrait on TOP (mobile).
 */
export default function Hero() {
  const [ref, visible] = useReveal(0.1);

  const sparks = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${20 + Math.random() * 60}%`,
    delay: `${Math.random() * 3}s`,
    size: `${3 + Math.random() * 3}px`,
  }));

  return (
    <section id="profile" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background glows */}
      <div className="section-glow top-1/4 -right-40 opacity-40" />
      <div className="section-glow bottom-0 -left-40 opacity-20" />

      {/* Sparks */}
      {sparks.map((s) => (
        <div
          key={s.id}
          className="spark"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            width: s.size,
            height: s.size,
          }}
        />
      ))}

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Portrait — top on mobile, right on desktop */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto order-first md:order-last">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-96 rounded-full overflow-hidden">
            <div className="portrait-glow" />
            <img
              src={personal.portrait}
              alt={`Portrait of ${personal.name}`}
              className="w-full h-full object-cover rounded-full relative z-10"
              style={{
                objectPosition: '50% 32%',
                maskImage: 'radial-gradient(circle at 50% 45%, #000 48%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle at 50% 45%, #000 48%, transparent 70%)',
              }}
              loading="eager"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            {/* Placeholder fallback */}
            <div
              className="placeholder-img absolute inset-0 rounded-full flex-col items-center justify-center gap-2"
              style={{ display: 'none' }}
            >
              <span className="text-5xl">📷</span>
              <span className="text-xs text-center">Replace portrait<br />in /public/images/</span>
            </div>
            {/* Vignette in the page background colour so the photo melts into the section */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 50% 45%, transparent 42%, rgba(6,9,19,0.45) 62%, var(--color-navy-900) 82%)',
              }}
            />
          </div>
        </div>

        {/* Text — left side on desktop, below portrait on mobile */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <p className="text-xs md:text-sm font-semibold tracking-[4px] text-[var(--color-accent)] uppercase">
            HELLO, I AM
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-[3px]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {personal.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          <h2
            className="text-xl md:text-2xl text-[var(--color-accent)] font-semibold tracking-wide"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '2px' }}
          >
            {personal.role}
          </h2>
          <p className="text-[var(--color-text-dim)] text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
            {personal.tagline}
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-2 flex-wrap">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[var(--color-accent)] text-[#060913] font-bold text-xs md:text-sm tracking-widest hover:brightness-110 transition-all shadow-[0_0_25px_var(--color-accent-glow)] inline-block"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-[#ffffff1a] text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] font-semibold text-xs md:text-sm tracking-widest transition-all inline-block"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
