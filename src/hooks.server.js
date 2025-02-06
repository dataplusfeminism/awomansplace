import { defaultLocale, loadTranslations, locales } from '$lib/translations';
import { base } from '$app/paths';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const { url, request } = event;
  const { pathname } = url;

  // Get defined locales (e.g., ['en', 'hi', 'bn'])
  const supportedLocales = locales.get().map((l) => l.toLowerCase());

  // Remove the base path from the URL if it's there.
  // For example, if base = '/womans-place-city' and pathname is '/womans-place-city/en/about',
  // then pathWithoutBase becomes '/en/about'
  let pathWithoutBase = pathname;
  if (base && pathname.startsWith(base)) {
    pathWithoutBase = pathname.slice(base.length);
    // Ensure the result starts with '/'
    if (!pathWithoutBase.startsWith('/')) {
      pathWithoutBase = '/' + pathWithoutBase;
    }
  }

  // Extract the first segment of the path after the base
  const firstSegmentMatch = pathWithoutBase.match(/[^/]+?(?=\/|$)/);
  let localeFromPath = firstSegmentMatch ? firstSegmentMatch[0].toLowerCase() : null;

  // Check if the first segment is one of our supported locales.
  let locale = supportedLocales.find((l) => l === localeFromPath);

  // If the route locale is not supported, determine one from the request header
  if (!locale) {
    // Get the user's preferred locale from the 'accept-language' header
    locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
    // Use the default locale if the header value isn’t supported
    if (!supportedLocales.includes(locale)) locale = defaultLocale;

    // Now, build the new URL so that it starts with the base.
    // We add the locale right after the base, then append the rest of the path.
    // For example: base = '/womans-place-city', locale = 'bn', and pathWithoutBase = '/'
    // results in '/womans-place-city/bn/'
    const newLocation = `${base}/${locale}${pathWithoutBase}`;

    return new Response(undefined, {
      status: 301,
      headers: { location: newLocation }
    });
  }

  // For supported locales, proceed as normal and add the html `lang` attribute.
  return resolve({ ...event, locals: { lang: locale } }, {
    transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`)
  });
};

// /** @type {import('@sveltejs/kit').HandleServerError} */
// export const handleError = async ({ event }) => {
//   const { locals } = event;
//   const { lang } = locals;

//   await loadTranslations(lang, 'error');

//   return locals;
// };

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = async ({ event }) => {
  const { locals } = event;
  const { lang } = locals;

  // Load translations for the error messages
  await loadTranslations(lang, 'error');

  return {
    message: `An error occurred: ${lang}`,
    status: event.status ?? 500
  };
};