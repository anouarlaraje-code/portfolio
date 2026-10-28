import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal'
import projects from '../data/projects'
import { useTranslation } from '../i18n/LanguageContext'

/**
 * Projects grid. Card data comes from src/data/projects.js,
 * titles and descriptions from the translation files.
 */
export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">
              <span className="slash" aria-hidden="true">
                /
              </span>
              {t('projects.label')}
            </p>
            <h2 className="heading-xl">{t('projects.heading')}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-body">{t('projects.intro')}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const title = t('projects.items.' + project.id + '.title')
            return (
              <Reveal key={project.id} delay={(index % 3) * 100} className="h-full">
                <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                  {/* preview image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={title}
                      width="800"
                      height="500"
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                      {t('projects.items.' + project.id + '.description')}
                    </p>

                    {/* tech tags */}
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-line/10 bg-surface2/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-body"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {/* links */}
                    <div className="mt-6 flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={t('projects.ariaGitHub', { title })}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-line/10 bg-surface2 px-4 py-2.5 text-sm font-medium text-heading transition-colors duration-200 hover:border-accent/60 hover:text-accent-400"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        {t('projects.githubBtn')}
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={t('projects.ariaLive', { title })}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-600"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        {t('projects.liveBtn')}
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}