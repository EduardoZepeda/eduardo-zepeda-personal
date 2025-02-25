import Link from 'next/link';
import styles from '@styles/blog.module.css';
import { siteData } from 'siteData';
import mainStyles from '@styles/Home.module.css'
import Head from 'next/head';
import paginate from '@utils/paginator/paginate';
import fetchPosts from '@utils/fetch/posts';

const NUMBER_OF_POSTS = 10

export const getStaticPaths = (async () => {
    const url = siteData["blog"]["rss"]
    const posts = await fetchPosts(url)
    const { totalPages } = paginate(posts, NUMBER_OF_POSTS, 1)
    const paths = new Array(totalPages ? totalPages + 1 : 1).fill(0).reduce((a, _, i) => [...a, i], [])
    return {
        paths: paths.map((number: number) => { return { params: { page: number.toString() } } }),
        fallback: false,
    }
})

export const getStaticProps = (async ({ params: { page } }: { params: { page: string } }) => {
    const url = siteData["blog"]["rss"]
    // This is making a request per page, which can be reduced to one, for now it's ok since 
    // this is a SSG site and only happens once in a while
    const posts = await fetchPosts(url)
    const paginator = paginate(posts, NUMBER_OF_POSTS, parseInt(page))
    return { props: { data: paginator } }
})



export default function Blog({ data: { currentPageItems, previousPage, nextPage, currentPage } }: { data: paginatorObject }) {
    const fullName = `${siteData["authorFirstName"]} ${siteData["authorLastName"]}`

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": fullName,
        "description": siteData["blog"]["description"],
        "url": siteData["blog"]["url"],
        "image": siteData["blog"]["image"],
        "publisher": {
            "@type": "Person",
            "name": fullName
        },
        "author": {
            "@type": "Person",
            "name": fullName
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": siteData["blog"]["url"]
        },
        "blogPost": currentPageItems?.map(({ link, title, summary, pubDate }) => (
            {
                "@type": "BlogPosting",
                "headline": title,
                "description": summary,
                "datePublished": pubDate,
                "dateModified": pubDate,
                "author": {
                    "@type": "Person",
                    "name": fullName
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": link
                }
            }
        ))
    }
    function unescapeHtml(str: string) {
        return str
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&#xA;/g, "")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&rsquo;/g, "'")
            .replace(/&#039;/g, "'");
    }

    return (
        <div className={styles.container}>
            <h1>{`${fullName}'s latests posts`}</h1>
            <Head>
                <title>{`${fullName}'s blog`}{` `}{`Page ${currentPage}`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={siteData["blog"]["description"]} />
                <meta name="author" content={fullName} />
                <meta property="og:locale" content="en_US" />
                <meta name="og:description" content={siteData["blog"]["description"]} />
                <meta property="og:type" content="profile" />
                <meta property="profile:first_name" content={siteData["authorFirstName"]} />
                <meta property="profile:last_name " content={siteData["authorLastName"]} />
                <meta property="profile:username" content={siteData["username"]} />
                <meta property="profile:gender" content={siteData["gender"]} />
                <meta property="og:url" content={siteData["siteUrl"]} />
                <meta property="og:title" content={`My latests posts | ${fullName}`} />
                <meta property="twitter:title" content={`My latests posts | ${fullName}`} />
                <meta property="twitter:description" content={siteData["blog"]["description"]} />
            </Head>
            <div>
                <ul>
                    {currentPageItems?.map(({ link, title, summary, pubDate, category }) => (
                        category && <li className={styles.postLi} key={link}>
                            <Link title={title} aria-label={`Link to ${title}`} href={link}>
                                <h2 className={styles.postTitle}>{title}</h2>
                                <small className={styles.pubDate}><ol className={styles.categories}>{typeof category === "string" ? <li className={styles.category}>{category}</li> : category?.map(cat => <li className={styles.category} key={title + cat}>{cat}</li>)}</ol></small>
                                <small><time>{new Date(pubDate).toDateString()}</time></small>
                                <p className={styles.post}>{unescapeHtml(summary?.slice(0, 280))}...</p>
                                <p className={styles.readMore}>Read more</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.pagination}>
                {previousPage && <Link className={mainStyles.btn} href={`/blog/page/${previousPage}`}>Previous Page</Link>}
                {nextPage && <Link className={mainStyles.btn} href={`/blog/page/${nextPage}`}>Next Page</Link>}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div >
    )
}
