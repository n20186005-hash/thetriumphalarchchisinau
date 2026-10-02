import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thetriumphalarchchisinau.com';
  const defaultLocale = routing.defaultLocale;

  // All supported locales
  const locales = routing.locales;

  // The routes in your application
  const routes = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-settings',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      const prefix = locale === defaultLocale ? '' : `/${locale}`;
      sitemapEntries.push({
        url: `${baseUrl}${prefix}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.5,
      });
    });
  });

  return sitemapEntries;
}