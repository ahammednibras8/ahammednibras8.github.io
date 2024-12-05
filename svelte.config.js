import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',           // Output directory for static pages
      assets: 'build',          // Output directory for assets
      fallback: 'index.html',   // Fallback file for SPA-like behavior
      precompress: false,       // Disable precompression
      strict: false             // Allow dynamic routes (disable strict mode)
    }),
    paths: {
      base: process.env.BASE_PATH || '' // Set base path, useful for GitHub Pages
    }
  }
};

export default config;