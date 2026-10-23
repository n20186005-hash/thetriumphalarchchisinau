import type { Locale } from '@/i18n/routing';
import { TOPICS, topicLocales } from '@/data/topics';

export default function TopicLinks({ locale }: { locale: Locale }) {
  const topics = TOPICS.filter((t) => topicLocales(t).includes(locale));
  if (topics.length === 0) return null;

  const heading =
    locale === 'zh' ? '延伸指南' : locale === 'ro' ? 'Ghiduri utile' : 'Visitor guides';
  const sub =
    locale === 'zh'
      ? '关于凯旋门与基希讷乌市中心文化的详细指南'
      : locale === 'ro'
        ? 'Ghiduri detaliate despre Arcul de Triumf și centrul Chișinăului'
        : 'Detailed guides about the Triumphal Arch and central Chișinău';

  return (
    <section id="guides" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <h2
        className="font-display text-3xl font-semibold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {heading}
      </h2>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
        {sub}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => {
          const c = (t[locale] || t.ro)!;
          return (
            <a
              key={t.slug}
              href={`/${locale}/${t.slug}`}
              className="block rounded-2xl p-5 transition-transform hover:-translate-y-1"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3
                className="font-display text-lg font-semibold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {c.h1}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {c.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
