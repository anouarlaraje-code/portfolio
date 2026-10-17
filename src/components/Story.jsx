import Reveal from './Reveal'
import { story } from '../data/personal'

/**
 * My story: how I got into web development + a rounded illustration.
 */
export default function Story() {
  return (
    <section id="story" className="section-pad border-y border-line/5 bg-surface2">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <Reveal>
          <p className="section-label">
            <span className="slash" aria-hidden="true">
              /
            </span>
            {story.label}
          </p>
          <h2 className="heading-xl max-w-lg">{story.heading}</h2>
          <div className="mt-7 space-y-5">
            {story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-body sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Rounded image */}
        <Reveal delay={120}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] border border-line/10"
            />
            <img
              src={story.image}
              alt={story.imageAlt}
              width="900"
              height="620"
              loading="lazy"
              className="relative w-full rounded-[1.75rem] border border-line/10 object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}