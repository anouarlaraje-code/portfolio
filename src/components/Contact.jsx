import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import { personalInfo } from '../data/personal'
import { useTranslation } from '../i18n/LanguageContext'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const EMPTY_FORM = { name: '', email: '', message: '' }

/** Simple front-end validation. Returns an object with the error of each field. */
function validate(values, t) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) errors.name = t('contact.form.errors.nameRequired')
  else if (name.length < 2) errors.name = t('contact.form.errors.nameShort')

  if (!email) errors.email = t('contact.form.errors.emailRequired')
  else if (!EMAIL_REGEX.test(email)) errors.email = t('contact.form.errors.emailInvalid')

  if (!message) errors.message = t('contact.form.errors.messageRequired')
  else if (message.length < 10) errors.message = t('contact.form.errors.messageShort')

  return errors
}

/** Input styles shared by the three fields. */
const fieldClasses =
  'w-full rounded-xl border border-line/10 bg-surface2/80 px-4 py-3 text-sm text-heading placeholder:text-muted transition-colors duration-200 focus:border-accent focus:outline-none'

/**
 * Contact: details + a validated contact form (no backend required).
 */
export default function Contact() {
  const { t } = useTranslation()
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  /** Direct contact details shown on the left. */
  const contactDetails = [
    { id: 'email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
    { id: 'phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: Phone },
    { id: 'github', value: t('contact.viewProfile'), href: personalInfo.github, icon: Github, external: true },
    { id: 'linkedin', value: t('contact.viewProfile'), href: personalInfo.linkedin, icon: Linkedin, external: true },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    // clear the error while the user types
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const found = validate(values, t)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }

    // There is no server behind this form: open the visitor's email app,
    // with the message already written and addressed to me.
    const subject = encodeURIComponent(t('contact.form.subject', { name: values.name.trim() }))
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n---\n${values.name.trim()} <${values.email.trim()}>`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

    setSent(true)
    setValues(EMPTY_FORM)
  }

  return (
    <section id="contact" className="section-pad border-t border-line/5">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ---------------------------- left ---------------------------- */}
        <Reveal>
          <p className="section-label">
            <span className="slash" aria-hidden="true">
              /
            </span>
            {t('contact.label')}
          </p>
          <h2 className="heading-xl max-w-md">{t('contact.heading')}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-body">
            {t('contact.intro')}
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
                    className="card group flex items-center gap-4 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-surface"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted">
                        {t('contact.labels.' + item.id)}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-heading">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-body">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {t('contact.location')}
          </p>
        </Reveal>

        {/* ---------------------------- form ---------------------------- */}
        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card p-6 sm:p-8"
            aria-label={t('contact.label')}
          >
            <div className="grid gap-5">
              {/* name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-body">
                  {t('contact.form.name')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t('contact.form.namePlaceholder')}
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`${fieldClasses} ${errors.name ? 'border-danger/70' : ''}`}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-2 text-xs text-danger">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-body">
                  {t('contact.form.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`${fieldClasses} ${errors.email ? 'border-danger/70' : ''}`}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-2 text-xs text-danger">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-body">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t('contact.form.messagePlaceholder')}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${fieldClasses} resize-y ${errors.message ? 'border-danger/70' : ''}`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-xs text-danger">
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
              {t('contact.form.submit')}
            </button>

            {/* feedback once the message is handed over to the email app */}
            {sent && (
              <p role="status" className="mt-5 flex items-start gap-2 text-sm text-body">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {t('contact.form.success', { email: personalInfo.email })}
              </p>
            )}

            <p className="mt-5 text-xs text-muted">
              {t('contact.form.preferSocial')}{' '}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-body underline decoration-line/30 underline-offset-4 transition-colors duration-200 hover:text-accent-400"
              >
                {t('social.github')}
              </a>
              {' '}{t('contact.form.or')}{' '}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-body underline decoration-line/30 underline-offset-4 transition-colors duration-200 hover:text-accent-400"
              >
                {t('social.linkedin')}
              </a>
              .
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}