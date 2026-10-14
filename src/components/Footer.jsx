import { navLinks } from '../data/nav'
import { personalInfo, socialLinks } from '../data/personal'

/**
 * Footer: logo, quick links, social icons and the copyright line.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-800/60">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* logo */}
          <a href="#home" className="flex items-center gap-3" aria-label="Back to the top">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white">
              <span className="text-[13px] font-bold leading-none">&lt;/&gt;</span>
            </span>
            <span>
              <span className="block text-base font-semibold text-white">
                {personalInfo.name}
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">
                {personalInfo.title}
              </span>
            </span>
          </a>

          {/* quick links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* social icons */}
          <ul className="flex items-center gap-3">
            {socialLinks.map(({ id, label, url, icon: Icon, external }) => (
              <li key={id}>
                <a
                  href={url}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer noopener' : undefined}
                  aria-label={label}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent-400"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {personalInfo.name} — All rights reserved.</p>
          <p>
            Built with <span className="text-slate-300">React</span> +{' '}
            <span className="text-slate-300">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}