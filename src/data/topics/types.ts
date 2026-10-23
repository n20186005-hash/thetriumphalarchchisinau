export type TopicLocale = 'ro' | 'en' | 'zh';

export interface TopicSection {
  id: string;
  title: string;
  content: string; // may contain minimal inline HTML (<strong>)
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicContent {
  title: string; // meta title
  description: string; // meta description
  h1: string;
  intro: string; // intro paragraph (HTML allowed)
  sections: TopicSection[];
  faq: TopicFaq[];
  updated?: string; // verification date note
}

export interface Topic {
  slug: string;
  ro?: TopicContent;
  en?: TopicContent;
  zh?: TopicContent;
}

// Locales that actually have content for a topic (used for hreflang + static params).
export function availableLocales(topic: Topic): TopicLocale[] {
  const out: TopicLocale[] = [];
  if (topic.ro) out.push('ro');
  if (topic.en) out.push('en');
  if (topic.zh) out.push('zh');
  return out;
}
