import { Github, Linkedin, Mail } from 'lucide-react'

/**
 * Personal information (language-neutral data: names, contact details, URLs).
 * All sentences - bio, badge, headings, stats, story, internship text - live
 * in the translation files: src/i18n/en.js, fr.js and ar.js.
 */
export const personalInfo = {
  firstName: 'Anouar',
  name: 'Anouar Laraje',
  logoText: '</>',
  email: 'anwarlaraje3@gmail.com',
  phone: '0616504875',
  // TODO: replace the two URLs below with your real profiles
  github: '#', // 'https://github.com/your-username'
  linkedin: '#', // 'https://www.linkedin.com/in/your-username'
  // Hero portrait - drop your photo in /public/assets and update the path here
  photo: '/assets/profile.jpeg',
}

/** Social icons shown in the hero, contact section and footer. */
export const socialLinks = [
  { id: 'github', url: personalInfo.github, icon: Github, external: true },
  { id: 'linkedin', url: personalInfo.linkedin, icon: Linkedin, external: true },
  { id: 'email', url: `mailto:${personalInfo.email}`, icon: Mail, external: false },
]

/** Education entry (school names are proper nouns and stay as they are). */
export const education = [
  {
    id: 'ista',
    school: 'ISTA Bab Tizimi (OFPPT)',
  },
]

export default personalInfo