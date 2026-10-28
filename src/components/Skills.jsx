import { Languages } from 'lucide-react'
import Reveal from './Reveal'
import { skillGroups, languages } from '../data/skills'
import { useTranslation } from '../i18n/LanguageContext'

/**
 * Skills: four columns of technologies + a languages block.
 */
export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="section-pad">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">
            <span className="slash" aria-hidden="true">
              /
            </span>
            {t('skills.label')}
          </p>
          <h2 className="heading-xl">{t('skills.heading')}</h2>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            {t('skills.intro')}
          </p>
        </Reveal>

        {/* Four skill columns */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <Reveal key={group.id} delay={index * 90} className="h-full">
                <article className="card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{t('skills.groups.' + group.id)}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line/10 bg-surface2/80 px-3 py-1.5 text-xs font-medium text-body"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Languages */}
        <Reveal delay={160}>
          <div className="card mt-6 flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-400">
                <Languages className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{t('skills.languagesTitle')}</h3>
                <p className="text-sm text-body">{t('skills.languagesSubtitle')}</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {languages.map((language) => (
                <li key={language.id}>
                  <span className="font-medium text-heading">
                    {t('languages.' + language.id)}
                  </span>
                  <span className="ms-2 text-sm text-body">
                    ({t('skills.levels.' + language.level)})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}