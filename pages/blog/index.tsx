import Link from 'next/link';
import styles from '@styles/blog.module.css';
import type { GetStaticProps } from 'next'
import extractUrlsFromRSS from '@utils/parseXml/parseXML';

export const getStaticProps = (async () => {
    const url = "https://coffeebytes.dev/en/index.xml"
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

    const NUMBER_OF_POSTS = 10

    return (
        <div>
            <h1>My latests posts</h1>
            <div className={styles.container}>
                <ul>
                    {data?.slice(0, NUMBER_OF_POSTS).map(({ link, title, summary, pubDate }) => (
                        <li key={link}>
                            <Link title={title} aria-label={`Link to ${title}`} href={link}>
                                <h2 className={styles.postTitle}>{title}</h2>
                                <small className={styles.pubDate}>{new Date(pubDate).toJSON().slice(0, 10)}</small>
                                <p className={styles.post}>{summary?.slice(0, 280)}...</p>
                                <p className={styles.readMore}>Read more</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
