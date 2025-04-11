# Gatsby to Astro Migration Guide

This document outlines the steps taken to migrate this blog from Gatsby to Astro.

## Key Changes

1. **Project Structure**
   - `/src/pages/` - Contains Astro page components
   - `/src/layouts/` - Contains Astro layout components
   - `/src/components/` - Contains Astro UI components
   - `/src/posts/` - Contains markdown blog posts (maintained from Gatsby)
   - `/src/styles/` - Contains global and component-specific styles
   - `/public/` - Contains static assets

2. **Configuration**
   - `astro.config.mjs` - Replaces Gatsby's configuration
   - `tsconfig.json` - TypeScript configuration
   - `package.json` - Updated dependencies and scripts

3. **Component Changes**
   - React components converted to Astro components
   - GraphQL queries replaced with `Astro.glob()` and other Astro data fetching methods
   - CSS modules maintained but adapted for Astro

4. **Build & Deploy**
   - Build output now goes to `/dist/` instead of `/public/`
   - Deployment process is similar but uses Astro's build command

## Required Steps

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build the site: `npm run build`
4. Deploy to GitHub Pages: `npm run deploy`

## Files Removed

The following Gatsby-specific files were removed:
- gatsby-browser.js
- gatsby-config.js
- gatsby-node.js
- gatsby-ssr.js

## Helpful Resources

- [Astro Documentation](https://docs.astro.build)
- [Migrating from Gatsby to Astro](https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby/)