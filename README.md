# Eduardo Zepeda's personal website

My personal website written using nextjs. 

See it working on my personal website [eduardozepeda.dev](https://eduardozepeda.dev/)

## Sections

My personal website consists of:

- About me
- Portfolio
- Open Source Projects
- Contact

## Quickstart

To modify this project, just do it as you would normally do it in any nextjs project.

1. Clone the project
2. Install dependencies with *npm install* or yarn install
3. Run *npm run dev*

## Generate portfolio images

The makefile contains to commands to run

* generate/webp: which reads all jpg images in public/images and creates webp resized versions in 400px, 800px and 1200px 
* generate/jpg: which reads all jpg images in public/images and creates jpg resized versions in 400px, 800px and 1200px

Those images are saved  to the portfolio folder in the public directory.

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

