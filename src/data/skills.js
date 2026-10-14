import { Code2, Server, Database, Wrench } from 'lucide-react'

/** Skill groups - 4 columns on desktop, 2 on tablet, 1 on mobile. */
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Front-end',
    icon: Code2,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'jQuery'],
  },
  {
    id: 'backend',
    title: 'Back-end',
    icon: Server,
    items: ['Node.js', 'PHP', 'Laravel'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    items: ['MySQL', 'MongoDB'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Jira', 'Microsoft Word', 'Microsoft Excel'],
  },
]

/** Languages spoken. */
export const languages = [
  { id: 'ar', name: 'Arabic', level: 'native' },
  { id: 'fr', name: 'French', level: 'school level' },
  { id: 'en', name: 'English', level: 'school level' },
]

export default skillGroups