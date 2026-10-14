import { Github, Linkedin, Mail } from 'lucide-react'

/**
 * Personal information.
 * Everything on the site is driven by this file - edit it to update the content.
 */
export const personalInfo = {
  firstName: 'Anouar',
  name: 'Anouar Laraje',
  logoText: '</>',
  title: 'Full-Stack Web Developer',
  status:
    'Full-Stack Web Development student at ISTA Bab Tizimi (OFPPT), looking for a one-month internship starting January 2027',
  location: 'Meknès, Morocco',
  email: 'anwarlaraje3@gmail.com',
  phone: '0616504875',
  // TODO: replace the two URLs below with your real profiles
  github: '#', // 'https://github.com/your-username'
  linkedin: '#', // 'https://www.linkedin.com/in/your-username'
  resumeUrl: '#', // optional: link to your CV (PDF) when you have one

  badge: 'Available for internship, January 2027',

  // Hero portrait - drop your photo in /public/assets and update the path here
  photo: '/assets/profile.jpeg',
  photoAlt: 'Portrait of Anouar Laraje, full-stack web developer',

  heroDescription:
    'I build complete, scalable web apps from the interface to the database - React, Next.js, Node.js and PHP/Laravel.',

  // Short "about" paragraph used in the About section
  bio: `Full-Stack web developer in training, passionate about building web applications and solving complex problems with code. I build complete, scalable web apps from the interface to the database. I am looking for a one-month Full-Stack internship (React, Next.js, Node.js, PHP/Laravel) starting January 2027 to apply my skills and contribute to real company projects.`,
}

/** Social icons shown in the hero, contact section and footer. */
export const socialLinks = [
  { id: 'github', label: 'GitHub', url: personalInfo.github, icon: Github, external: true },
  { id: 'linkedin', label: 'LinkedIn', url: personalInfo.linkedin, icon: Linkedin, external: true },
  { id: 'email', label: 'Email', url: `mailto:${personalInfo.email}`, icon: Mail, external: false },
]

/** Quick links in the right-hand hero column. */
export const heroLinks = [
  { id: 'about', label: 'About me', href: '#about', cta: 'Learn more' },
  { id: 'work', label: 'My work', href: '#projects', cta: 'Browse projects' },
]

/** Stats displayed in the About section (only real numbers, nothing invented). */
export const stats = [
  { value: '5', label: 'Projects built' },
  { value: '4', label: 'Core stacks: React, Next.js, Laravel, Node.js' },
]

/** "My story" section content. */
export const story = {
  label: 'My story',
  heading: 'My journey into web development',
  paragraphs: [
    'I am studying Full-Stack Web Development at ISTA Bab Tizimi (OFPPT), where I learned the fundamentals of building real applications: HTML, CSS and JavaScript, then React and Next.js on the front-end, and Node.js, PHP and Laravel with MySQL and MongoDB on the back-end.',
    'Most of what I know came from building projects from scratch - an online store, a job board, an inventory system. Every project taught me how to structure data, handle user input and ship something that actually works end to end.',
  ],
  image: '/assets/story.svg',
  imageAlt: 'Laptop showing source code, illustrating my learning journey',
}

/** Internship call-to-action band. */
export const internship = {
  heading: 'Looking for a 1-month Full-Stack internship, January 2027',
  ctaLabel: 'Get in touch',
  ctaHref: '#contact',
  note: 'Open to a one-month mission starting January 2027 - Meknès, Morocco or remote.',
}

/** Education entry. */
export const education = [
  {
    id: 'ista',
    school: 'ISTA Bab Tizimi (OFPPT)',
    degree: 'Full-Stack Web Development training',
    description:
      'Training focused on building complete web applications: front-end interfaces, back-end APIs and database design.',
    location: 'Meknès, Morocco',
  },
]

export default personalInfo