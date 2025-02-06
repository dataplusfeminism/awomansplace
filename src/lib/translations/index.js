import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
console.log("!!!", lang)
const config = {
    translations: {
        en: { lang },
        hi: { lang },
        bn: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'menu',
            loader: async () => (await import('./en/menu.json')).default,
        },
        {
            locale: 'en',
            key: 'home',
            routes: ['', '/'],
            loader: async () => (await import('./en/home.json')).default,
        },
        {
            locale: 'en',
            key: 'chapter2',
            routes: ['/chapter2'],
            loader: async () => (await import('./en/chapter2.json')).default,
        },
        {
            locale: 'en',
            key: 'chapter3',
            routes: ['/chapter3'],
            loader: async () => (await import('./en/chapter3.json')).default,
        },
        {
            locale: 'en',
            key: 'method',
            routes: ['/method'],
            loader: async () => (await import('./en/method.json')).default,
        },
        {
            locale: 'hi',
            key: 'menu',
            loader: async () => (await import('./hi/menu.json')).default,
        },
        {
          locale: 'hi',
          key: 'home',
          routes: ['', '/'],
          loader: async () => (await import('./hi/home.json')).default,
        },
        {
            locale: 'hi',
            key: 'method',
            routes: ['/method'],
            loader: async () => (await import('./hi/method.json')).default,
        },
        {
            locale: 'hi',
            key: 'chapter2',
            routes: ['/chapter2'],
            loader: async () => (await import('./hi/chapter2.json')).default,
        },
        {
            locale: 'hi',
            key: 'chapter3',
            routes: ['/chapter3'],
            loader: async () => (await import('./hi/chapter3.json')).default,
        },
        {
            locale: 'hi',
            key: 'method',
            routes: ['/method'],
            loader: async () => (await import('./hi/method.json')).default,
        },
        {
            locale: 'bn',
            key: 'menu',
            loader: async () => (await import('./bn/menu.json')).default,
        },
        {
            locale: 'bn',
            key: 'home',
            routes: ['', '/'],
            loader: async () => (await import('./bn/home.json')).default,
        },
        {
            locale: 'bn',
            key: 'method',
            routes: ['/method'],
            loader: async () => (await import('./bn/method.json')).default,
        },
        {
            locale: 'bn',
            key: 'chapter2',
            routes: ['/chapter2'],
            loader: async () => (await import('./bn/chapter2.json')).default,
        },
        {
            locale: 'bn',
            key: 'chapter3',
            routes: ['/chapter3'],
            loader: async () => (await import('./bn/chapter3.json')).default,
        },
        {
            locale: 'bn',
            key: 'method',
            routes: ['/method'],
            loader: async () => (await import('./bn/method.json')).default,
        },
    ],
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new i18n(config);

// Translations logs
loading.subscribe(async ($loading) => {
    if ($loading) {
        console.log('Loading translations...');

        await loading.toPromise();
        console.log('Updated translations', translations.get());
        console.log(translations);
    }
});