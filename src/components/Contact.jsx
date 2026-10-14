import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import { personalInfo, socialLinks } from '../data/personal'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const EMPTY_FORM = { name: '', email: '', message: '' }

/** Simple front-end validation. Returns an object with the error of each field. */
function validate(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length < 2) errors.name = 'Your name is too short.'

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_REGEX.test(email)) errors.email = 'Please enter a valid email address.'

  if (!message) errors.message = 'Please write a message.'
  else if (message.length < 10) errors.message = 'Your message is too short (10 characters minimum).'

  return errors
}

/** Direct contact details shown on the left. */
const contactDetails = [
  { id: 'email', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
  { id: 'phone', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: Phone },
  { id: 'github', label: 'GitHub', value: 'View my profile', href: personalInfo.github, icon: Github, external: true },
  { id: 'linkedin', label: 'LinkedIn', value: 'View my profile', href: personalInfo.linkedin, icon: Linkedin, external: true },
]

/** Input styles shared by the three fields. */
const fieldClasses =
  'w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors duration-200 focus:border-accent focus:outline-none'

/**
 * Contact: details + a validated contact form (no backend required).
 */
export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    // clear the error while the user types
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }

    // There is no server behind this form: open the visitor's email app,
    // with the message already written and addressed to me.
    const subject = encodeURIComponent(`Portfolio contact from ${values.name.trim()}`)
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n---\nFrom: ${values.name.trim()} <${values.email.trim()}>`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

    setSent(true)
    setValues(EMPTY_FORM)
  }

  return (
    <section id="contact" className="section-pad border-t border-white/5">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ---------------------------- left ---------------------------- */}
        <Reveal>
          <p className="section-label">
            <span className="slash" aria-hidden="true">
              /
            </span>
            Contact
          </p>
          <h2 className="heading-xl max-w-md">Let us build something together</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">
            Looking for a one-month Full-Stack internship starting January 2027? Have a project in
            mind? Send me a message, I will get back to you as soon as possible.
          </p>

          <ul className="mt-10 grid gap-3">
            {contactDetails.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer noopener' : undefined}
                    className="card group flex items-center gap-4 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-ink-700"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-white">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {personalInfo.location}
          </p>
        </Reveal>

        {/* ---------------------------- form ---------------------------- */}
        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="grid gap-5">
              {/* name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`${fieldClasses} ${errors.name ? 'border-red-500/70' : ''}`}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-2 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`${fieldClasses} ${errors.email ? 'border-red-500/70' : ''}`}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-2 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or internship..."
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${fieldClasses} resize-y ${errors.message ? 'border-red-500/70' : ''}`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-600 sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send message
            </button>

            {/* feedback once the message is handed over to the email app */}
            {sent && (
              <p role="status" className="mt-5 flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                Your email app should be opening with the message ready to send. If nothing
                happens, write directly to {personalInfo.email}.
              </p>
            )}

            <p className="mt-5 text-xs text-slate-500">
              Prefer social media?{' '}
              {socialLinks
                .filter((link) => link.external)
                .map((link, index, array) => (
                  <span key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-slate-300 underline decoration-white/30 underline-offset-4 transition-colors duration-200 hover:text-accent-400"
                    >
                      {link.label}
                    </a>
                    {index < array.length - 1 && ' or '}
                  </span>
                ))}
              .
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}