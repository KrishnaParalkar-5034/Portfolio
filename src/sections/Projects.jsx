import { useEffect, useState } from 'react';
import { projects } from '../data';
import { SECTIONS, loadProjects } from '../projectsStore';
import { useReveal } from '../useReveal';
import ProjectModal from '../components/ProjectModal';
import AddProjectModal from '../components/AddProjectModal';

/**
 * Projects section with filter tabs and responsive grid.
 * Clicking a card opens a detail modal.
 */
export default function Projects() {
  const [ref, visible] = useReveal();
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState(null);
  const [added, setAdded] = useState([]);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    loadProjects().then(setAdded);
  }, []);

  const tabs = [
    { key: 'all', label: 'All' },
    ...SECTIONS.map((s) => ({ key: s.key, label: s.label })),
  ];

  const all = [...added, ...projects];
  const filtered = filter === 'all'
    ? all
    : all.filter((p) => p.type === filter);

  const roleBadge = {
    Shot:   'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Edited: 'bg-violet-500/20  text-violet-400  border-violet-500/30',
    Both:   'bg-sky-500/20     text-sky-400     border-sky-500/30',
  };

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="section-glow left-1/2 -translate-x-1/2 top-0 opacity-30" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-10">
          <p className="section-subtitle">PORTFOLIO &amp; WORK</p>
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-accent-line" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.key}
              id={`filter-${t.key}`}
              onClick={() => setFilter(t.key)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer border ${
                filter === t.key
                  ? 'bg-[var(--color-accent)] text-[#060913] border-[var(--color-accent)] shadow-[0_0_18px_var(--color-accent-glow)]'
                  : 'text-[var(--color-text-dim)] border-[#ffffff15] hover:border-[var(--color-accent)] hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
          <button
            id="add-project"
            onClick={() => setAdding(true)}
            className="px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer border border-dashed border-[var(--color-accent)]/50 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
          >
            + ADD PROJECT
          </button>
        </div>

        {/* Project grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="glass-card overflow-hidden cursor-pointer group flex flex-col"
                onClick={() => setModal(p)}
              >
                {/* Thumbnail — uniform 16:9 so cards in a row share height */}
                <div className={`project-thumb flex-shrink-0 aspect-video ${p.aspect === '9:16' ? 'bg-[#060913]' : ''}`}>
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className={`w-full h-full ${p.aspect === '9:16' ? 'object-contain' : 'object-cover'}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('placeholder-img');
                      e.target.parentElement.innerHTML = `
                        <div class="flex flex-col items-center justify-center h-full gap-2">
                          <span class="text-3xl">${p.type === 'shot' ? '📷' : '🎬'}</span>
                          <span class="text-xs text-center px-4">Replace thumbnail<br/>in /public/images/</span>
                        </div>
                      `;
                    }}
                  />
                  {/* Play overlay */}
                  <div className="play-overlay">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/80 flex items-center justify-center shadow-[0_0_30px_var(--color-accent-glow)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                        <polygon points="5,3 17,10 5,17" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="text-white text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-1">
                    <span className="text-xs text-[var(--color-text-dim)]">{p.category}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${roleBadge[p.role] || ''}`}>
                      {p.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-[var(--color-text-dim)] py-16 text-sm">No projects found in this category.</p>
        )}
      </div>

      {/* Modal */}
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}

      {/* Add-project form — defaults to the section currently filtered */}
      {adding && (
        <AddProjectModal
          defaultType={filter === 'all' ? 'youtube' : filter}
          onClose={() => setAdding(false)}
          onAdded={(p) => setAdded((a) => [p, ...a])}
        />
      )}
    </section>
  );
}
