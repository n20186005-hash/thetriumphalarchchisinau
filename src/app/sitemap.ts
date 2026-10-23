import { MetadataRoute } from 'next';
import { routing, type Locale } from '@/i18n/routing';
import { TOPICS, topicLocales } from '@/data/topics';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thetriumphalarchchisinau.com';

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Homepages + policy pages per locale
  const staticRoutes = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];
  for (const locale of routing.locales as Locale[]) {
    for (const route of staticRoutes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.4,
      });
    }
  }

  // Topic pages (only locales with content)
  for (const topic of TOPICS) {
    for (const locale of topicLocales(topic)) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${topic.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
