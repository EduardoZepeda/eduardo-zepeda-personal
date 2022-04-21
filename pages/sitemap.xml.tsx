import React from 'react';
import { NextPageContext } from 'next'

const url = 'https://eduardozepeda.dev'
const current = new Date()

const index = `
                <url>
                    <loc>${`${url}/`}</loc>
                    <lastmod>${current.toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>0.9</priority>
                </url>
`

const generateSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${index}
    </urlset>
    `;

class Sitemap extends React.Component {
    static async getInitialProps({ res }: NextPageContext) {

        res?.setHeader('Content-Type', 'text/xml');
        res?.write(generateSitemap());
        res?.end();
    }
}

export default Sitemap;
