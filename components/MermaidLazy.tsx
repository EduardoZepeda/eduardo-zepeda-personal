import React from 'react'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { useInView } from 'react-intersection-observer'

const MermaidLazy = ({ className, children, ...props }: React.HTMLProps<HTMLElement>) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    async function loadMermaid() {
        const { default: mermaid } = await import('mermaid')
        mermaid.initialize({ startOnLoad: false, theme: 'dark' });
        await mermaid.run({
            querySelector: '.language-mermaid',
        })
    }

    if (inView) {
        loadMermaid()
    }

    console.log("loaded")
    return (
        <code {...props} ref={ref} className={className}>
            {children}
        </code>
    )
}

export default MermaidLazy
