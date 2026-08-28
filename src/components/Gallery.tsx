'use client';

import { useTranslations, useMessages, useLocale } from 'next-intl';
import { useState, useCallback } from 'react';

const photoAltTemplates = {
  en: [
    'The Triumphal Arch - Main hero view in Chișinău, Republic of Moldova',
    'The Triumphal Arch - Facade view - Great National Assembly Square',
    'The Triumphal Arch - Bas-relief architectural detail',
    'The Triumphal Arch - Panoramic angle with Great National Assembly Square',
    'The Triumphal Arch - Neoclassical columns close-up',
    'The Triumphal Arch - Front view with surrounding square',
    'The Triumphal Arch - Winter scene in Chișinău',
    'The Triumphal Arch - View towards government buildings',
    'The Triumphal Arch - Night view with illumination',
    'The Triumphal Arch - Sculptural details on facade',
    'The Triumphal Arch - Visitors exploring the monument',
    'The Triumphal Arch - Official ceremony at Great National Assembly Square',
    'The Triumphal Arch - Architectural detail of capital',
  ],
  ro: [
    'Arcul de Triumf - Vedere principală în Chișinău, Republica Moldova',
    'Arcul de Triumf - Vedere fațadă - Piața Marii Adunări Naționale',
    'Arcul de Triumf - Detaliu basorelief arhitectural',
    'Arcul de Triumf - Unghi panoramic cu Piața Marii Adunări Naționale',
    'Arcul de Triumf - Prim-plan coloane neoclasice',
    'Arcul de Triumf - Vedere frontală cu piața înconjurătoare',
    'Arcul de Triumf - Scenă de iarnă în Chișinău',
    'Arcul de Triumf - Vedere spre clădirile guvernamentale',
    'Arcul de Triumf - Vedere de noapte cu iluminare',
    'Arcul de Triumf - Detalii sculpturale pe fațadă',
    'Arcul de Triumf - Vizitatori explorând monumentul',
    'Arcul de Triumf - Ceremonie oficială la Piața Marii Adunări Naționale',
    'Arcul de Triumf - Detaliu arhitectural al capitelului',
  ],
  zh: [
    '凯旋门 The Triumphal Arch - 摩尔多瓦共和国基希讷乌市主景',
    '凯旋门 - 正面景观 - 大国民议会广场',
    '凯旋门 - 浮雕建筑细节',
    '凯旋门 - 大国民议会广场全景角度',
    '凯旋门 - 新古典主义柱廊特写',
    '凯旋门 - 正面及周边广场',
    '凯旋门 - 基希讷乌冬季景色',
    '凯旋门 - 政府大楼方向景观',
    '凯旋门 - 灯光夜景',
    '凯旋门 - 立面雕塑细节',
    '凯旋门 - 游客参观纪念碑',
    '凯旋门 - 大国民议会广场官方典礼',
    '凯旋门 - 柱头建筑细节',
  ],
};

export default function Gallery() {
  const t = useTranslations('gallery');
  const messages = useMessages() as any;
  const locale = useLocale() as keyof typeof photoAltTemplates;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const captions = (messages?.gallery?.captions || []) as string[];

  const templates = photoAltTemplates[locale] || photoAltTemplates.en;
  const basePhotos = templates.map((alt, i) => ({
    src: `/gallery/the-triumphal-arch-${i + 1}.jpg`,
    alt,
  }));

  const galleryPhotos = basePhotos.map((photo, i) => ({
    ...photo,
    alt: captions[i] ? `${photo.alt.split(' - ')[0]} - ${captions[i]}` : photo.alt,
  }));

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  }, [galleryPhotos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
  }, [galleryPhotos.length]);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {(showAll ? galleryPhotos : galleryPhotos.slice(0, 8)).map((photo, i) => (
                <div
                  key={i}
                  className={`gallery-item relative group cursor-pointer ${i === 0 && !showAll ? 'col-span-2 row-span-2' : ''}`}
                  onClick={() => {
                    setCurrentIndex(i);
                    openLightbox();
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: i === 0 ? '400px' : '180px' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-end">
                    <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {showAll && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
                  aria-label="Previous photo"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
                  aria-label="Next photo"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            <div className="flex justify-center mt-6 gap-4 items-center">
              {!showAll && galleryPhotos.length > 8 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-sm hover:underline font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('showAll') || `View All ${galleryPhotos.length} Photos`}
                </button>
              )}
              {showAll && (
                <button
                  onClick={() => setShowAll(false)}
                  className="text-sm hover:underline font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('showLess') || 'Show Less'}
                </button>
              )}
              <a
                href="https://maps.app.goo.gl/5fERqY3q8DvdoLFL6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('viewAll')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={galleryPhotos[currentIndex].src}
            alt={galleryPhotos[currentIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {galleryPhotos.length}
          </div>
        </div>
      )}
    </>
  );
}
