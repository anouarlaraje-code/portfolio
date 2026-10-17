import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '../data/nav'
import { socialLinks } from '../data/personal'
import useActiveSection from '../hooks/useActiveSection'
import useLockBodyScroll from '../hooks/useLockBodyScroll'
import useTheme from '../hooks/useTheme'

const sectionIds = navLinks.map((link) => link.id)

/**
 * Fixed top navigation: logo, anchors, light/dark switch, hamburger on mobile.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false) // mobile menu
  const [scrolled, setScrolled] = useState(false) // background when the page moves
  const active = useActiveSection(sectionIds)
  const { theme, toggle } = useTheme()

  useLockBodyScroll(open)

  // Add a solid/blurred background once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const isDark = theme === 'dark'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/10 bg-bg/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-x flex h-20 items-center justify-between"
      >
        {/* Logo: </> Anouar */}
        <a href="#home" className="flex items-center gap-3" aria-label="Back to top">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white shadow-lg shadow-accent-glow">
            <span className="text-[13px] font-bold leading-none">&lt;/&gt;</span>
          </span>
          <span className="text-lg font-semibold tracking-tight text-heading">Anouar</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                aria-current={active === link.id ? 'page' : undefined}
                className={`relative block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.id ? 'text-heading' : 'text-body hover:text-heading'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-accent transition-all duration-300 ${
                    active === link.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Light / dark switch + hamburger */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-line/10 bg-surface text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent-400"
          >
            {isDark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-line/10 bg-surface text-heading transition-colors duration-200 hover:border-accent/60 hover:text-accent-400 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line/10 bg-bg/95 backdrop-blur-xl md:hidden"
      >
        <ul className="container-x flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? 'page' : undefined}
                className={`flex items-center justify-between border-b border-line/5 py-4 text-base font-medium transition-colors duration-200 ${
                  active === link.id ? 'text-accent-400' : 'text-body hover:text-heading'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons inside the mobile menu */}
        <div className="container-x flex items-center gap-3 pb-6">
          {socialLinks.map(({ id, label, url, icon: Icon, external }) => (
            <a
              key={id}
              href={url}
              aria-label={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-line/10 text-body transition-colors duration-200 hover:border-accent/60 hover:text-accent-400"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}