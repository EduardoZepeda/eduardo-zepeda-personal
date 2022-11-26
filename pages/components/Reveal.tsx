import React, { useState, useRef, useEffect } from 'react'
import styles from '@styles/Home.module.css'

interface propsWithChildren {
    children: React.ReactNode
}

const RevealElement = ({ children }: propsWithChildren) => {
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
                threshold: 0.2
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