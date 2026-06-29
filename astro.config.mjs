import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { writeFileSync } from 'fs';

const SITE = 'https://firmanjs.github.io';

const priorityMap = {
  '/': 1.0,
  '/blog/': 0.9,
  '/jasa/': 0.8,
  '/pengalaman/': 0.8,
  '/tentang/': 0.7,
  '/kontak/': 0.7,
};

const changefreqMap = {
  '/': 'weekly',
  '/blog/': 'weekly',
  '/blog/posts/': 'monthly',
  '/jasa/': 'monthly',
  '/pengalaman/': 'monthly',
  '/tentang/': 'monthly',
  '/kontak/': 'monthly',
};

export default defineConfig({
  site: SITE,
  base: '/',
  integrations: [
    {
      name: 'custom-sitemap',
      hooks: {
        'astro:build:done': ({ dir, pages }) => {
          const today = new Date().toISOString().split('T')[0];

          const siteUrl = (pathname) => {
            const p = pathname.replace(/^\//, '');
            return p ? `${SITE}/${p}` : SITE;
          };

          const urls = pages
            .map(p => p.pathname)
            .filter(pathname => pathname !== '404/')
            .map(pathname => {
              const norm = pathname.startsWith('/') ? pathname : '/' + pathname;
              const isBlogPost = norm.startsWith('/blog/posts/');
              const key = isBlogPost ? '/blog/posts/' : norm;

              return {
                loc: siteUrl(pathname),
                lastmod: today,
                changefreq: changefreqMap[key] || 'monthly',
                priority: isBlogPost ? 0.6 : (priorityMap[norm] ?? 0.5),
              };
            });

          const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

          writeFileSync(new URL('sitemap.xml', dir), xml, 'utf-8');
          console.log(`✓ sitemap.xml generated with ${urls.length} URLs`);
        },
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['tailwindcss'],
    },
  },
});
