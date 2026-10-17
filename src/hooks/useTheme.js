import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'anouar-portfolio-theme'

/** Reads the stored theme, otherwise falls back to the system preference. */
function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark'
  const fromDom = document.documentElement.dataset.theme
  if (fromDom === 'light' || fromDom === 'dark') return fromDom
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch (error) {
    /* storage unavailable */
  }
  return 'dark'
}

/**
 * Light / dark theme state.
 * Keeps `html[data-theme]` and localStorage in sync (the same data attribute
 * is also set by the inline script in index.html, which prevents a flash of
 * the wrong theme on first load).
 *
 * @returns {{ theme: 'light'|'dark', toggle: () => void }}
 */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Apply to the document + persist whenever it changes
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch (error) {
      /* storage unavailable - the theme still applies for this session */
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}