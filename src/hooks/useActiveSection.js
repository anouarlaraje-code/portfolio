import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view (used to highlight navbar links).
 * @param {string[]} ids list of section ids, in page order
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      // 140px from the top = just below the fixed navbar
      const line = window.scrollY + 140
      let current = ids[0]
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      })
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}