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
  istorie: ['arhitectura', 'restaurare', 'portile-sfinte', 'piata-marii-adunari-nationale', 'chisinau-vs-bucuresti'],
  arhitectura: ['istorie', 'clopotul', 'ceasul', 'locatie-harta', 'traseu-arhitectural'],
  ceasul: ['arhitectura', 'clopotul', 'istorie'],
  clopotul: ['arhitectura', 'catedrala-nasterea-domnului', 'istorie'],
  'portile-sfinte': ['istorie', 'catedrala-nasterea-domnului', 'piata-marii-adunari-nationale'],
  restaurare: ['istorie', 'locatie-harta', 'in-apropiere'],
  'locatie-harta': ['transport-public', 'in-apropiere', 'piata-marii-adunari-nationale', 'parcare', 'accesibilitate'],
  'transport-public': ['locatie-harta', 'in-apropiere', 'traseu-o-ora', 'de-la-aeroport', 'de-la-gara', 'de-la-autogara-centrala'],
  fotografii: ['locatie-harta', 'in-apropiere', 'traseu-o-ora', 'desen', 'anotimpuri'],
  'in-apropiere': ['catedrala-nasterea-domnului', 'piata-marii-adunari-nationale', 'traseu-o-ora', 'muzeul-national-de-istorie', 'muzeul-national-de-arta', 'monumentul-stefan-cel-mare'],
  'catedrala-nasterea-domnului': ['portile-sfinte', 'in-apropiere', 'clopotul', 'clopotnita-catedralei', 'parcul-catedralei'],
  'piata-marii-adunari-nationale': ['istorie', 'in-apropiere', 'locatie-harta'],
  'traseu-o-ora': ['in-apropiere', 'locatie-harta', 'transport-public', 'cu-copiii'],
  vizitare: ['locatie-harta', 'accesibilitate', 'parcare', 'traseu-o-ora', 'obiective-gratuite'],
  'de-la-aeroport': ['transport-public', 'locatie-harta', 'parcare', 'chisinau-intr-o-zi'],
  'de-la-gara': ['transport-public', 'locatie-harta', 'chisinau-intr-o-zi'],
  'de-la-autogara-centrala': ['transport-public', 'locatie-harta'],
  parcare: ['locatie-harta', 'vizitare', 'transport-public', 'de-la-aeroport'],
  accesibilitate: ['vizitare', 'locatie-harta', 'cu-copiii'],
  'clopotnita-catedralei': ['catedrala-nasterea-domnului', 'parcul-catedralei', 'istorie'],
  'parcul-catedralei': ['catedrala-nasterea-domnului', 'aleea-clasicilor', 'in-apropiere', 'cu-copiii'],
  'parcul-stefan-cel-mare': ['monumentul-stefan-cel-mare', 'in-apropiere', 'traseu-o-ora', 'chisinau-intr-o-zi'],
  'monumentul-stefan-cel-mare': ['parcul-stefan-cel-mare', 'istorie', 'in-apropiere', 'chisinau-intr-o-zi'],
  'aleea-clasicilor': ['parcul-catedralei', 'catedrala-nasterea-domnului'],
  'strada-eugen-doga': ['traseu-arhitectural', 'in-apropiere'],
  'ghid-educational': ['istorie', 'arhitectura', 'cu-copiii', 'desen'],
  desen: ['fotografii', 'arhitectura', 'locatie-harta', 'ghid-educational'],
  'chisinau-vs-bucuresti': ['istorie', 'arhitectura'],
  'cu-copiii': ['accesibilitate', 'vizitare', 'parcul-catedralei', 'ghid-educational'],
  anotimpuri: ['vizitare', 'fotografii', 'traseu-o-ora'],
  'muzeul-national-de-istorie': ['in-apropiere', 'traseu-jumatate-de-zi', 'chisinau-intr-o-zi', 'chisinau-pe-ploaie'],
  'muzeul-national-de-arta': ['in-apropiere', 'traseu-jumatate-de-zi', 'chisinau-intr-o-zi', 'chisinau-pe-ploaie'],
  'traseu-jumatate-de-zi': ['traseu-o-ora', 'in-apropiere', 'chisinau-intr-o-zi', 'unde-mananci'],
  'chisinau-intr-o-zi': ['traseu-jumatate-de-zi', 'in-apropiere', 'muzeul-national-de-istorie', 'muzeul-national-de-arta'],
  'obiective-gratuite': ['vizitare', 'catedrala-nasterea-domnului', 'piata-marii-adunari-nationale', 'parcul-catedralei'],
  'chisinau-pe-ploaie': ['muzeul-national-de-istorie', 'muzeul-national-de-arta', 'vizitare'],
  'unde-mananci': ['vizitare', 'traseu-jumatate-de-zi', 'chisinau-intr-o-zi'],
  'traseu-arhitectural': ['arhitectura', 'istorie', 'strada-eugen-doga', 'locatie-harta'],
};

// Human-readable label for a topic in a given locale (falls back to ro/slug).
export function topicLabel(slug: string, locale: Locale): string {
  const t = getTopic(slug);
  const c = t?.[locale] || t?.ro;
  return c?.h1 || slug;
}
