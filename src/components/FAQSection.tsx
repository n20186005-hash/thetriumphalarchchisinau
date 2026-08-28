'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState } from 'react';

type FAQItem = { question: string; answer: string };

export default function FAQSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const faqItems: FAQItem[] = messages?.faq?.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqItems.length === 0) return null;

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        {messages?.faq?.subtitle && (
          <p className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            {t('subtitle')}
          </p>
        )}
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden border transition-colors"
                style={{
                  background: 'var(--bg-secondary)',
                  borderColor: isOpen ? 'var(--accent)' : 'var(--border-color)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <h3
                    className="font-semibold text-base sm:text-lg flex-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full mr-3 text-sm font-bold"
                      style={{
                        background: isOpen ? 'var(--accent)' : 'var(--bg-tertiary)',
                        color: isOpen ? 'white' : 'var(--text-muted)',
                      }}
                    >
                      {i + 1}
                    </span>
                    {item.question}
                  </h3>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform"
                    style={{
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 ml-10 text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
