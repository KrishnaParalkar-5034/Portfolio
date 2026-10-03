import { useState } from 'react';
import { personal } from '../data';
import { useReveal } from '../useReveal';

/**
 * Contact section: form + contact cards + footer.
 */
export default function Contact() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'YouTube Long Video',
    'YouTube Shorts',
    'Instagram Reels',
    'Video Shooting',
    'Other / Custom',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry: ${form.type || 'Video Project'} - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.type || 'Not specified'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactCards = [
    {
      id: 'email',
      label: 'EMAIL',
      primary: personal.email,
      secondary: 'Send me an email',
      href: `mailto:${personal.email}`,
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      label: 'WHATSAPP',
      primary: 'Chat on WhatsApp',
      secondary: personal.phone,
      href: personal.whatsapp,
      external: true,
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      id: 'phone',
      label: 'PHONE',
      primary: personal.phone,
      secondary: 'Call me anytime',
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      label: 'INSTAGRAM',
      primary: personal.instagram,
      secondary: 'DM on Instagram',
      href: personal.instagramUrl,
      external: true,
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
  ];

  const inputClass =
    'w-full bg-[#ffffff05] border border-[#ffffff15] rounded-xl px-4 py-3 text-white text-sm placeholder-[var(--color-text-dim)] focus:border-[var(--color-accent)] transition-all';

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-28">
      <div className="section-glow left-1/2 -translate-x-1/2 top-0 opacity-20" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Section title */}
        <div className="text-center mb-12">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h2 className="section-title">CONTACT ME</h2>
          <div className="section-accent-line" />
        </div>

        {/* Main layout: form (left 3/5) + cards (right 2/5) */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">

          {/* ── Contact form ── */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 glass-card p-5 sm:p-6 md:p-8 rounded-2xl border border-[#ffffff12] bg-[#0c1222]/80 flex flex-col gap-4 sm:gap-5"
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="text-[10px] font-semibold text-white tracking-[3px] mb-2 block uppercase">
                Your Name <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="text-[10px] font-semibold text-white tracking-[3px] mb-2 block uppercase">
                Your Email <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>

            {/* Project type */}
            <div>
              <label htmlFor="contact-type" className="text-[10px] font-semibold text-white tracking-[3px] mb-2 block uppercase">
                Project Type <span className="text-[var(--color-accent)]">*</span>
              </label>
              <div className="relative">
                <select
                  id="contact-type"
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className={`${inputClass} appearance-none cursor-pointer pr-10`}
                >
                  <option value="" disabled className="bg-[#0c1222] text-[#7f8c9f]">
                    Select a project type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#0c1222] text-white">
                      {t}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-dim)]">
                  <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="text-[10px] font-semibold text-white tracking-[3px] mb-2 block uppercase">
                Message <span className="text-[var(--color-accent)]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="contact-submit"
              className="mt-auto w-full py-3.5 rounded-full bg-[var(--color-accent)] text-[#060913] font-bold text-sm tracking-wider hover:brightness-110 transition-all shadow-[0_0_25px_var(--color-accent-glow)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              <span>Send Message</span>
            </button>

            {submitted && (
              <p className="text-center text-xs text-[var(--color-accent)] font-medium">
                ✓ Opening your email client…
              </p>
            )}
          </form>

          {/* ── Contact cards — 4 equal-height cards stacked ── */}
          <div className="w-full lg:w-72 xl:w-80 flex flex-col gap-3.5 self-stretch">
            {contactCards.map((c) => (
              <a
                key={c.id}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                id={c.id === 'email' ? 'contact-email-link' : `contact-${c.id}`}
                className="flex-1 glass-card px-4 py-4 rounded-2xl flex items-center gap-3.5 group border border-[#ffffff10] bg-[#0c1222]/80 hover:border-[var(--color-accent)]/40 transition-all duration-300 min-h-[72px]"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#ffffff08] border border-[#ffffff12] flex items-center justify-center text-[var(--color-text-dim)] flex-shrink-0 group-hover:border-[var(--color-accent)]/50 group-hover:text-[var(--color-accent)] transition-all">
                  {c.icon}
                </div>
                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase tracking-[2.5px] text-[var(--color-text-dim)] font-semibold mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-white text-sm font-semibold truncate group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                    {c.primary}
                  </p>
                  <p className="text-[11px] text-[var(--color-text-dim)] mt-0.5 truncate">
                    {c.secondary}
                  </p>
                </div>
                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#ffffff0f] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-dim)]">
            © {new Date().getFullYear()} <span className="text-white font-medium">{personal.name}</span>. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors cursor-pointer group"
          >
            <svg className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            <span>Back to Top</span>
          </button>
        </footer>
      </div>
    </section>
  );
}
