import { e as locales, f as defaultLocale, l as loadTranslations } from "./index3.js";
import { b as base } from "./internal.js";
import { e as error } from "./index.js";
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
  console.log(`[i18n]: Loading translations for language: ${lang}`);
  await loadTranslations(lang, "error");
  console.log("!!!", locales.get()?.[lang]);
  const errorMessage = locales.get()?.[lang]?.error?.general || "An unexpected error occurred.";
  const goHomeMessage = locales.get()?.[lang]?.error?.go_home || "🏠 Go back home. 🏠";
  console.log(`[i18n]: Translations loaded for '${lang}/error'`, locales.get());
  throw error(500, {
    message: `${errorMessage} <a href='/' style='color:blue; text-decoration:underline;'>${goHomeMessage}</a>`
  });
};
export {
  handle,
  handleError
};
