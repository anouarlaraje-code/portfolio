import { GraduationCap, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import { education } from '../data/personal'

/**
 * Education: current Full-Stack training at ISTA Bab Tizimi (OFPPT).
 */
export default function Education() {
  return (
    <section id="education" className="section-pad border-y border-white/5 bg-ink-800/40">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">
            <span className="slash" aria-hidden="true">
              /
            </span>
            Education
          </p>
          <h2 className="heading-xl">Where I am learning</h2>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {education.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 90}>
              <article className="card flex flex-col gap-6 p-6 transition-all duration-300 hover:border-accent/40 sm:flex-row sm:items-start sm:p-8">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent-400">
                  <GraduationCap className="h-7 w-7" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{entry.school}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-400">{entry.degree}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                    {entry.description}
                  </p>
                </div>
                <p className="inline-flex shrink-0 items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  {entry.location}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}