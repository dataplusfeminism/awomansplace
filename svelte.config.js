/* eslint-disable */
// import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-vercel';b
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
			strict: true
    }),
    prerender: {
			// This works when all locales are prefixed
			// entries: ['/'].concat(supportedLocales.reduce((acc, locale) => [...acc, `/${locale}`], ['*']))
			entries: [
        '*', '/', 
        '/en', "/en/method", "/en/chapter2", "/en/chapter3",
        "/hi", "/hi/method", "/hi/chapter2", "/hi/chapter3",
        "/bn", "/bn/method", "/bn/chapter2", "/bn/chapter3"], // throws error below (hr default locale, en secondary locale)
			// entries: ['*', '/en'] // generates only files for english locale, and nothing for default
      handleHttpError: "warn"
		},
    paths: {
      base: process.env.NODE_ENV === 'production' ? '' : '' // GITHUB PAGES
    },
  },
};

export default config;
