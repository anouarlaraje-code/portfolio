import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal'
import projects from '../data/projects'

/**
 * Projects grid. Cards come straight from src/data/projects.js.
 */
export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">
              <span className="slash" aria-hidden="true">
                /
              </span>
              Projects
            </p>
            <h2 className="heading-xl">Things I have built</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            Student and personal projects, from an online store to an inventory system - each one
            built end to end.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 100} className="h-full">
              <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                {/* preview image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="800"
                    height="500"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-700 via-transparent to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* tech tags */}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-white/10 bg-ink-800/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-300"
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
                      aria-label={`View the source code of ${project.title} on GitHub`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-ink-800/70 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-accent/60 hover:text-accent-400"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open the live demo of ${project.title}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-600"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}