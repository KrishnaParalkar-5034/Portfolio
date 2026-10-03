import { useState, useEffect } from 'react';

/**
 * Sticky navbar with "SG" monogram on left and pill nav links on right.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('profile');
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 'profile',  label: 'PROFILE' },
    { id: 'about',    label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'skills',   label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'showreel', label: 'SHOWREEL' },
    { id: 'contact',  label: 'CONTACT' },
  ];

  /* Track scroll to highlight active section & add background */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Find which section is currently in view
      const sectionIds = links.map((l) => l.id);
      let current = 'profile';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060913dd] backdrop-blur-md border-b border-[#ffffff0a] shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
        {/* Monogram logo */}
        <a
          href="#profile"
          onClick={(e) => { e.preventDefault(); handleClick('profile'); }}
          className="font-black tracking-widest text-white hover:text-[var(--color-accent)] transition-colors text-2xl md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-label="Home"
        >
          SG
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center lg:gap-0.5 xl:gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              id={`nav-${l.id}`}
              onClick={() => handleClick(l.id)}
              className={`lg:px-2 xl:px-4 py-1.5 rounded-full text-[10px] xl:text-[11px] font-bold tracking-widest transition-all duration-300 cursor-pointer ${
                active === l.id
                  ? 'bg-[var(--color-accent)] text-[#060913] shadow-[0_0_20px_var(--color-accent-glow)]'
                  : 'text-[#8895ad] hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[400px] border-t border-[#ffffff12]' : 'max-h-0'
        } bg-[#060913fa] backdrop-blur-lg`}
      >
        <div className="flex flex-col items-center py-4 gap-1.5">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={`w-44 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all cursor-pointer text-center ${
                active === l.id
                  ? 'bg-[var(--color-accent)] text-[#060913] shadow-[0_0_15px_var(--color-accent-glow)]'
                  : 'text-[#8895ad] hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
