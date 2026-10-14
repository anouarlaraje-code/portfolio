import { useEffect, useRef, useState } from 'react'

/**
 * Fade-in-on-scroll wrapper.
 * Adds the `is-visible` class as soon as the element enters the viewport.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children content to animate
 * @param {number} props.delay  optional delay in ms (for staggered children)
 * @param {string} props.className extra classes
 * @param {string} props.as     element tag to render (defaults to a div)
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    // No animation for users who prefer reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect() // animate only once
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}