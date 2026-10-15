import React, { useState } from 'react'
import { Check, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { useInView } from '../hooks/useInView.ts'
import { useClock, usePageVisible, usePrefersReducedMotion } from '../hooks/useClock.ts'
import { SectionHeader } from './SectionHeader.tsx'

interface FeatureRowProps {
  eyebrow: string
  title: string
  desc: string
  points?: { title: string; desc: string }[]
  reverse?: boolean
  children: React.ReactNode
}

/** Devin-style row: copy on one side, a live visual on the other. */
const FeatureRow: React.FC<FeatureRowProps> = ({ eyebrow, title, desc, points, reverse, children }) => (
  <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
    <div className={reverse ? 'lg:order-2' : ''}>
      <div className="eyebrow mb-4">{eyebrow}</div>
      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg leading-tight">{title}</h3>
      <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">{desc}</p>
      {points && (
        <ul className="mt-8 space-y-5">
          {points.map((p) => (
            <li key={p.title} className="flex gap-3">
              <Check className="w-4 h-4 mt-1 shrink-0 text-accent" />
              <div>
                <div className="text-sm font-semibold text-fg">{p.title}</div>
                <div className="text-sm text-muted leading-relaxed">{p.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className={reverse ? 'lg:order-1' : ''}>{children}</div>
  </div>
)

const REQUESTS = [
  { label: 'read ./notes/benchmarks.csv', ok: true },
  { label: 'fetch https://arxiv.org/abs/2405.21060', ok: true },
  { label: 'read ../../.ssh/id_rsa', ok: false },
  { label: 'fetch http://192.168.0.1/admin', ok: false }
]

/** Requests arrive one by one and are allowed or blocked by the policy engine. */
const PolicyVisual: React.FC = () => {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const visible = usePageVisible()
  const reduced = usePrefersReducedMotion()
  const [shown, setShown] = useState(0)
  useClock({
    running: inView && visible && !reduced,
    duration: 1300,
    onDone: () => setShown((n) => (n >= REQUESTS.length + 2 ? 0 : n + 1))
  })
  const count = reduced ? REQUESTS.length : shown

  return (
    <div ref={ref} className="surface rounded-xl overflow-hidden">
      <div className="px-5 h-11 flex items-center justify-between border-b border-line bg-subtle text-xs text-faint font-mono">
        <span>policy-engine</span>
        <span>{t('hero.mockup.policyActive')}</span>
      </div>
      <ul className="p-5 space-y-3 min-h-[260px]">
        {REQUESTS.map((r, i) =>
          i < count ? (
            <li
              key={r.label}
              className={`animate-slide-in flex items-center justify-between gap-3 rounded-lg border px-4 py-3 ${
                r.ok ? 'border-line' : 'border-bad/40 bg-bad-soft'
              }`}
            >
              <code className="text-xs font-mono text-fg truncate">{r.label}</code>
              <span className={`shrink-0 inline-flex items-center gap-1 text-[11px] font-mono font-semibold ${r.ok ? 'text-ok' : 'text-bad'}`}>
                {r.ok ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                {r.ok ? 'ALLOW' : 'DENY'}
              </span>
            </li>
          ) : (
            <li key={r.label} className="rounded-lg border border-dashed border-line h-[46px]" aria-hidden="true" />
          )
        )}
      </ul>
    </div>
  )
}

/** Memory bars grow when scrolled into view. */
const MemoryVisual: React.FC = () => {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  const reduced = usePrefersReducedMotion()
  const on = inView || reduced

  const bar = (label: string, value: string, pct: number, color: string, delay: number) => (
    <div>
      <div className="flex items-center justify-between text-xs font-mono mb-2">
        <span className="text-muted">{label}</span>
        <span className="text-fg font-semibold">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-line overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-[width] duration-[1400ms] ease-out`}
          style={{ width: on ? `${pct}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )

  return (
    <div ref={ref} className="surface rounded-xl p-6 sm:p-8 space-y-7">
      {bar(t('bento.card2.hubbubLabel'), '~28 MB', 4, 'bg-accent', 0)}
      {bar(t('bento.card2.electronLabel'), '450 - 800 MB', 80, 'bg-faint', 200)}
    </div>
  )
}

const REPORT = [
  { cls: 'text-fg font-semibold text-base', text: '# Mamba-2 vs Attention' },
  { cls: 'text-muted', text: 'State-space duality trains 8x faster via block matrix multiplication.' },
  { cls: 'text-fg font-semibold', text: '## Latency @ 32k tokens' },
  { cls: 'text-muted font-mono text-xs', text: '| Model         | Latency |\n| Mamba-2       | 42 ms   |\n| FlashAttn-2   | 190 ms  |' }
]

/** A Markdown report typing itself out. */
const ReportVisual: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const visible = usePageVisible()
  const reduced = usePrefersReducedMotion()
  const total = REPORT.reduce((n, r) => n + r.text.length, 0)
  const { elapsed } = useClock({ running: inView && visible && !reduced, duration: 9000 })
  const chars = reduced ? total : Math.min(total, Math.floor((elapsed / 6500) * total))

  let left = chars
  return (
    <div ref={ref} className="surface rounded-xl overflow-hidden">
      <div className="px-5 h-11 flex items-center border-b border-line bg-subtle text-xs text-faint font-mono">
        Mamba2_vs_Attention.md
      </div>
      <div className="p-6 sm:p-8 space-y-4 text-sm min-h-[260px]">
        {REPORT.map((r, i) => {
          const part = r.text.slice(0, Math.max(0, left))
          left -= r.text.length
          return part ? (
            <p key={i} className={`${r.cls} whitespace-pre-wrap leading-relaxed`}>
              {part}
            </p>
          ) : null
        })}
      </div>
    </div>
  )
}

export const BentoFeatures: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-24 sm:py-32 lg:py-40 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow={t('bento.badge')} title={t('bento.title')} subtitle={t('bento.subtitle')} />

        <div className="mt-20 sm:mt-28 space-y-24 sm:space-y-36">
          <FeatureRow
            eyebrow={t('bento.card1.badge')}
            title={t('bento.card1.title')}
            desc={t('bento.card1.desc')}
            points={[
              { title: t('bento.card1.sub1Title'), desc: t('bento.card1.sub1Desc') },
              { title: t('bento.card1.sub2Title'), desc: t('bento.card1.sub2Desc') }
            ]}
          >
            <PolicyVisual />
          </FeatureRow>

          <FeatureRow reverse eyebrow={t('bento.card2.badge')} title={t('bento.card2.title')} desc={t('bento.card2.desc')}>
            <MemoryVisual />
          </FeatureRow>

          <FeatureRow eyebrow={t('bento.card3.badge')} title={t('bento.card3.title')} desc={t('bento.card3.desc')}>
            <ReportVisual />
          </FeatureRow>
        </div>

        <div className="mt-24 sm:mt-36 grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {(['card4', 'card5', 'card6'] as const).map((k) => (
            <div key={k} className="bg-bg p-7 sm:p-8">
              <div className="eyebrow mb-3">{t(`bento.${k}.badge`)}</div>
              <h3 className="text-lg font-semibold text-fg leading-snug">{t(`bento.${k}.title`)}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{t(`bento.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
