/* eslint-disable */
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.argv.includes('dev');
const base = dev ? '' : '/womans-place-city'; // GitHub Pages repo name

const config = {
  kit: {
    adapter: adapter({
      // Specify the fallback for dynamic routes
      fallback: 'en.html' // This will catch-all non-prerendered routes
    }),
    prerender: {
      entries: [
        '/', // Ensure the root page is prerendered
        '/en', '/en/about', '/en/chapter2', '/en/chapter3', '/en/method',
        '/hi', '/hi/about', '/hi/chapter2', '/hi/chapter3', '/hi/method',
        '/bn', '/bn/about', '/bn/chapter2', '/bn/chapter3', '/bn/method',
        // Add other language variations here
      ]
    },
    // Optional base path configuration if deployed on GitHub Pages (sub-path)
    paths: {
      base: base // Update this if needed, e.g. '/my-project'
    },
    trailingSlash: 'always', // Ensures URLs are consistent
    appDir: 'internal' // Fixes CSS issues
  },
};

export default config;
