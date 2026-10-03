// ============================================================
//  data.js  —  EDIT ALL YOUR PORTFOLIO CONTENT HERE
//  This is the single source of truth for the whole site.
// ============================================================

// ── Personal Info ─────────────────────────────────────────────
export const personal = {
  name: "Sohan Gaikwad",
  role: "Video Editor & Shooter",
  tagline: "I edit long YouTube videos, Shorts & Reels, and shoot them too.",
  bio: "I create engaging content for YouTube, Shorts and Reels, handling both shooting and editing from start to finish — with a focus on storytelling, clean cuts, and fast-paced social content.",
  email: "sohan.gaikwad17@gmail.com",
  phone: "+91 83083 96220",
  whatsapp: "https://wa.me/918308396220",
  instagram: "@sohan4sure",
  instagramUrl: "https://instagram.com/sohan4sure",
  location: "Maharashtra, India",
  // ↓ Replace with your actual photo — drop the file in /public/images/
  portrait: "/images/sohan-portrait.jpeg",
};

// ── Stats Row ──────────────────────────────────────────────────
export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Videos Edited",    value: "100+" },
  { label: "Clients",          value: "50+" },
  { label: "Total Views",      value: "1M+" },
];

// ── What I Create Cards ────────────────────────────────────────
export const services = [
  {
    icon: "🎬",
    title: "Long YouTube Videos",
    desc: "Full-length storytelling videos with engaging cuts, colour grade & music sync.",
  },
  {
    icon: "⚡",
    title: "YouTube Shorts",
    desc: "Punchy, fast-paced vertical videos optimised for the Shorts algorithm.",
  },
  {
    icon: "📱",
    title: "Instagram Reels",
    desc: "Trendy, music-synced reels crafted to maximise reach and saves.",
  },
  {
    icon: "🎥",
    title: "Video Shooting",
    desc: "On-location shoots — vlogs, events, content days, b-roll, talking heads.",
  },
  {
    icon: "✨",
    title: "And Many More",
    desc: "Promos, event highlights, testimonials, product videos & more.",
  },
];

// ── Software Skills ────────────────────────────────────────────
// level: 0–100 (shown as a progress ring)
// logo: official app icon shown in the ring centre (abbr is the fallback)
export const skills = [
  { name: "CapCut",     abbr: "CC", color: "#1a1a2e", accent: "#00d4ff", level: 92, logo: "/images/logos/capcut.jpg" },
  { name: "VN Editor",  abbr: "VN", color: "#1c1c1e", accent: "#ffffff", level: 85, logo: "/images/logos/vn.png" },
  { name: "PicsArt",    abbr: "PA", color: "#09c4e2", accent: "#ffffff", level: 78, logo: "/images/logos/picsart.png" },
  { name: "Edits (IG)", abbr: "ED", color: "#e1306c", accent: "#ffffff", level: 80, logo: "/images/logos/edits.png" },
  { name: "Snapseed",   abbr: "SN", color: "#4caf50", accent: "#ffffff", level: 75, logo: "/images/logos/snapseed.png" },
];

// ── Shooting Skills ────────────────────────────────────────────
export const shootingSkills = [
  "Composition & Framing",
  "Natural & Artificial Lighting",
  "Camera Movement",
  "B-Roll Gathering",
  "Sound Design",
  "Colour Grading on Set",
];

// Edit gear list with your actual equipment
export const gear = [
  { item: "Camera / Phone", note: "[ Replace: your camera or phone model ]" },
  { item: "Tripod",         note: "[ Replace: your tripod model ]" },
  { item: "Gimbal",         note: "[ Replace: your gimbal model ]" },
  { item: "Microphone",     note: "[ Replace: your mic model ]" },
  { item: "Lighting",       note: "[ Replace: your lighting setup ]" },
];

