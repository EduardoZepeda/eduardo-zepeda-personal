import {  useState, useEffect, useRef } from 'react'
import lunr from 'lunr'
import Link from 'next/link'
import styles from '@styles/Home.module.css'

const Search = (): JSX.Element => {
  const [query, setQuery] = useState<string>('')
  const [index, setIndex] = useState<Entry[]>([])
  const [results, setResults] = useState<CustomResult[]>([])

  const idx = initializeSearchIndex(index)

  function initializeSearchIndex(entries: Entry[]): lunr.Index {
    const idx: lunr.Index = lunr(function () {
            this.ref('id')
            this.field('title')
            entries.forEach((entry) => {
                this.add(entry)
        }, this)
    })
    return idx
}

  useEffect(() => {
    fetch('/index.json').then((results)=>results.json()).then((data)=>setIndex(data))
  }, [query])


  
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase())
    const results = idx.search(event.target.value.toLowerCase())
    // Only the first ten results
    .slice(0,10)
    // Add title, description and slug (for url) to every result
    .map((result)=>({...result, "title": index[parseInt(result.ref)]?.title, "slug": index[parseInt(result.ref)]?.slug, "description": index[parseInt(result.ref)]?.description}))
    // Exclude those results without a url
    .filter((result)=>result.slug!==undefined)
    setResults(results)
  }

  return (
    <div className={styles.searchResults}>
    <h2>What are you looking for?</h2>
    <input className={styles.searchInput} onChange={handleChange} value={query} type="text"
                placeholder="I wanna read about..."/> 
      <ul>
        {results.length>0 ? results.map((result,index)=><li className={styles.searchResultItem} key={index}>
          <Link className={styles.searchLink} href={`/blog/${result.slug}`}>{result.title}</Link>
          <small></small>
          <p>{result.description}</p>
          </li>): query.length<3? null:<p>I don't think I have an article about that.</p>}
      </ul>
</div> 
  )
}

export default Search
