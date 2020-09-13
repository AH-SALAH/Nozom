import i18n from 'i18next';
// import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const fallbackLng = ['en'];
const availableLanguages = ['en', 'ar'];
const resources = {
    ...en,
    ...ar
};

const languageDetectorOption = {
    // order and from where user language should be detected
    order: ['navigator', 'localStorage', 'cookie',  'path', 'subdomain', 'htmlTag', 'querystring'],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18n',
    lookupLocalStorage: 'i18n',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain',

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,

    // only detect languages that are in the whitelist
    checkWhitelist: true
};

i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    //   .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
        debug: true,
        whitelist: availableLanguages,
        detection: languageDetectorOption,
        lng: 'ar',
        
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;