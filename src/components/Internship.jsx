import Reveal from './Reveal'
import { internship, personalInfo } from '../data/personal'

/**
 * Call-to-action band: the one-month internship I am looking for.
 */
export default function Internship() {
  return (
    <section aria-labelledby="internship-heading" className="relative overflow-hidden border-y border-line/10 bg-surface">
      {/* glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/20 blur-[110px]" />

      <div className="container-x py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 id="internship-heading" className="heading-xl max-w-2xl">
              {internship.heading}
            </h2>
            <a href={internship.ctaHref} className="link-arrow group shrink-0">
              <span className="link-arrow__text">{internship.ctaLabel}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>

        {/* divider line */}
        <Reveal delay={100}>
          <hr className="mt-10 border-line/10" />
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-body">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {internship.note}
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-heading underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-200 hover:text-accent-400"
            >
              {personalInfo.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}