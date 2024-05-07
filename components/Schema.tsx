import { siteData } from "siteData"
import { portfolioData } from "siteData"

export default function Schema() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfilePage",
                "@id": siteData["siteUrl"],
                "mainEntity": {
                    "@id": `${siteData["siteUrl"]}#about`
                }
            },
            {
                "@type": "Person",
                "@id": `${siteData["siteUrl"]}#about`,
                "name": siteData["authorFirstName"] + ' ' + siteData["authorLastName"],
                "url": siteData["siteUrl"],
                "image": siteData["profilePicture"],
                "description": siteData["authorDescription"],
                "jobTitle": siteData["jobTitle"],
                "gender": siteData["gender"],
                "knowsAbout": siteData["knowsAbout"],
                // Not putting personal info on the internet
                // "address": {
                //     "@type": "PostalAddress",
                //     "streetAddress": "Your Street Address",
                //     "addressLocality": "Your City",
                //     "addressRegion": "Your State",
                //     "postalCode": "Your Postal Code",
                //     "addressCountry": "Your Country"
                // },
                "email": siteData['authorEmail'],
                "telephone": siteData['phone'],
                "sameAs": siteData['otherProfiles']
            },
            {
                "@type": "CollectionPage",
                "headline": "Web Developer Portfolio",
                "isPartOf": {
                    "@id": siteData["siteUrl"]
                },
                "author": {
                    "@id": `${siteData["siteUrl"]}#about`
                },
                "description": "A collection of projects showcasing my skills and expertise as a web developer.",
                "hasPart": portfolioData.map(({ title, websiteLink, info, imgSrc, sourceCodeLink, stack }) => ({
                    "@type": "WebSite",
                    "author": {
                        "@id": `${siteData["siteUrl"]}#about`
                    },
                    "maintainer": {
                        "@id": `${siteData["siteUrl"]}#about`
                    },
                    "headline": title,
                    "description": info,
                    "image": imgSrc,
                    "url": websiteLink,
                    "isFamilyFriendly": true
                }))
            }
        ],

    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />)
}
