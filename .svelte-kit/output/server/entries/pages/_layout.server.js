import { l as loadTranslations, t as translations } from "../../chunks/index2.js";
const load = async ({ url, locals }) => {
  const { pathname } = url;
  const { lang } = locals;
  const route = pathname.replace(new RegExp(`^/${lang}`), "");
  await loadTranslations(lang, route);
  return { i18n: { route, lang }, translations: translations.get() };
};
export {
  load
};
