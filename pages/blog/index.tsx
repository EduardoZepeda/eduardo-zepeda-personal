import Link from 'next/link';
import styles from '@styles/blog.module.css';
import extractUrlsFromRSS from '@utils/parseXml/parseXML';
import { siteData } from 'siteData';
import mainStyles from '@styles/Home.module.css'
import Head from 'next/head';

export const getStaticProps = (async () => {
    const url = siteData["blog"]["rss"]
    try {
        const response = await fetch(url, {
            method: 'GET',
        }
        );
        if (!response.ok) {
            switch (response.status) {
                case 400:
                    throw new Error("Bad request: please check the format of your HTTP request");
                case 500:
                    throw new Error("Internal server error: there was an error in the server, please try again later");
                case 404:
                    throw new Error("Not found: Url wasn't found please make sure to have the correct url");
                default:
                    throw new Error("Something went unexpectedly wrong!");
            }
        }
        const result = await response.text();
        const parsedData = extractUrlsFromRSS(result)
        return { props: { data: parsedData } }

    } catch (e) {
        console.error(e)
    }
    return { props: { data: [] } }
})



export default function Blog({ data }: { data: PostFromXml[] }) {
    const fullName = `${siteData["authorFirstName"]} ${siteData["authorLastName"]}`
    const NUMBER_OF_POSTS = 10

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
        "blogPost": data?.slice(0, NUMBER_OF_POSTS).map(({ link, title, summary, pubDate }) => (
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


    return (
        <div className={styles.container}>
            <h1>{`${fullName}'s latests posts`}</h1>
            <Head>
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
                <p>{`My posts are hosted on my blog `}<strong>{`where I've published ${data.length} so far. `}</strong>{`Posts are ordered cronologically feel free to read any of them.`}</p>
                <ul>
                    {data?.slice(0, NUMBER_OF_POSTS).map(({ link, title, summary, pubDate, category }) => (
                        <li className={styles.postLi} key={link}>
                            <Link title={title} aria-label={`Link to ${title}`} href={link}>
                                <h2 className={styles.postTitle}>{title}</h2>
                                <small className={styles.pubDate}><ol className={styles.categories}>{typeof category === "string" ? <li className={styles.category}>{category}</li> : category.map(cat => <li className={styles.category} key={title + cat}>{cat}</li>)}</ol></small>
                                <small><time>{new Date(pubDate).toDateString()}</time></small>
                                <p className={styles.post}>{summary?.slice(0, 280)}...</p>
                                <p className={styles.readMore}>Read more</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={mainStyles.portfolioBtn}>
                <a className={mainStyles.btn} href={siteData["blog"]["url"]} aria-label='Go to read all posts'>
                    Read all posts
                </a>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    )
}
