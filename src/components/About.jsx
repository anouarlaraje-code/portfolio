import Reveal from './Reveal'
import { personalInfo, stats } from '../data/personal'

/**
 * About: bio paragraph, real stats and a "more about me" link.
 */
export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column: label + heading */}
        <Reveal className="lg:col-span-5">
          <p className="section-label">
            <span className="slash" aria-hidden="true">
              /
            </span>
            About me
          </p>
          <h2 className="heading-xl max-w-md">
            Building complete web apps, from interface to database
          </h2>
        </Reveal>

        {/* Right column: bio, stats, link */}
        <Reveal delay={120} className="lg:col-span-7">
          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            {personalInfo.bio}
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card p-6 transition-colors duration-300 hover:border-accent/40"
              >
                <dt className="text-4xl font-semibold text-accent">{stat.value}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <a href="#story" className="link-arrow group mt-10">
            <span className="link-arrow__text">More about me</span>
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}