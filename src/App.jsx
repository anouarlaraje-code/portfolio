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

/**
 * Single-page portfolio: every section is an anchor target
 * (#home, #about, #skills, #projects, #contact) used by the navbar.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Keyboard users: skip straight to the content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
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