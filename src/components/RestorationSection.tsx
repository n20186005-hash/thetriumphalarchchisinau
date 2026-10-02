import { useTranslations } from 'next-intl';

export default function RestorationSection() {
  const t = useTranslations('restoration');

  return (
    <section id="restaurare" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-lg leading-relaxed mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('body')}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span
            className="px-3 py-1.5 rounded-full font-medium"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            {t('updated')}
          </span>
          <span
            className="px-3 py-1.5 rounded-full font-medium"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            {t('source')}
          </span>
        </div>
      </div>
    </section>
  );
}
