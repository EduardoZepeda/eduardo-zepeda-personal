const siteURL = 'https://eduardozepeda.dev'
const date = new Date()

export const siteData = {
    siteUrl: siteURL,
    authorFirstName: 'Eduardo',
    authorLastName: 'Zepeda',
    username: 'EduardoZepeda',
    gender: 'male',
    siteMapPrefix: `${siteURL}/blog/`,
    rssPrefix: `${siteURL}/blog/`,
    siteDescription: 'Eduardo Zepeda web developer personal site, frontend and backend specialized in Go, Python, Javascript, Typescript, Django, React, Nextjs, DRF and vast GNU linux experience.',
    siteTitle: 'Eduardo Zepeda Web Developer',
    title: "Eduardo Zepeda's Personal Site",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo.svg`,
    favicon: `${siteURL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Eduardo Zepeda`,
    updated: date,
    generator: "",
}