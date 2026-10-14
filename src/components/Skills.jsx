import { Languages } from 'lucide-react'
import Reveal from './Reveal'
import { skillGroups, languages } from '../data/skills'

/**
 * Skills: four columns of technologies + a languages block.
 */
export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">
            <span className="slash" aria-hidden="true">
              /
            </span>
            Skills
          </p>
          <h2 className="heading-xl">Technologies I work with every day</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            From the interface down to the database - the tools I use to build complete web
            applications.
          </p>
        </Reveal>

        {/* Four skill columns */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <Reveal key={group.id} delay={index * 90} className="h-full">
                <article className="card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-ink-700">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-ink-800/80 px-3 py-1.5 text-xs font-medium text-slate-300"
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
                <h3 className="text-lg font-semibold">Languages</h3>
                <p className="text-sm text-slate-400">Languages I speak</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {languages.map((language) => (
                <li key={language.id}>
                  <span className="font-medium text-white">{language.name}</span>
                  <span className="ml-2 text-sm text-slate-400">({language.level})</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}