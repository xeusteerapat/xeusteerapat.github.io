import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://curiousdev.in.th',
  trailingSlash: 'ignore',
  base: '/',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
    },
  },
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [],
    rehypePlugins: [],
  },
  build: {
    assets: '_assets',
  },
  outDir: './dist',
  image: {
    service: passthroughImageService(),
  },
});
