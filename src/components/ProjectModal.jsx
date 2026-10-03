import { useEffect } from 'react';

/**
 * Project detail modal — opens when a project card is clicked.
 * Shows video embed (or placeholder), description, tools, and role.
 */
export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const roleBadgeColor = {
    Shot: 'bg-green-500/20 text-green-400',
    Edited: 'bg-purple-500/20 text-purple-400',
    Both: 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]',
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Video embed or placeholder */}
        <div className={`w-full ${project.aspect === '9:16' ? 'max-w-[360px] mx-auto' : ''}`}>
          {project.videoUrl ? (
            <div className={`relative ${project.aspect === '16:9' ? 'pb-[56.25%]' : 'pb-[177.78%]'}`}>
              <video
                src={project.videoUrl}
                className="absolute inset-0 w-full h-full rounded-t-[20px] bg-black object-contain"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          ) : project.embedUrl ? (
            <div className={`relative ${project.aspect === '16:9' ? 'pb-[56.25%]' : 'pb-[177.78%]'}`}>
              <iframe
                src={project.embedUrl}
                className="absolute inset-0 w-full h-full rounded-t-[20px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.title}
                loading="lazy"
              />
            </div>
          ) : (
            <div
              className={`placeholder-img rounded-t-[20px] ${
                project.aspect === '16:9' ? 'aspect-video' : 'aspect-[9/16] max-h-[400px]'
              }`}
            >
              <div className="flex flex-col items-center gap-2 p-8">
                <span className="text-4xl">🎬</span>
                <span className="text-sm text-[var(--color-text-dim)]">
                  Replace embedUrl in data.js<br/>with your video link
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)', letterSpacing: '1px' }}>
              {project.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${roleBadgeColor[project.role] || ''}`}>
              {project.role}
            </span>
          </div>

          <p className="text-[var(--color-text-dim)] text-sm leading-relaxed">
            {project.desc}
          </p>

          {project.tools.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-[var(--color-text-dim)] mr-2 self-center">Tools:</span>
              {project.tools.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-xs text-[var(--color-text-dim)] border border-[#ffffff12]">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="text-xs text-[var(--color-text-dim)]">
            Category: <span className="text-white">{project.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
