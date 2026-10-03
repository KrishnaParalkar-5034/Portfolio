import { showreel } from '../data';
import { useReveal } from '../useReveal';

/**
 * Showreel section — full-width video player card with glowing play button.
 */
export default function Showreel() {
  const [ref, visible] = useReveal();

  return (
    <section id="showreel" className="relative py-16 md:py-24 lg:py-28">
      <div className="section-glow left-1/2 -translate-x-1/2 bottom-0 opacity-25" />

      <div ref={ref} className={`max-w-5xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-10">
          <p className="section-subtitle">{showreel.subtitle || 'WATCH MY WORK'}</p>
          <h2 className="section-title">{showreel.title || 'SHOWREEL'}</h2>
          <div className="section-accent-line" />
        </div>

        {/* Video player container — outer sets aspect ratio, inner positions content */}
        <div className="glass-card w-full rounded-2xl overflow-hidden border border-[#ffffff15] bg-[#0c1222]/80 group" style={{ aspectRatio: '16/9', position: 'relative' }}>
          {showreel.videoUrl ? (
            <video
              src={showreel.videoUrl}
              poster={showreel.poster || undefined}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
              controls
              playsInline
              preload="metadata"
            />
          ) : showreel.embedUrl ? (
            <iframe
              src={showreel.embedUrl}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Showreel"
              loading="lazy"
            />
          ) : (
            <div style={{ position: 'absolute', inset: 0 }} className="flex flex-col items-center justify-center p-6 select-none gap-5">
              {/* Glowing cyan play button — always centered */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-accent)] text-[#060913] flex items-center justify-center shadow-[0_0_40px_rgba(0,212,255,0.7)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg className="w-7 h-7 md:w-8 md:h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xs md:text-sm text-[var(--color-text-dim)] text-center tracking-wide leading-relaxed max-w-sm">
                Add your showreel embed URL in{' '}
                <code className="text-[var(--color-accent)] bg-white/5 px-1.5 py-0.5 rounded text-xs">data.js</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
