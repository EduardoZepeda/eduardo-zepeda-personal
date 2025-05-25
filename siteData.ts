const siteURL = 'https://zeedu.dev'
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
    authorDescription: "Web developer and GNU/Linux user, furthermore SEO enthusiast. I believe in choosing the right tool for the job and that simplicity is the ultimate sophistication. I'm under the impression that being perfect is the enemy of getting things done. I also believe in the goodnesses of cryptocurrencies outside of monetary speculation.",
    jobTitle: 'Freelance web developer',
    knowsAbout: 'Django, DRF, Nextjs, Python, React, Go, Typescript, SEO, Postgres, Redis',
    gender: 'male',
    phone: '',
    otherProfiles: [
        'https://linkedin.com/in/eduardomzepeda',
        'https://twitter.com/hello_wired',
        'https://www.instagram.com/zeedu.dev/',
        'https://github.com/eduardoZepeda',
        'https://coffeebytes.dev/en/authors/eduardo-zepeda'
    ],
    siteDescription: 'Eduardo Zepeda web developer personal site and blog with programming tutorials, frontend and backend using Go, Python, Javascript, Typescript, Django, React, Nextjs and SEO.',
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
        instagram: 'https://www.instagram.com/zeedu.dev/',
        linkedin: 'https://linkedin.com/in/eduardomzepeda',
        twitter: 'https://twitter.com/hello_wired',
        // Email is created at run time, to prevent spam
        base64Email: 'aGVsbG9AemVlZHUuZGV2'
    }
}

export const aboutMe = {
    description: `<p>Let's start <strong>building your dreams using only the best mature and battle-tested technologies</strong>, deployed on the most stable and reliable system of all: Linux. I know both and can help you with that.</p>
        <p>Author at <a href='https://coffeebytes.dev/en/' rel='noreferrer noopener' target='_blank' aria-label='Coffee bytes website'>Coffee Bytes</a> where I write about web development and technology to more than 500 subscribed devs.</p>
        <p>I posses the <a href='https://www.credly.com/badges/17608a52-2cb7-4268-a907-613459559911/public_url' rel='noreferrer noopener nofollow' target='_blank' aria-label='AZ-900 certification link'>Microsoft AZ-900 certification</a></p>`
}

export const introduction = {
    greeting: 'Hey there,',
    name: 'I\'m Ed',
    introductionHeader: 'Turning your ideas into <code>',
    introductionText: 'Web Developer skilled in Python, TypeScript, Go, GNU/Linux',
    contact: 'Contact Ed'
}

export const contact = {
    message: "Let's keep in touch. My inbox is open for you and I'm always listening to new offers. I'd be delighted to hear about you.",
    buttonText: "Say hi to Ed"
}

