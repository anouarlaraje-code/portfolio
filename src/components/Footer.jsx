import { navLinks } from '../data/nav'
import { personalInfo, socialLinks } from '../data/personal'
import { useTranslation } from '../i18n/LanguageContext'

/**
 * Footer: logo, quick links, social icons and the copyright line.
 */
export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-line/10 bg-surface2">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* logo */}
          <a href="#home" className="flex items-center gap-3" aria-label="Back to the top">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white">
              <span className="text-[13px] font-bold leading-none">&lt;/&gt;</span>
            </span>
            <span>
              <span className="block text-base font-semibold text-heading">
                {personalInfo.name}
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted">
                {t('footer.role')}
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
                    className="text-sm text-body transition-colors duration-200 hover:text-heading"
                  >
                    {t('nav.' + link.id)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* social icons */}
          <ul className="flex items-center gap-3">
            {socialLinks.map(({ id, url, icon: Icon, external }) => (
              <li key={id}>
                <a
                  href={url}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer noopener' : undefined}
                  aria-label={t('social.' + id)}
                  title={t('social.' + id)}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line/10 text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent-400"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-8 border-line/10" />

        <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.rights')}</p>
          <p>
            {t('footer.builtWith')} <span className="text-body">React</span> +{' '}
            <span className="text-body">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}