// ── Projects ───────────────────────────────────────────────────
// type: "youtube" | "short" | "reel" | "shot"
// role: "Shot" | "Edited" | "Both"
// aspect: "16:9" | "9:16"
// embedUrl: YouTube embed URL e.g. "https://www.youtube.com/embed/VIDEO_ID"
// videoUrl: local file in /public/videos/ — plays in the modal instead of an embed
export const projects = [
  {
    id: 7,
    title: "Dubstep POP 600 Speaker Review 🔥 | Best Budget Wireless Speaker?",
    category: "YouTube Video",
    type: "youtube",
    role: "Both",
    aspect: "16:9",
    thumbnail: "/images/yt-speaker-review.jpg",
    embedUrl: "https://www.youtube.com/embed/GZXCC_3_Gg8",
    tools: [],
    desc: "Full video from The Mayur Devkant channel, embedded above.",
  },
  {
    id: 8,
    title: "₹50 Me FULL Amusement Park 😲 | Wonders Park Nerul Navi Mumbai | Honest Review",
    category: "YouTube Video",
    type: "youtube",
    role: "Both",
    aspect: "16:9",
    thumbnail: "/images/yt-amusement-park.jpg",
    embedUrl: "https://www.youtube.com/embed/vjZBnDaKsPU",
    tools: [],
    desc: "Full video from The Mayur Devkant channel, embedded above.",
  },
  {
    id: 9,
    title: "Again Creta!!! | Honest Review 2026 🔥🔥",
    category: "YouTube Video",
    type: "youtube",
    role: "Both",
    aspect: "16:9",
    thumbnail: "/images/yt-creta-review.jpg",
    embedUrl: "https://www.youtube.com/embed/LpJvPcgVPhI",
    tools: [],
    desc: "Full video from The Mayur Devkant channel, embedded above.",
  },
  {
    id: 10,
    title: "Modak Making — Festival Sweet Close-Up",
    category: "Instagram Reel",
    type: "reel",
    role: "Both",
    aspect: "9:16",
    thumbnail: "/images/reel-01.jpg",
    embedUrl: "",
    videoUrl: "/videos/reel-01.mov",
    tools: [],
    desc: "Hand-shaped modaks in tight close-up — soft natural light, slow detail shots and a warm festival mood.",
  },
  {
    id: 11,
    title: "New Car Delivery — Tata Motors Showroom",
    category: "Instagram Reel",
    type: "reel",
    role: "Both",
    aspect: "9:16",
    thumbnail: "/images/reel-02.jpg",
    embedUrl: "",
    videoUrl: "/videos/reel-02.mov",
    tools: [],
    desc: "Delivery-day reel at a Tata Motors dealership — garland, puja and the reveal of the new car on the forecourt.",
  },
  {
    id: 12,
    title: "Delivery Day Reel — Whip-Pan Owner Reveal",
    category: "Instagram Reel",
    type: "reel",
    role: "Both",
    aspect: "9:16",
    thumbnail: "/images/reel-03.jpg",
    embedUrl: "",
    videoUrl: "/videos/reel-03.mov",
    tools: [],
    desc: "Same delivery, owner's cut — fast whip-pans and motion-blur transitions landing on the garlanded car.",
  },
  {
    id: 13,
    title: "Self-Intro Reel — “New Me”",
    category: "Instagram Reel",
    type: "reel",
    role: "Edited",
    aspect: "16:9",
    thumbnail: "/images/reel-04.jpg",
    embedUrl: "",
    videoUrl: "/videos/reel-04.mov",
    tools: [],
    desc: "Punchy self-introduction reel for @thecuriousteen — bold red title cards and hand-lettered text overlays.",
  },
  {
    id: 14,
    title: "Ganeshotsav Procession — Street Reel",
    category: "Instagram Reel",
    type: "reel",
    role: "Both",
    aspect: "16:9",
    thumbnail: "/images/reel-05.jpg",
    embedUrl: "",
    videoUrl: "/videos/reel-05.mov",
    tools: [],
    desc: "Street-side Ganeshotsav procession — the flower-loaded palkhi moving through the crowd, shot handheld.",
  },
  {
    id: 1,
    title: "Cinematic Vlog — Day in My Life",
    category: "YouTube Video",
    type: "youtube",
    role: "Both",
    aspect: "16:9",
    thumbnail: "/images/thumb-placeholder-16-9.jpg",
    embedUrl: "",
    tools: ["CapCut", "VN"],
    desc: "[ Replace: Describe this video. What was the concept, location, and what makes it special? ]",
  },
  {
    id: 2,
    title: "Viral Travel Short",
    category: "YouTube Short",
    type: "short",
    role: "Edited",
    aspect: "9:16",
    thumbnail: "/images/thumb-placeholder-9-16.jpg",
    embedUrl: "",
    tools: ["CapCut"],
    desc: "[ Replace: A fast-paced travel short with trending audio and dynamic cuts. ]",
  },
  {
    id: 3,
    title: "Product Reel — Fashion Brand",
    category: "Instagram Reel",
    type: "reel",
    role: "Both",
    aspect: "9:16",
    thumbnail: "/images/thumb-placeholder-9-16.jpg",
    embedUrl: "",
    tools: ["VN", "PicsArt"],
    desc: "[ Replace: A stylish product reel for a fashion brand. ]",
  },
  {
    id: 4,
    title: "Event Coverage — Birthday Shoot",
    category: "Shot by Me",
    type: "shot",
    role: "Shot",
    aspect: "16:9",
    thumbnail: "/images/thumb-placeholder-16-9.jpg",
    embedUrl: "",
    tools: ["Snapseed"],
    desc: "[ Replace: Full event coverage of a birthday celebration. ]",
  },
  {
    id: 5,
    title: "Motivational Reel",
    category: "Instagram Reel",
    type: "reel",
    role: "Edited",
    aspect: "9:16",
    thumbnail: "/images/thumb-placeholder-9-16.jpg",
    embedUrl: "",
    tools: ["CapCut", "Edits (IG)"],
    desc: "[ Replace: A high-energy motivational reel with text overlays and transitions. ]",
  },
  {
    id: 6,
    title: "YouTube Gaming Commentary",
    category: "YouTube Video",
    type: "youtube",
    role: "Edited",
    aspect: "16:9",
    thumbnail: "/images/thumb-placeholder-16-9.jpg",
    embedUrl: "",
    tools: ["CapCut"],
    desc: "[ Replace: A long-form gaming commentary video with clean cuts and on-screen graphics. ]",
  },
];

// ── Showreel ───────────────────────────────────────────────────
export const showreel = {
  embedUrl: "",           // e.g. "https://www.youtube.com/embed/VIDEO_ID"
  videoUrl: "/videos/reel-01.mov",  // local file in /public/videos/ — plays in-page
  poster: "/images/reel-01.jpg",
  title: "SHOWREEL",
  subtitle: "WATCH MY WORK",
};

// ── Education ──────────────────────────────────────────────────
export const education = [
  {
    year: "2024 – Present",
    institution: "Smt. Chandibai Himathmal Mansukhani College",
    field: "B.Pharmacy",
  },
];

// ── Experience ─────────────────────────────────────────────────
export const experience = [
  {
    role: "FREELANCE VIDEO EDITOR",
    platform: "For a YouTuber",
    dates: "6 Months",
    achievements: [
      "Edited long-form videos, Shorts & Reels for the channel",
      "Handled cuts, transitions, captions & music sync end-to-end",
    ],
  },
];

// ── Languages ──────────────────────────────────────────────────
export const languages = [
  { name: "Marathi", level: 95 },
  { name: "Hindi",   level: 85 },
  { name: "English", level: 65 },
];
