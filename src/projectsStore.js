// Projects added from the site UI (Add Project form) are stored in IndexedDB
// so uploaded video/thumbnail files survive reloads without editing data.js.

export const SECTIONS = [
  { key: 'youtube', label: 'YouTube Videos', category: 'YouTube Video' },
  { key: 'short',   label: 'Shorts',         category: 'YouTube Short' },
  { key: 'reel',    label: 'Reels',          category: 'Instagram Reel' },
  { key: 'shot',    label: 'Shot by Me',     category: 'Shot by Me' },
];

// Accepts watch / youtu.be / shorts / live / embed links and returns the
// embed URL so the clip plays inside the site instead of opening youtube.com.
export function youTubeEmbedUrl(input) {
  const m = String(input).match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/
  );
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

const DB_NAME = 'portfolio-added';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('projects')) db.createObjectStore('projects', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('blobs')) db.createObjectStore('blobs');
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function done(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

async function putBlob(key, blob) {
  const db = await openDB();
  const tx = db.transaction('blobs', 'readwrite');
  tx.objectStore('blobs').put(blob, key);
  await done(tx);
  db.close();
}

async function getBlob(key) {
  const db = await openDB();
  const tx = db.transaction('blobs', 'readonly');
  const req = tx.objectStore('blobs').get(key);
  await done(tx);
  db.close();
  return req.result;
}

async function hydrate(rec) {
  const section = SECTIONS.find((s) => s.key === rec.type);
  const p = {
    id: rec.id,
    title: rec.title,
    category: section ? section.category : 'Project',
    type: rec.type,
    role: rec.role,
    aspect: rec.aspect,
    thumbnail: rec.thumbnailUrl || '',
    embedUrl: rec.embedUrl || '',
    videoUrl: rec.videoUrl || '',
    tools: rec.tools || [],
    desc: rec.desc || '',
    custom: true,
  };
  if (rec.thumbBlobKey) {
    const b = await getBlob(rec.thumbBlobKey);
    if (b) p.thumbnail = URL.createObjectURL(b);
  }
  if (rec.videoBlobKey) {
    const b = await getBlob(rec.videoBlobKey);
    if (b) p.videoUrl = URL.createObjectURL(b);
  }
  return p;
}

export async function saveProject({ thumbBlob, videoBlob, ...meta }) {
  const id = 'c-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const rec = { ...meta, id, addedAt: Date.now() };
  if (thumbBlob) {
    rec.thumbBlobKey = id + '-thumb';
    await putBlob(rec.thumbBlobKey, thumbBlob);
  }
  if (videoBlob) {
    rec.videoBlobKey = id + '-video';
    await putBlob(rec.videoBlobKey, videoBlob);
  }
  const db = await openDB();
  const tx = db.transaction('projects', 'readwrite');
  tx.objectStore('projects').put(rec);
  await done(tx);
  db.close();
  return hydrate(rec);
}

export async function loadProjects() {
  const db = await openDB();
  const tx = db.transaction('projects', 'readonly');
  const req = tx.objectStore('projects').getAll();
  await done(tx);
  db.close();
  const recs = (req.result || []).sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
  return Promise.all(recs.map(hydrate));
}
