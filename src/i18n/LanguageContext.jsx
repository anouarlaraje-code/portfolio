import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import en from './en'
import fr from './fr'
import ar from './ar'

/** All available languages. `dir` drives the RTL layout for Arabic. */
export const LANGUAGES = [
  { code: 'en', native: 'English', dir: 'ltr' },
  { code: 'fr', native: 'Français', dir: 'ltr' },
  { code: 'ar', native: 'العربية', dir: 'rtl' },
]

const translations = { en, fr, ar }
const STORAGE_KEY = 'anouar-portfolio-lang'

const LanguageContext = createContext(null)

/** Reads the language set by the inline script in index.html, then storage. */
function getInitialLang() {
  if (typeof document === 'undefined') return 'en'
  const fromDom = document.documentElement.lang
  if (translations[fromDom]) return fromDom
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (translations[stored]) return stored
  } catch (error) {
    /* storage unavailable */
  }
  return 'en'
}

/** Looks up a key like "nav.home" and replaces {placeholders} with vars. */
function translate(lang, key, vars) {
  const dict = translations[lang] || translations.en
  let value = key
    .split('.')
    .reduce((node, part) => (node && node[part] !== undefined ? node[part] : undefined), dict)

  if (value === undefined && lang !== 'en') return translate('en', key, vars)
  if (typeof value !== 'string') return key

  if (vars) {
    Object.entries(vars).forEach(([name, replacement]) => {
      value = value.replaceAll('{' + name + '}', String(replacement))
    })
  }
  return value
}

/**
 * Provides the current language + a `t()` helper to the whole app.
 * Also keeps `html[lang]` and `html[dir]` in sync (dir = rtl for Arabic)
 * and remembers the choice in localStorage.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    const meta = LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0]
    document.documentElement.lang = meta.code
    document.documentElement.dir = meta.dir
    try {
      window.localStorage.setItem(STORAGE_KEY, meta.code)
    } catch (error) {
      /* storage unavailable - the language still applies for this session */
    }
  }, [lang])

  const t = useCallback((key, vars) => translate(lang, key, vars), [lang])

  const value = useMemo(
    () => ({
      lang,
      dir: (LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0]).dir,
      setLang,
      t,
      // The whole active dictionary (for arrays/objects such as the stats)
      dict: translations[lang] || translations.en,
      languages: LANGUAGES,
    }),
    [lang, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/** Hook used by every component: `const { t, lang, setLang } = useTranslation()` */
export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useTranslation must be used inside <LanguageProvider>')
  return context
}