export const portfolioData: PortfolioProject[] = [
    {
        imgSrc: '/portfolio/Fotosan.jpg',
        title: 'Fotosan price tracker',
        info: 'SAAS, daily price tracking web crawler for a wide variety of niche online stores, even Mercado Libre (via its API) and Amazon manually, more than +80k products tracked, +1M prices, drop price alert system and newsletter with affilate link system for recent offers.',
        websiteLink: 'https://fotosan.net/en/',
        stack: 'Django, Postgres, TailwindCSS, Nginx, Uvicorn, DO droplet'
    },
    {
        imgSrc: '/portfolio/Tamper.jpg',
        title: 'Tamper',
        info: 'Social Media Geo location app that, given a location, finds the nearest speciality coffee shops in Guadalajara. Furthermore, social network capabilities: real time chat, accounts, asymmetrical following system, likes, user\'s feed, rating and reviews system.',
        websiteLink: 'https://django-gis-coffee.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/django-gis-coffee',
        stack: 'Django, DRF, Nextjs, Typescript, React query, Vanilla CSS, Postgres, PostGIS, Leaflet, Fly.io'
    },
    {
        imgSrc: '/portfolio/Camerashuttercount.jpg',
        title: 'Camera Shutter Count',
        info: 'Multilingual web application that reads shutter count and EXIF metadata from any picture, it also contains graphs and tables related to shutter count data for almost all professional cameras. SEO friendly.',
        websiteLink: 'https://camerashuttercount.net/',
        stack: 'Nextjs, Typescript, DaisyUI, Sqlite, Nginx'
    },
    {
        imgSrc: '/portfolio/GoCoffeeApi.jpg',
        title: 'Go Coffee shops API',
        info: 'Social Media API backend written in Go from scratch and raw SQL. User accounts, JWT auth, coffee shops CRUD, following and likes system, search by user\'s location, FTS, logging, rate limiting and tests. Swaggo docs',
        websiteLink: 'https://go-coffee-api.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/go-coffee-api',
        stack: 'Go, Postgres, PostGIS, Gorilla, React, MUI, Vercel'
    },
    {
        imgSrc: '/portfolio/GoogleColabFinetuneMistral.jpg',
        title: 'Fine-tuned Mistral 7B',
        info: 'Fine-tuning of Mistral 7b LLM on Linkedin job posting dataset, so it can generate job postings with more accuracy and faster.',
        websiteLink: 'https://colab.research.google.com/drive/1Fe348rmXbDyvjoDPGEKrBtPurpfwnFgG#scrollTo=xkmpmhHTWzBZ',
        sourceCodeLink: 'https://www.kaggle.com/code/eduardomzepeda/fine-tuning-mistral-7b-with-linkedin-job-posting',
        stack: 'Pytorch, Kaggle, Hugging Face'
    },
    {
        imgSrc: '/portfolio/Biodek.jpg',
        title: 'Biodek',
        info: 'Responsive landing page frontend with psychedelic neon colors and smooth animations.',
        websiteLink: 'https://biodek-landing-page.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/biodek-landing-page/',
        stack: 'Nextjs, Typescript, Vercel'
    },
    {
        imgSrc: '/portfolio/CoffeeBytes.jpg',
        title: 'Coffee bytes',
        info: 'My web development blog, +100 entries/tutorials and +200 subscribed developers and +500 followers on Ig. I write new posts for developers every week.',
        websiteLink: 'https://coffeebytes.dev/en/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/coffeebytes',
        stack: 'Hugo (Prev. React + Headless WP), Nginx, Jenkins, DO droplet, Vanilla CSS'
    },
    {
        imgSrc: '/portfolio/MineSweeper.jpg',
        title: 'Mine Sweeper',
        info: 'Mine Sweeper with three levels of difficulty and a custom difficulty mode. Mark tiles as bombs, and reset game button.',
        websiteLink: 'https://eduardozepeda.github.io/mine-sweeper/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/mine-sweeper',
        stack: 'React, Typescript, Github pages'
    },
    {
        imgSrc: '/portfolio/NextJsPractice.jpg',
        title: 'Coffee provider',
        info: 'A coffee bookmark based on local storage, it shows some graphs and stats based on real data from "Coffee obsession" book. Emulated authentication using next-auth.',
        websiteLink: 'https://nextjs-practice-mauve.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/nextjsPractica',
        stack: 'Typescript, NextJS, Typescript, TailwindCSS, Vercel'
    },
    {
        imgSrc: '/portfolio/TheNexus.jpg',
        title: 'The nexus',
        info: 'My oldest open source web app. Bookmark, organize and backup your favorite websites with this startpage. CRUD capabilities based on browser\'s localStorage.',
        websiteLink: 'https://eduardozepeda.github.io/nexusStartPage/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/nexusStartPage',
        stack: 'Backbone, Bootstrap, Jquery, Github pages'
    },
    {
        imgSrc: '/portfolio/ElementalNames.jpg',
        title: 'Elemental names',
        info: 'Just for fun, or maybe t-shirts. A website that, given a word, uses symbols of chemical elements, and the backtrack algorithm, to construct it. If the given word can be formed by elements it\'ll show all the ways it can be formed, otherwise, it won\'t return anything.',
        websiteLink: 'https://elemental-names.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/elementalNames',
        stack: 'React, TailwindCSS, Vercel'
    },
    {
        imgSrc: '/portfolio/MiReflex.jpg',
        title: 'Mi reflex',
        info: 'Landing page that integrates facebook pixel events, for retargeting, and Mailchimp registration API.',
        websiteLink: 'https://eduardozepeda.github.io/landingPageMyReflex/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/landingPageMyReflex',
        stack: 'NextJS, TailwindCSS, Github pages'
    },
    {
        imgSrc: '/portfolio/Chiserstagram.jpg',
        title: 'Chiserstagram',
        info: 'Simple frontend instagram clone, with likes, share, save and responsiveness.',
        websiteLink: 'https://chiserstagram.netlify.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/chiserstagramPractice',
        stack: 'Netlify, Svelte'
    }
]

export const projectData: Project[] = [
    {
        title: 'go-web-crawler',
        description: 'A concurrent web crawler written in go that looks for exposed .git and .env uris.',
        stack: 'Go',
        link: 'https://github.com/EduardoZepeda/go-web-crawler'
    },
    {
        title: 'django-payments-mercadopago',
        description: 'Make your payments easier with this mercadopago payment gateway backend for django-payments. Available on PyPI.',
        stack: 'Python, Django',
        link: 'https://github.com/EduardoZepeda/django-payments-mercadopago'
    },
    {
        title: 'django-postalcodes-mexico',
        description: 'A Django Package that handles all the hassle of working with Mexican Postal Service (Correos de Mexico) postal codes. Available on PyPI.',
        stack: 'Python, Django',
        link: 'https://github.com/EduardoZepeda/django-postalcodes-mexico'
    },
    {
        title: 'hugo-theme-latte',
        description: 'Hugo theme for my programming blog. Responsive, dark and light theme, and excellent stats in Lighthouse',
        stack: 'Go, Hugo',
        link: 'https://github.com/EduardoZepeda/hugo-theme-latte'
    }
]

export const sourceCodeUrl: string = 'https://github.com/EduardoZepeda/eduardo-zepeda-personal'



