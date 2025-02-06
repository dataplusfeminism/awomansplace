import { e as locales, f as defaultLocale, l as loadTranslations } from "./index2.js";
import { b as base } from "./internal.js";
const handle = async ({ event, resolve }) => {
  const { url, request } = event;
  const { pathname } = url;
  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  let pathWithoutBase = pathname;
  if (base && pathname.startsWith(base)) {
    pathWithoutBase = pathname.slice(base.length);
    if (!pathWithoutBase.startsWith("/")) {
      pathWithoutBase = "/" + pathWithoutBase;
    }
  }
  const firstSegmentMatch = pathWithoutBase.match(/[^/]+?(?=\/|$)/);
  let localeFromPath = firstSegmentMatch ? firstSegmentMatch[0].toLowerCase() : null;
  let locale = supportedLocales.find((l) => l === localeFromPath);
  if (!locale) {
    locale = `${`${request.headers.get("accept-language")}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
    if (!supportedLocales.includes(locale)) locale = defaultLocale;
    const newLocation = `${base}/${locale}${pathWithoutBase}`;
    return new Response(void 0, {
      status: 301,
      headers: { location: newLocation }
    });
  }
  return resolve({ ...event, locals: { lang: locale } }, {
    transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`)
  });
};
const handleError = async ({ event }) => {
  const { locals } = event;
  const { lang } = locals;
  await loadTranslations(lang, "error");
  return {
    message: `An error occurred: ${lang}`,
    status: event.status ?? 500
  };
};
export {
  handle,
  handleError
};
