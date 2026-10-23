import { roTopics } from './ro';
import { enTopics } from './en';
import { zhTopics } from './zh';
import type { Locale, Topic } from './types';

export const TOPICS: Topic[] = Object.keys(roTopics)
  .map((slug) => ({
    slug,
    ro: roTopics[slug],
    en: enTopics[slug],
    zh: zhTopics[slug],
  }))
  .filter((t) => t.ro || t.en || t.zh);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

// Locales that have content for a given topic.
export function topicLocales(topic: Topic): Locale[] {
  const out: Locale[] = [];
  if (topic.ro) out.push('ro');
  if (topic.en) out.push('en');
  if (topic.zh) out.push('zh');
  return out;
}

// Curated cross-links between topics (used on each topic page).
export const RELATED: Record<string, string[]> = {
  istorie: ['arhitectura', 'restaurare', 'portile-sfinte', 'piata-marii-adunari-nationale'],
  arhitectura: ['istorie', 'clopotul', 'ceasul', 'locatie-harta'],
  ceasul: ['arhitectura', 'clopotul', 'istorie'],
  clopotul: ['arhitectura', 'catedrala-nasterea-domnului', 'istorie'],
  'portile-sfinte': ['istorie', 'catedrala-nasterea-domnului', 'piata-marii-adunari-nationale'],
  restaurare: ['istorie', 'locatie-harta', 'in-apropiere'],
  'locatie-harta': ['transport-public', 'in-apropiere', 'piata-marii-adunari-nationale'],
  'transport-public': ['locatie-harta', 'in-apropiere', 'traseu-o-ora'],
  fotografii: ['locatie-harta', 'in-apropiere', 'traseu-o-ora'],
  'in-apropiere': ['catedrala-nasterea-domnului', 'piata-marii-adunari-nationale', 'traseu-o-ora'],
  'catedrala-nasterea-domnului': ['portile-sfinte', 'in-apropiere', 'clopotul'],
  'piata-marii-adunari-nationale': ['istorie', 'in-apropiere', 'locatie-harta'],
  'traseu-o-ora': ['in-apropiere', 'locatie-harta', 'transport-public'],
};

// Human-readable label for a topic in a given locale (falls back to ro/slug).
export function topicLabel(slug: string, locale: Locale): string {
  const t = getTopic(slug);
  const c = t?.[locale] || t?.ro;
  return c?.h1 || slug;
}
