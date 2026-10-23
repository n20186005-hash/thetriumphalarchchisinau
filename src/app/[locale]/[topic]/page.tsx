import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { TOPICS, getTopic, topicLocales } from '@/data/topics';
import type { TopicContent } from '@/data/topics/types';
import TopicPage from '@/components/TopicPage';

const BASE_URL = 'https://www.thetriumphalarchchisinau.com';

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; topic: string }[] = [];
  for (const topic of TOPICS) {
    for (const loc of topicLocales(topic)) {
      params.push({ locale: loc, topic: topic.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic: slug } = await params;
  const topic = getTopic(slug);
  const l = (['zh', 'ro', 'en'].includes(locale) ? locale : 'ro') as Locale;
  if (!topic || !topic[l]) return {};
  const content = topic[l] as TopicContent;
  const selfUrl = `${BASE_URL}/${l}/${slug}`;

  const languages: Record<string, string> = {};
  for (const loc of topicLocales(topic)) {
    const key = loc === 'zh' ? 'zh-CN' : loc === 'ro' ? 'ro-MD' : 'en';
    languages[key] = `${BASE_URL}/${loc}/${slug}`;
  }
  languages['x-default'] = `${BASE_URL}/ro/${slug}`;

  const ogLocale = l === 'zh' ? 'zh_CN' : l === 'ro' ? 'ro_MD' : 'en_US';

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: selfUrl, languages },
    openGraph: {
      title: content.title,
      description: content.description,
      url: selfUrl,
      siteName: 'The Triumphal Arch',
      locale: ogLocale,
      type: 'article',
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic: slug } = await params;
  const l = (['zh', 'ro', 'en'].includes(locale) ? locale : 'ro') as Locale;
  const topic = getTopic(slug);
  if (!topic || !topic[l]) notFound();
  setRequestLocale(l);
  const content = topic[l] as TopicContent;

  return (
    <>
      <TopicPage locale={l} topic={topic} content={content} />
    </>
  );
}
