import { e as locales, f as defaultLocale, l as loadTranslations } from "./index2.js";
const handle = async ({ event, resolve }) => {
  const { url, request } = event;
  const { pathname } = url;
  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());
  if (!locale) {
    locale = `${`${request.headers.get("accept-language")}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
    if (!supportedLocales.includes(locale)) locale = defaultLocale;
    return new Response(void 0, { headers: { "location": `/${locale}${pathname}` }, status: 301 });
  }
  return resolve({ ...event, locals: { lang: locale } }, {
    transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`)
  });
};
const handleError = async ({ event }) => {
  const { locals } = event;
  const { lang } = locals;
  await loadTranslations(lang, "error");
  return locals;
};
export {
  handle,
  handleError
};
