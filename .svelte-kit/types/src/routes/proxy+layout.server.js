// @ts-nocheck
import { loadTranslations, translations } from '$lib/translations';

/** @param {Parameters<import('@sveltejs/kit').ServerLoad>[0]} event */
export const load = async ({ url, locals }) => {
  const { pathname } = url;
  const { lang } = locals;

  const route = pathname.replace(new RegExp(`^/${lang}`), '');

  await loadTranslations(lang, route);

  return { i18n: { route, lang }, translations: translations.get() };
};