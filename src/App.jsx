import { LanguageProvider, useTranslation } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Story from './components/Story'
import Internship from './components/Internship'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

/** All the page content - kept separate so it can use the `t()` helper. */
function Page() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-bg">
      {/* Keyboard users: skip straight to the content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        {t('ui.skip')}
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Story />
        <Internship />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

/**
 * Single-page portfolio: every section is an anchor target
 * (#home, #about, #skills, #projects, #contact) used by the navbar.
 * LanguageProvider supplies the translations and the RTL switch.
 */
export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}