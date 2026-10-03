import { useEffect, useState } from 'react';
import { SECTIONS, saveProject, youTubeEmbedUrl } from '../projectsStore';

const inputCls =
  'w-full bg-white/5 border border-[#ffffff1a] rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[var(--color-accent)] transition-colors';
const labelCls = 'block text-xs font-semibold tracking-wider text-[var(--color-text-dim)] uppercase mb-1.5';

function downscaleThumb(file) {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const max = 640;
      const s = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.width * s));
      c.height = Math.max(1, Math.round(img.height * s));
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      c.toBlob((b) => { URL.revokeObjectURL(url); resolve(b); }, 'image/jpeg', 0.82);
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(null); };
    img.src = url;
  });
}

export default function AddProjectModal({ defaultType, onClose, onAdded }) {
  const [type, setType] = useState(defaultType || 'youtube');
  const [aspect, setAspect] = useState(defaultType === 'reel' || defaultType === 'short' ? '9:16' : '16:9');
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('Both');
  const [desc, setDesc] = useState('');
  const [tools, setTools] = useState('');
  const [link, setLink] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbUrl, setThumbUrl] = useState('');
  const [thumbFile, setThumbFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  function pickSection(key) {
    setType(key);
    setAspect(key === 'reel' || key === 'short' ? '9:16' : '16:9');
  }

  async function submit(e) {
    e.preventDefault();
    if (!title.trim()) { setError('Give the project a title first.'); return; }
    setBusy(true);
    setError('');
    try {
      const meta = {
        type,
        title: title.trim(),
        role,
        aspect,
        desc: desc.trim(),
        tools: tools.split(',').map((s) => s.trim()).filter(Boolean),
      };
      if (!videoFile && link.trim()) {
        const embed = youTubeEmbedUrl(link.trim());
        if (embed) meta.embedUrl = embed;
        else meta.videoUrl = link.trim();
      }
      if (!thumbFile && thumbUrl.trim()) meta.thumbnailUrl = thumbUrl.trim();
      const thumbBlob = thumbFile ? await downscaleThumb(thumbFile) : null;
      const saved = await saveProject({ ...meta, thumbBlob, videoBlob: videoFile || null });
      onAdded(saved);
      onClose();
    } catch (err) {
      setError('Could not save: ' + (err && err.message ? err.message : err));
      setBusy(false);
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 560 }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
          aria-label="Close form"
        >
          ✕
        </button>

        <form onSubmit={submit} className="p-6 space-y-4">
          <h3
            className="text-xl font-bold text-white tracking-wider"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ADD PROJECT
          </h3>

          <div>
            <span className={labelCls}>Section</span>
            <div className="flex flex-wrap gap-2">
              {SECTIONS.map((s) => (
                <button
                  type="button"
                  key={s.key}
                  onClick={() => pickSection(s.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider border cursor-pointer transition-all ${
                    type === s.key
                      ? 'bg-[var(--color-accent)] text-[#060913] border-[var(--color-accent)]'
                      : 'text-[var(--color-text-dim)] border-[#ffffff15] hover:border-[var(--color-accent)] hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="ap-title">Title</label>
            <input
              id="ap-title"
              className={inputCls}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Wedding Highlight Reel"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls} htmlFor="ap-role">Role</label>
              <select id="ap-role" className={inputCls} value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Both">Shot + Edited</option>
                <option value="Shot">Shot</option>
                <option value="Edited">Edited</option>
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="ap-aspect">Format</label>
              <select id="ap-aspect" className={inputCls} value={aspect} onChange={(e) => setAspect(e.target.value)}>
                <option value="16:9">Landscape (16:9)</option>
                <option value="9:16">Vertical (9:16)</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="ap-link">YouTube link or video URL</label>
            <input
              id="ap-link"
              className={inputCls}
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://youtu.be/… — plays inside this site"
              disabled={!!videoFile}
            />
            <label className="block mt-2 text-xs text-[var(--color-text-dim)] cursor-pointer hover:text-white transition-colors">
              …or upload a video file: <span className="text-[var(--color-accent)] font-semibold">{videoFile ? videoFile.name : 'choose file'}</span>
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => {
                  setVideoFile(e.target.files[0] || null);
                  if (e.target.files[0]) setLink('');
                }}
              />
            </label>
          </div>

          <div>
            <label className={labelCls} htmlFor="ap-thumb">Thumbnail URL (optional)</label>
            <input
              id="ap-thumb"
              className={inputCls}
              value={thumbUrl}
              onChange={(e) => setThumbUrl(e.target.value)}
              placeholder="/images/… or https://…"
              disabled={!!thumbFile}
            />
            <label className="block mt-2 text-xs text-[var(--color-text-dim)] cursor-pointer hover:text-white transition-colors">
              …or upload a thumbnail: <span className="text-[var(--color-accent)] font-semibold">{thumbFile ? thumbFile.name : 'choose image'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setThumbFile(e.target.files[0] || null);
                  if (e.target.files[0]) setThumbUrl('');
                }}
              />
            </label>
          </div>

          <div>
            <label className={labelCls} htmlFor="ap-tools">Tools (comma separated)</label>
            <input
              id="ap-tools"
              className={inputCls}
              value={tools}
              onChange={(e) => setTools(e.target.value)}
              placeholder="CapCut, VN"
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="ap-desc">Description</label>
            <textarea
              id="ap-desc"
              className={`${inputCls} resize-none`}
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="What is this project about?"
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <div className="flex justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-[#ffffff1a] text-white text-xs font-semibold tracking-widest hover:border-[var(--color-accent)] transition-colors cursor-pointer"
            >
              CANCEL
            </button>
            <button
              type="submit"
              disabled={busy}
              className="px-6 py-2 rounded-full bg-[var(--color-accent)] text-[#060913] text-xs font-bold tracking-widest hover:brightness-110 transition-all cursor-pointer disabled:opacity-50"
            >
              {busy ? 'SAVING…' : 'SAVE PROJECT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
