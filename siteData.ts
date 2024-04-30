const siteURL = 'https://eduardozepeda.dev'
const date = new Date()

export const siteData = {
    siteUrl: siteURL,
    authorFirstName: 'Eduardo',
    authorLastName: 'Zepeda',
    username: 'EduardoZepeda',
    profilePicture: 'https://res.cloudinary.com/dwrscezd2/image/upload/v1690065701/wallhaven-l3z1vl_rh7gs4.jpg',
    blog: {
        rss: "https://coffeebytes.dev/en/index.xml",
        description: 'Tutorials and acid opinions about web development, programming and technology',
        image: '',
        url: 'https://coffeebytes.dev'
    },
    authorEmail: 'eduardomzepeda [at] outlook [dot] com',
    authorDescription: "Web developer and GNU/Linux enthusiast always learning something new. I believe in choosing the right tool for the job and that simplicity is the ultimate sophistication. I'm under the impression that being perfect is the enemy of getting things done. I also believe in the goodnesses of cryptocurrencies outside of monetary speculation.",
    jobTitle: 'Freelance web developer',
    gender: 'male',
    phone: '',
    otherProfiles: ['https://linkedin.com/in/eduardomzepeda', 'https://twitter.com/hello_wired', 'https://www.instagram.com/eduardozepeda.dev/', 'https://github.com/eduardoZepeda'],
    siteMapPrefix: `${siteURL}/blog/`,
    rssPrefix: `${siteURL}/blog/`,
    siteDescription: 'Eduardo Zepeda web developer personal site and blog with programming tutorials, frontend and backend using Go, Python, Javascript, Typescript, Django, React, Nextjs.',
    siteTitle: 'Eduardo Zepeda Web Developer',
    title: "Eduardo Zepeda's Personal Site",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo.svg`,
    favicon: `${siteURL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Eduardo Zepeda`,
    updated: date,
    generator: '',
    language: 'en-us',
    socialMediaLinks: {
        github: 'https://github.com/eduardoZepeda',
        instagram: 'https://www.instagram.com/eduardozepeda.dev/',
        linkedin: 'https://linkedin.com/in/eduardomzepeda',
        twitter: 'https://twitter.com/hello_wired',
        // Email is created at run time, to prevent spam
        email: 'ZWR1YXJkb216ZXBlZGFAb3V0bG9vay5jb20'
    }
}