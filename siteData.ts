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
    authorDescription: "I build fast, reliable websites that actually help your business grow. Been at this for a while—working with Python, Go, and modern JavaScript frameworks. I care about clean code, good performance, and making things simple instead of unnecessarily complex. Oh, and I'm pretty sure overthinking is the enemy of getting things done.",
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
    siteDescription: 'Freelance web developer who builds fast, reliable websites. Python, Go, React, Next.js—whatever fits your project best.',
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
    description: `<p>I turn "what if" into "it's live."</p>

    <p>I use AI, handwritten code, or cloud tools—whatever works for you. But I always know what's happening under the hood. Always backed up by the most stable technologies, so you get a product you can rely on.</p>

    <p>If that sounds like your kind of partner, take a look around. When you're ready, just say hi.</p>
    
    <h3>You've probably read some of my posts</h3>
    
    <p>I write about web development and tech on <a href='https://coffeebytes.dev/en/' rel='noreferrer noopener' target='_blank' aria-label='Coffee bytes website'>Coffee Bytes</a>. I also post on <a rel='noreferrer noopener' target='_blank' href="https://www.instagram.com/zeedu.dev">social media</a>, and hold an <a href='https://www.credly.com/badges/17608a52-2cb7-4268-a907-613459559911/public_url' rel='noreferrer noopener nofollow' target='_blank' aria-label='AZ-900 certification link'>Azure AZ-900 cert</a> (plus others) to back up the  stuff I build.</p>`
}

export const introduction = {
    greeting: 'Hey there,',
    name: "I'm Ed",
    introductionHeader: "Let's turn your ideas into <code>",
    introductionText: 'Web Developer skilled in Python, TypeScript, Go, GNU/Linux',
    contact: "Let's talk"
}

export const contact = {
    message: "Got a project in mind? I'd love to hear about it. Whether you have a clear idea or just want to bounce some thoughts, drop me a message.",
    buttonText: "Let's talk about your project"
}

