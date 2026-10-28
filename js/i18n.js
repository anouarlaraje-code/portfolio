/**
 * ============================================================
 *  i18n.js - translation core (no framework, plain JS)
 * ------------------------------------------------------------
 *  - t('key')            -> returns the string in the active language
 *  - setLang(code)       -> switches language (persists + notifies)
 *  - applyTranslations() -> fills every [data-i18n] element in the DOM
 *  Arabic also flips the document to RTL and swaps Bootstrap's
 *  stylesheet for its official RTL build.
 * ============================================================
 */

/** Active dictionaries, one per language (js/lang/*.js). */
const I18N = { en: I18N_EN, fr: I18N_FR, ar: I18N_AR };

/** Supported languages - `dir` drives the text direction. */
const LANGUAGES = [
  { code: 'en', native: 'English', dir: 'ltr' },
  { code: 'fr', native: 'Fran\u00e7ais', dir: 'ltr' },
  { code: 'ar', native: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629', dir: 'rtl' },
];

const LANG_STORAGE_KEY = 'anouar-portfolio-lang';
const BOOTSTRAP_CSS_CDN = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/';

/** Currently active language code. */
let activeLang = 'en';

/** Callbacks fired after every language change (used by main.js
 *  to re-render dynamic lists such as projects and skills). */
const languageChangeListeners = [];

/**
 * Looks up a dot-separated key ("nav.home") in the active
 * dictionary, falling back to English, then replaces
 * {placeholders} with the provided values.
 */
function t(key, vars) {
  const dict = I18N[activeLang] || I18N_EN;
  let value = key
    .split('.')
    .reduce((node, part) => (node && node[part] !== undefined ? node[part] : undefined), dict);

  if (value === undefined && activeLang !== 'en') return t(key, vars);
  if (typeof value !== 'string') return key;

  if (vars) {
    Object.keys(vars).forEach((name) => {
      value = value.split('{' + name + '}').join(String(vars[name]));
    });
  }
  return value;
}

/** Returns the active language dictionary (for arrays such as stats). */
function getDict() {
  return I18N[activeLang] || I18N_EN;
}

/** Returns the active language code. */
function getLang() {
  return activeLang;
}

/** Returns the list of languages for the switcher menu. */
function getLanguages() {
  return LANGUAGES;
}

/** Registers a callback invoked after every language change. */
function onLanguageChange(fn) {
  languageChangeListeners.push(fn);
}

/**
 * Replaces the text of every element carrying a data attribute:
 *   data-i18n="key"              -> textContent
 *   data-i18n-ph="key"           -> placeholder
 *   data-i18n-al="key"           -> aria-label
 *   data-i18n-title="key"        -> title attribute
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.querySelectorAll('[data-i18n-al]').forEach((el) => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-al')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
  });
}

/**
 * Switches the site to `code`: updates <html lang dir>, swaps
 * Bootstrap to its RTL build for Arabic, remembers the choice
 * in localStorage, re-translates the DOM and notifies listeners.
 */
function setLang(code, persist) {
  const meta = LANGUAGES.find((item) => item.code === code) || LANGUAGES[0];
  activeLang = meta.code;

  const html = document.documentElement;
  html.lang = meta.code;
  html.dir = meta.dir;

  // Bootstrap ships a dedicated RTL stylesheet - swap to it for Arabic.
  const bootstrapCss = document.getElementById('bootstrap-css');
  if (bootstrapCss) {
    bootstrapCss.href = BOOTSTRAP_CSS_CDN + (meta.dir === 'rtl' ? 'bootstrap.rtl.min.css' : 'bootstrap.min.css');
  }

  if (persist !== false) {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, meta.code);
    } catch (error) {
      /* storage unavailable - the language still applies for this session */
    }
  }

  applyTranslations();
  languageChangeListeners.forEach((fn) => fn(meta.code));
}

/**
 * Called by main.js on startup. The inline script in <head>
 * already restored the language (and set html[lang]/html[dir])
 * before first paint; this re-applies it so the active-language
 * state, Bootstrap stylesheet and translations all agree.
 *   window.__INITIAL_LANG is set by that inline script.
 */
function syncInitialLanguage() {
  const code = window.__INITIAL_LANG || 'en';
  setLang(code, false);
}
