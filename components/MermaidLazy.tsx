import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Mermaid } from 'mermaid'

const cache = new Map<string, Mermaid>()

const MermaidLazy = ({ className, children, ...props }: React.HTMLProps<HTMLElement>): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  async function initializeMermaid (): Promise<void> {
    if (cache.get('mermaid') == null) {
      const { default: mermaid } = await import('mermaid')
      cache.set('mermaid', mermaid)
    }
    cache.get('mermaid')?.initialize({ startOnLoad: false, theme: 'dark' })
    await cache.get('mermaid')?.run({
      querySelector: '.language-mermaid'
    })
  }

  if (inView) {
    void initializeMermaid()
  }

  return (
    // Prevent mermaid overflow that creates a shift in layout
    <code {...props} ref={ref} className={className} style={{ display: 'flex', overflow: 'auto' }}>
      {children}
    </code>
  )
}

export default MermaidLazy
