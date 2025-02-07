/* eslint-disable */
import adapter from '@sveltejs/adapter-static';
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.argv.includes('dev');
const base = dev ? '' : '/womans-place-city'; // Change 'my-website' to your actual repo name

const config = {
  kit: {
    adapter: adapter({
      // Specify the fallback for dynamic routes
      fallback: 'index.html' // This will catch-all non-prerendered routes
    }),
    prerender: {
      entries: [
        '/', // Ensure the root page is prerendered
        '/en', '/en/about', '/en/chapter2', '/en/chapter3', '/en/method',
        '/hi', '/hi/about', '/hi/chapter2', '/hi/chapter3', '/hi/method',
        '/bn', '/bn/about', '/bn/chapter2', '/bn/chapter3', '/bn/method',
        // Add other language variations here
      ],
      handleHttpError: 'warn' // Prevents 404 errors from stopping the build
    },
    // Optional base path configuration if deployed on GitHub Pages (sub-path)
    paths: {
      base: "",
      //base: process.env.NODE_ENV === "production" ? "/womans-place-city" : "", // Update this if needed, e.g. '/my-project',
      // base:process.argv.includes('dev') ? '' : "/womans-place-city"
    },
    // appDir: 'internal',
    // paths: {
		// 	base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		// }
  },
  // preprocess: vitePreprocess()
};

export default config;
