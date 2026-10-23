import { useLocale } from 'next-intl';
import type { Locale, Topic, TopicContent } from '@/data/topics/types';
import { RELATED, topicLabel, getTopic } from '@/data/topics';

const BASE_URL = 'https://www.thetriumphalarchchisinau.com';
const ATTRACTION_ID = `${BASE_URL}/#attraction`;

function localeUrl(locale: Locale): string {
  return `${BASE_URL}/${locale}`;
}

export default function TopicPage({
  locale,
  topic,
  content,
}: {
  locale: Locale;
  topic: Topic;
  content: TopicContent;
}) {
  const l = useLocale() as Locale;
  const selfUrl = `${localeUrl(locale)}/${topic.slug}`;
  const homeUrl = localeUrl(locale);
  const related = RELATED[topic.slug] || [];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Chișinău', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: content.h1, item: selfUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${selfUrl}#webpage`,
    url: selfUrl,
    name: content.title,
    description: content.description,
    inLanguage: locale === 'zh' ? 'zh-CN' : locale,
    about: { '@id': ATTRACTION_ID },
    isPartOf: { '@type': 'WebSite', name: 'The Triumphal Arch', url: homeUrl },
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <nav aria-label="breadcrumb" className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
        <a href={homeUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>
          {l === 'zh' ? '首页' : l === 'ro' ? 'Acasă' : 'Home'}
        </a>
        <span className="mx-2">/</span>
        <span>{content.h1}</span>
      </nav>

      <h1
        className="font-display text-3xl sm:text-4xl font-semibold mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        {content.h1}
      </h1>

      <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}
        dangerouslySetInnerHTML={{ __html: content.intro }}
      />

      <div className="space-y-10">
        {content.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2
              className="font-display text-2xl font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {section.title}
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </section>
        ))}
      </div>

      {content.updated && (
        <p className="text-xs mt-8" style={{ color: 'var(--text-muted)' }}>
          {content.updated}
          {content.source ? ` · ${content.source}` : ''}
        </p>
      )}

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {l === 'zh' ? '常见问题' : l === 'ro' ? 'Întrebări frecvente' : 'Frequently asked questions'}
        </h2>
        <div className="space-y-3">
          {content.faq.map((item, i) => (
            <details
              key={i}
              className="rounded-xl p-4"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <summary className="cursor-pointer font-medium" style={{ color: 'var(--text-primary)' }}>
                {item.question}
              </summary>
              <p className="mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {l === 'zh' ? '相关页面' : l === 'ro' ? 'Pagini conexe' : 'Related pages'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {related
              .map((slug) => getTopic(slug))
              .filter(Boolean)
              .map((t) => (
                <a
                  key={t!.slug}
                  href={`/${locale}/${t!.slug}`}
                  className="px-4 py-2 rounded-full text-sm transition-colors"
                  style={{
                    background: 'var(--tag-bg)',
                    color: 'var(--tag-text)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  {topicLabel(t!.slug, locale)}
                </a>
              ))}
          </div>
        </section>
      )}
    </article>
  );
}
