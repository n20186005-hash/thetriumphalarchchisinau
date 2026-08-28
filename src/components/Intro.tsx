import { useTranslations, useMessages } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const tOff = useTranslations('officialManagement');
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];
  const breadcrumb: string[] = messages?.intro?.breadcrumb || [];
  const nearbyItems: Array<{ name: string; desc: string }> = messages?.intro?.nearbyLandmarks?.items || [];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* 地理面包屑层级 */}
        {breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md border border-dashed"
                    style={{
                      color: 'var(--text-muted)',
                      borderColor: 'var(--border-color)',
                      background: i === 0 ? 'var(--bg-tertiary)' : 'transparent',
                    }}
                  >
                    {crumb}
                  </span>
                  {i < breadcrumb.length - 1 && (
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>→</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
          dangerouslySetInnerHTML={{ __html: t('description') }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 周边语义集群描述 */}
        {nearbyItems.length > 0 && (
          <div className="mt-12">
            <h2
              className="font-display text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('nearbyLandmarks.title')}
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
              dangerouslySetInnerHTML={{ __html: t('nearbyLandmarks.description') }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {nearbyItems.map((landmark, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-dashed transition-all hover:shadow-md"
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                    <h4 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                      {landmark.name}
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed ml-5" style={{ color: 'var(--text-secondary)' }}>
                    {landmark.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>
      </div>
    </section>
  );
}