export const portfolioData: PortfolioProject[] = [
    {
        imgSrc: '/portfolio/MeibelPriceTracking.jpg',
        title: 'Melibel price tracker',
        info: 'SAAS that tracks prices across Mercado Libre. Tracks over 5M products and 30M+ price points. Sends alerts when prices drop and runs a newsletter with deals. Telegram bot. Great for e-commerce monitoring.',
        websiteLink: 'https://melibel.app/en/',
        stack: 'Django, Postgres, TailwindCSS, Nginx, Uvicorn, vps'
    },
    {
        imgSrc: '/portfolio/Aiko.jpg',
        title: "Aiko",
        info: 'A virtual AI powered Assistant for businesses (demo available), replies to Whatsapp text, audio and image messages. It handles appointments and saves them to Google Sheets, it sends reminders.',
        websiteLink: 'https://landing-ai-automation-for-businesse.vercel.app/',
        stack: 'n8n, AI, Nextjs'
    },
    {
        imgSrc: '/portfolio/Camerashuttercount.jpg',
        title: 'Camera Shutter Count',
        info: 'Checks any photo\'s shutter count and EXIF data instantly. Used by photographers worldwide to check camera usage before buying or selling.  Includes ranking, photography simulator, gamification and gets great SEO results.',
        websiteLink: 'https://camerashuttercount.net/',
        stack: 'Nextjs, Typescript, DaisyUI, Sqlite, Nginx, vps'
    },
    {
        imgSrc: '/portfolio/Tamper.jpg',
        title: 'Tamper',
        info: 'A social network Geo location coffee club app. It finds specialty coffee shops near any location in Guadalajara. User accounts, real-time chat between users, following system, reviews, ratings, and a social feed.',
        websiteLink: 'https://django-gis-coffee.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/django-gis-coffee',
        stack: 'Django, DRF, Nextjs, Typescript, React query, Vanilla CSS, Postgres, PostGIS, Leaflet, Fly.io'
    },
    {
        imgSrc: '/portfolio/CoffeeBytes.jpg',
        title: 'Coffee bytes',
        info: 'My web development blog with 100+ tutorials and articles. Built to share practical knowledge with developers—500+ followers on Instagram, 200+ subscribers. Updated weekly.',
        websiteLink: 'https://coffeebytes.dev/en/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/coffeebytes',
        stack: 'Hugo (Prev. React + Headless WP), Nginx, Jenkins, DO droplet, Vanilla CSS'
    },
    {
        imgSrc: '/portfolio/GoCoffeeApi.jpg',
        title: 'Go Coffee shops API',
        info: 'Fast API backend built from scratch in Go. Handles user auth, CRUD for coffee shops, location-based search, following, likes, and full-text search. Includes docs and rate limiting.',
        websiteLink: 'https://go-coffee-api.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/go-coffee-api',
        stack: 'Go, Postgres, PostGIS, Gorilla, React, MUI, Vercel'
    },
    {
        imgSrc: '/portfolio/GoogleColabFinetuneMistral.jpg',
        title: 'Fine-tuned Mistral 7B',
        info: 'Custom LLM fine-tuned on LinkedIn job postings to generate better job descriptions. Faster and more accurate than generic AI for HR use cases.',
        websiteLink: 'https://colab.research.google.com/drive/1Fe348rmXbDyvjoDPGEKrBtPurpfwnFgG#scrollTo=xkmpmhHTWzBZ',
        sourceCodeLink: 'https://www.kaggle.com/code/eduardomzepeda/fine-tuning-mistral-7b-with-linkedin-job-posting',
        stack: 'Pytorch, Kaggle, Hugging Face'
    },
    {
        imgSrc: '/portfolio/Biodek.jpg',
        title: 'Biodek',
        info: 'Eye-catching landing page with neon aesthetics and smooth animations. Built to convert visitors into customers.',
        websiteLink: 'https://biodek-landing-page.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/biodek-landing-page/',
        stack: 'Nextjs, Typescript, Vercel'
    },
    {
        imgSrc: '/portfolio/MineSweeper.jpg',
        title: 'Mine Sweeper',
        info: 'Classic Minesweeper game with three difficulty levels and custom options. Clean, playable interface.',
        websiteLink: 'https://eduardozepeda.github.io/mine-sweeper/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/mine-sweeper',
        stack: 'React, Typescript, Github pages'
    },
    {
        imgSrc: '/portfolio/TheNexus.jpg',
        title: 'The nexus',
        info: 'Personal startpage to organize and back up your favorite sites. CRUD features using browser localStorage. Simple but useful.',
        websiteLink: 'https://eduardozepeda.github.io/nexusStartPage/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/nexusStartPage',
        stack: 'Backbone, Bootstrap, Jquery, Github pages'
    },
    {
        imgSrc: '/portfolio/ElementalNames.jpg',
        title: 'Elemental names',
        info: 'Fun tool that turns any word into chemical element symbols. Shows all possible combinations using a backtracking algorithm. Great for t-shirt designs.',
        websiteLink: 'https://elemental-names.vercel.app/',
        sourceCodeLink: 'https://github.com/EduardoZepeda/elementalNames',
        stack: 'React, TailwindCSS, Vercel'
    },
]

export const projectData: Project[] = [
    {
        title: 'go-web-crawler',
        description: 'Concurrent web crawler that finds exposed .git and .env files. Useful for security audits.',
        stack: 'Go',
        link: 'https://github.com/EduardoZepeda/go-web-crawler'
    },
    {
        title: 'django-payments-mercadopago',
        description: 'Django payment integration for MercadoPago. Accept payments in your Django app with minimal setup. Available on PyPI.',
        stack: 'Python, Django',
        link: 'https://github.com/EduardoZepeda/django-payments-mercadopago'
    },
    {
        title: 'django-postalcodes-mexico',
        description: 'Handle Mexican postal codes easily in Django. Look up locations, validate addresses, and streamline shipping. Available on PyPI.',
        stack: 'Python, Django',
        link: 'https://github.com/EduardoZepeda/django-postalcodes-mexico'
    },
    {
        title: 'Rusty-yt-dlp-gui',
        description: 'Lightweight Linux desktop app for downloading YouTube videos and audio. Clean, minimalist interface.',
        stack: 'Rust',
        link: 'https://github.com/EduardoZepeda/rusty-yt-dlp-gui'
    },
    {
        title: 'hugo-theme-latte',
        description: 'Fast, responsive Hugo theme with dark/light mode. Great Lighthouse scores out of the box.',
        stack: 'Go, Hugo',
        link: 'https://github.com/EduardoZepeda/hugo-theme-latte'
    }
]

export const sourceCodeUrl: string = 'https://github.com/EduardoZepeda/eduardo-zepeda-personal'



