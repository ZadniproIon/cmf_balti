import { routing } from '../i18n/routing';

const baseUrl = 'https://cmfbalti.netlify.app';

const pages = [
  '',
  '/despre-noi',
  '/generale',
  '/transparenta',
  '/contacte',
];

export default function sitemap() {
  const sitemapEntries = [];

  pages.forEach((page) => {
    routing.locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${page}`;
      const alternates = {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            `${baseUrl}/${altLocale}${page}`,
          ])
        ),
      };

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
        alternates,
      });
    });
  });

  return sitemapEntries;
}
