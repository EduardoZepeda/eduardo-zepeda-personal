# Eduardo Zepeda's personal website

My personal website written using nextjs, and it uses markdown for posts.

See it working on my personal website [zeedu.dev](https://zeedu.dev/).

## Sections

My personal website consists of:

- About me
- Portfolio
- Open Source Projects
- Contact
- Blog (optional)

## Quickstart

To modify this project, just do it as you would normally do it in any nextjs project.

1. Clone the project
2. Install dependencies with *npm install* or yarn install
3. Run *npm run dev*

## Customize it with your own data

You can customize this project with your own information modifying the *siteData.ts* file that's at the root level of the project.

### Contact email

Contact email is read as a base64 that's converted through Javascript, in order to prevent spam from bots that don't render Javascript.

``` javascript
    socialMediaLinks: {
        github: 'https://github.com/<your_user>',
        instagram: 'https://www.instagram.com/<your_user>/',
        linkedin: 'https://linkedin.com/in/<your_user>',
        twitter: 'https://twitter.com/<your_user>',
        // Email is created at run time, to prevent spam
        base64Email: '<base_64_converted_email>'
    }
```

A Makefile instruction is provided given that your OS has base64 installed

``` bash
make email=<your_email@domain.xyz> encode/email
```

## Generate portfolio images

The Makefile contains to commands to run

* **generate/webp**: reads all jpg images in public/images and creates webp resized versions in 400px, 800px and 1200px 
* **generate/jpg**: reads all jpg images in public/images and creates jpg resized versions in 400px, 800px and 1200px

Those images are saved to the portfolio folder inside the public directory.

Use the original image name as the imgSrc attribute in the portfolio data array and the system will use the proper resized version according to the browser's viewport.

``` javascript
const portfolioData = [
    {
      imgSrc: '/portfolio/<name>.jpg',
      title: 'Title',
      info: 'Info',
      websiteLink: 'https://example.org/',
      stack: 'stack'
    },
]
```

