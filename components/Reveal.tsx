import { useRef, useEffect } from 'react'
import styles from '@styles/Home.module.css'

const RevealElement = ({ children }: propsWithChildren): React.ReactElement => {
  const visibleElementWrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          entry.target.classList.remove(styles.unrevealed)
          entry.target.classList.add(styles.revealed)
        }
      },
      {
        rootMargin: '0px 0px 0px 0px',
        root: null,
        threshold: 0.1
      }
    )
    observer.observe(visibleElementWrapper.current as HTMLDivElement)
  }, [])
  return (
    <div ref={visibleElementWrapper} className={styles.unrevealed}>
      {children}
    </div>
  )
}

export default RevealElement
