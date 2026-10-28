import { Code2, Server, Database, Wrench } from 'lucide-react'

/** Skill groups - 4 columns on desktop, 2 on tablet, 1 on mobile.
 *  The group titles and language levels live in src/i18n/*.js. */
export const skillGroups = [
  { id: 'frontend', icon: Code2, items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'jQuery'] },
  { id: 'backend', icon: Server, items: ['Node.js', 'PHP', 'Laravel'] },
  { id: 'databases', icon: Database, items: ['MySQL', 'MongoDB'] },
  { id: 'tools', icon: Wrench, items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Jira', 'Microsoft Word', 'Microsoft Excel'] },
]

/** Languages spoken - the names and levels are translated in src/i18n/*.js. */
export const languages = [
  { id: 'ar', level: 'native' },
  { id: 'fr', level: 'school' },
  { id: 'en', level: 'school' },
]

export default skillGroups