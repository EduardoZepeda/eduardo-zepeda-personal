import { siteData } from "siteData"

export default function Schema() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": siteData["authorFirstName"] + ' ' + siteData["authorLastName"],
        "url": siteData["siteUrl"],
        "image": siteData["profilePicture"],
        "description": siteData["authorDescription"],
        "jobTitle": siteData["jobTitle"],
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
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />)
}
