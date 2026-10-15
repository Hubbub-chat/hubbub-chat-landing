import React from 'react'
import { Check, Minus, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { SectionHeader } from './SectionHeader.tsx'

export const ComparisonTable: React.FC = () => {
  const { t } = useLanguage()

  const rows = (t('compare.rows') as any[]) || []

  const cell = (icon: React.ReactNode, text: string, strong = false) => (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <span className={`leading-snug ${strong ? 'text-fg font-medium' : 'text-muted'}`}>{text}</span>
    </div>
  )

  return (
    <section id="compare" className="py-24 sm:py-32 lg:py-40 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow={t('compare.badge')} title={t('compare.title')} subtitle={t('compare.subtitle')} />

        <div className="mt-16 sm:mt-20 overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-line-strong">
                <th scope="col" className="py-4 pr-6 font-medium text-faint w-1/4">{t('compare.colFeature')}</th>
                <th scope="col" className="py-4 pr-6 font-semibold text-fg w-[28%]">
                  <span className="border-b-2 border-accent pb-1">{t('compare.colHubbub')}</span>
                </th>
                <th scope="col" className="py-4 pr-6 font-medium text-faint">{t('compare.colWeb')}</th>
                <th scope="col" className="py-4 font-medium text-faint">{t('compare.colElectron')}</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(rows) &&
                rows.map((row, i) => (
                  <tr key={i} className="border-b border-line align-top">
                    <th scope="row" className="py-6 pr-6 text-left font-medium text-fg">{row.feature}</th>
                    <td className="py-6 pr-6">{cell(<Check className="w-4 h-4 text-ok" />, row.hubbub, true)}</td>
                    <td className="py-6 pr-6">{cell(<X className="w-4 h-4 text-faint" />, row.webChat)}</td>
                    <td className="py-6">{cell(<Minus className="w-4 h-4 text-faint" />, row.electron)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
