# Firman Abdul Hakim — Website Profesional

Landing page jasa pembuatan website profesional, dibangun dengan [Astro](https://astro.build) + Tailwind CSS v4.

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Development server (http://localhost:4321)
npm run dev

# Build for production (output ke dist/)
npm run build

# Preview production build
npm run preview
```

## 📁 Struktur Proyek

```
src/
├── layouts/          # Layout utama (BaseLayout, BlogLayout)
├── pages/            # Halaman website (setiap .astro/.md = 1 halaman)
│   ├── index.astro           # Beranda
│   ├── jasa/                 # Halaman layanan
│   ├── pengalaman/      # Halaman optimasi Page Experience
│   ├── blog/                 # Blog listing + postingan
│   ├── tentang/              # Tentang
│   └── kontak/               # Kontak
├── components/       # Komponen reusable
└── lib/              # Utility functions (medium.js)
public/               # File statis (gambar, robots.txt, manifest.json)
```

## 🧞 Perintah

| Perintah | Deskripsi |
|---|---|
| `npm run dev` | Jalankan development server |
| `npm run build` | Build production ke `dist/` |
| `npm run preview` | Preview hasil build |

## 🌐 Deployment

Push ke branch `main` → GitHub Actions auto-deploy ke GitHub Pages.

## 🔍 SEO

- Sitemap otomatis (via `@astrojs/sitemap`)
- JSON-LD structured data (LocalBusiness, Service, FAQ, Article)
- Meta tags & Open Graph per halaman
- Semantic HTML
- Optimasi Core Web Vitals
