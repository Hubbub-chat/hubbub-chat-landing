import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { SectionHeader } from './SectionHeader.tsx'

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useLanguage()

  const faqItems = (t('faq.items') as any[]) || []

  return (
    <section id="faq" className="py-24 sm:py-32 lg:py-40 border-t border-line">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow={t('faq.badge')} title={t('faq.title')} subtitle={t('faq.subtitle')} />

        <div className="mt-14 sm:mt-16 border-t border-line">
          {Array.isArray(faqItems) &&
            faqItems.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className="border-b border-line">
                  <button
                    id={`faq-question-${idx}`}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full py-6 text-left flex items-center justify-between gap-6"
                  >
                    <span className="text-base sm:text-lg font-medium text-fg">{faq.q}</span>
                    <Plus
                      className={`w-5 h-5 shrink-0 text-faint transition-transform duration-300 ${isOpen ? 'rotate-45 text-fg' : ''}`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-base text-muted leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
