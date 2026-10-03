# Sohan Gaikwad — Video Editor & Shooter Portfolio

A dark, cinematic portfolio website built with **React + Vite + Tailwind CSS v4**.

---

## 🚀 Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## ✏️ How to Edit Content

**All editable content lives in one file:**

```
src/data.js
```

Open it and update:

| What                | Where in `data.js`     |
|---------------------|------------------------|
| Name, bio, contact  | `personal`             |
| Stats row           | `stats`                |
| Service cards       | `services`             |
| Software skills     | `skills` (name, level) |
| Shooting skills     | `shootingSkills`       |
| Gear list           | `gear`                 |
| Project cards       | `projects`             |
| Showreel video      | `showreel`             |
| Education           | `education`            |
| Experience          | `experience`           |
| Languages           | `languages`            |

### Replacing Images

Drop your images into `public/images/` and update the paths in `data.js`:

- **Portrait photo:** Replace `public/images/portrait-placeholder.png` with your cut-out photo
- **Project thumbnails:** Replace `thumb-placeholder-*.jpg` files (16:9 for YouTube, 9:16 for Shorts/Reels)
- **Showreel poster:** Replace `public/images/showreel-poster.jpg`

### Adding Video Embeds

In `data.js`, set the `embedUrl` for each project:

```js
embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

---

## 📁 File Structure

```
portfolio/
├── public/
│   ├── favicon.svg                  # SG monogram favicon
│   └── images/                      # ← DROP YOUR IMAGES HERE
│       ├── portrait-placeholder.png
│       ├── thumb-placeholder-16-9.jpg
│       ├── thumb-placeholder-9-16.jpg
│       └── showreel-poster.jpg
├── src/
│   ├── data.js                      # ← EDIT ALL CONTENT HERE
│   ├── useReveal.js                 # Scroll-reveal animation hook
│   ├── index.css                    # Tailwind + custom styles
│   ├── main.jsx                     # React entry point
│   ├── App.jsx                      # Main layout
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky nav with pill links
│   │   └── ProjectModal.jsx         # Video/project detail modal
│   └── sections/
│       ├── Hero.jsx                 # Profile / hero section
│       ├── About.jsx                # About me + stats
│       ├── Services.jsx             # What I Create cards
│       ├── Skills.jsx               # Software skills + progress rings
│       ├── Shooting.jsx             # Shooting skills + gear
│       ├── Projects.jsx             # Project grid + filters
│       ├── Showreel.jsx             # Showreel video
│       ├── Education.jsx            # Education & Experience
│       ├── Languages.jsx            # Language progress bars
│       └── Contact.jsx              # Contact form + cards + footer
├── index.html                       # SEO meta tags, OG tags
├── vite.config.js
└── package.json
```

---

## 🌐 Deploying

### Netlify (drag & drop)
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder → done!

### Vercel
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import → select your repo
3. It auto-detects Vite and deploys

### GitHub Pages
1. In `vite.config.js`, add `base: '/your-repo-name/'`
2. Run `npm run build`
3. Deploy the `dist/` folder

---

## 📱 Responsive

Designed mobile-first. Works on:
- 📱 Phones (Instagram bio link)
- 💻 Tablets
- 🖥️ Desktops

---

© 2026 Sohan Gaikwad
