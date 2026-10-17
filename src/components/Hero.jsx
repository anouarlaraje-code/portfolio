import { ArrowDown } from 'lucide-react'
import { personalInfo, heroLinks, socialLinks } from '../data/personal'

/** Smoothly scroll to the next section when the round button is pressed. */
function scrollToAbout() {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Hero: title, short intro, availability badge, photo and the quick-link column.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-32 lg:min-h-screen lg:pt-36 lg:pb-24">
      {/* --- decorative background -------------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
        <div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* ------------------------- intro text ------------------------- */}
        <div className="animate-fade-up lg:col-span-5">
          {/* short white line above the title */}
          <span aria-hidden="true" className="mb-8 block h-[2px] w-16 bg-white" />

          {/* availability badge */}
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line/10 bg-surface px-4 py-2 text-xs font-medium text-body">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {personalInfo.badge}
          </p>

          <h1 className="text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-heading sm:text-6xl">
            I&rsquo;m {personalInfo.firstName}, a{' '}
            <span className="text-accent">Full-Stack Developer</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            {personalInfo.heroDescription}
          </p>

          {/* round blue scroll-down button */}
          <button
            type="button"
            onClick={scrollToAbout}
            aria-label="Scroll down to the About section"
            className="group mt-10 grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-xl shadow-accent-glow transition-all duration-300 hover:-translate-y-1 hover:bg-accent-600"
          >
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

        {/* ------------------------- profile photo ----------------------- */}
        <div className="animate-fade-up lg:col-span-4 lg:justify-self-center" style={{ animationDelay: '120ms' }}>
          <div className="relative mx-auto w-full max-w-[22rem]">
            {/* decorative ring */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[3rem] border border-line/10"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-b from-accent/25 to-transparent blur-xl"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-line/10 bg-gradient-to-b from-surface to-bg">
              <img
                src={personalInfo.photo}
                alt={personalInfo.photoAlt}
                width="960"
                height="1080"
                className="aspect-[4/5] w-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* --------------------- about / work / follow ------------------ */}
        <div
          className="animate-fade-up space-y-8 lg:col-span-3 lg:justify-self-end"
          style={{ animationDelay: '240ms' }}
        >
          {heroLinks.map((item) => (
            <div key={item.id} className="border-t border-line/10 pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-body">
                {item.label}
              </p>
              <a href={item.href} className="link-arrow group mt-3">
                <span className="link-arrow__text">{item.cta}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}

          <div className="border-t border-line/10 pt-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-body">
              Follow me
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ id, label, url, icon: Icon, external }) => (
                <a
                  key={id}
                  href={url}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer noopener' : undefined}
                  aria-label={label}
                  title={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-line/10 bg-surface text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent-400"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}