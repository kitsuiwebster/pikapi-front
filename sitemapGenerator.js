const fs = require('fs');
const path = require('path');

const routes = [
    { path: "/", changefreq: "weekly", priority: 1.0 },
];

const createSitemap = (routes) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
        .map(({ path, changefreq, priority }) => `
    <url>
        <loc>https://pikapi.co${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`).join('')}
</urlset>
`;
    return sitemap;
};

fs.writeFileSync(path.resolve(__dirname, './public/sitemap.xml'), createSitemap(routes), 'utf8');

console.log('Sitemap generated successfully!');
