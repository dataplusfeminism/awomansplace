// @ts-nocheck
import { addTranslations, setLocale, setRoute } from '$lib/translations';

export const prerender = true;

/** @param {Parameters<import('@sveltejs/kit').LayoutLoad>[0]} event */
export const load = async ({ data }) => {
  const { i18n, translations } = data;
  const { lang, route } = i18n;

  addTranslations(translations);

  await setRoute(route);
  await setLocale(lang);

  // // If it's an error page, load error translations
  // if (url.pathname.includes('/error')) {
  //   const errorTranslations = await import(`$lib/translations/${lang}/error.json`);
  //   addTranslations(errorTranslations.default);
  // }
  

  return i18n;
};