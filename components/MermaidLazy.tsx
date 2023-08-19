import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Mermaid } from 'mermaid'

const cache = new Map<string, Mermaid>()

const MermaidLazy = ({ className, children, ...props }: React.HTMLProps<HTMLElement>) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    async function initializeMermaid() {
        if (!cache.get('mermaid')) {
            const { default: mermaid } = await import('mermaid')
            cache.set('mermaid', mermaid)
        }
        cache.get('mermaid')?.initialize({ startOnLoad: false, theme: 'dark' });
        await cache.get('mermaid')?.run({
            querySelector: '.language-mermaid',
        })
    }

    if (inView) {
        initializeMermaid()
    }

    return (
        <code {...props} ref={ref} className={className}>
            {children}
        </code>
    )
}

export default MermaidLazy
