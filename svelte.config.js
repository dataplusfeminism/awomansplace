/* eslint-disable */
// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      runtime: 'nodejs18.x', // Specify the runtime
    }),
    paths: {
      base: process.env.BASE_PATH || '' // GITHUB PAGES
    },
  },
};

export default config;
