import { useEffect, useRef, useState } from 'react'
import { Check, Globe } from 'lucide-react'
import { useTranslation, LANGUAGES } from '../i18n/LanguageContext'

/**
 * Globe button that opens a small language menu (English / Français / العربية).
 * Each language is written in its own script, so the labels are not translated.
 */
export default function LanguageSwitcher() {
  const { lang, setLang, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  // Close on Escape or when clicking outside
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={t('ui.changeLanguage')}
        title={t('ui.changeLanguage')}
        className="grid h-11 w-11 place-items-center rounded-xl border border-line/10 bg-surface text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent-400"
      >
        <Globe className="h-5 w-5" aria-hidden="true" />
      </button>

      {open && (
        <ul
          id="language-menu"
          className="absolute end-0 top-[calc(100%+0.5rem)] z-50 w-44 rounded-xl border border-line/10 bg-surface p-1 shadow-2xl shadow-black/20"
        >
          {LANGUAGES.map((item) => {
            const isActive = item.code === lang
            return (
              <li key={item.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(item.code)
                    setOpen(false)
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  lang={item.code}
                  dir={item.dir}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'bg-accent/10 font-semibold text-accent-400'
                      : 'text-body hover:bg-line/5 hover:text-heading'
                  }`}
                >
                  <span>{item.native}</span>
                  {isActive && <Check className="h-4 w-4" aria-hidden="true" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}