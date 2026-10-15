import React from 'react'
import { Check, ShieldCheck, FileText } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { useInView } from '../hooks/useInView.ts'
import { useClock, usePageVisible, usePrefersReducedMotion, typed } from '../hooks/useClock.ts'

const LOOP_MS = 13000
const END = 1e9

const AGENTS = ['Orchestrator', 'Researcher', 'Librarian', 'Tutor'] as const

type AgentState = 'idle' | 'active' | 'done'

/** Looping, self-playing mock of the desktop app (prompt, plan, guarded tools, report). */
export const HeroDemo: React.FC = () => {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const visible = usePageVisible()
  const reduced = usePrefersReducedMotion()
  const { elapsed: clock } = useClock({ running: inView && visible && !reduced, duration: LOOP_MS })
  const e = reduced ? END : clock

  const prompt = t('hero.mockup.userPrompt') as string
  const plan = t('hero.mockup.orchestratorPlan') as string
  const summary = t('hero.mockup.tutorSummary') as string

  const state = (start: number, end: number): AgentState => (e >= end ? 'done' : e >= start ? 'active' : 'idle')
  const agentState: Record<(typeof AGENTS)[number], AgentState> = {
    Orchestrator: state(2600, 3800),
    Researcher: state(3800, 6000),
    Librarian: state(3800, 6000),
    Tutor: state(6000, 10200)
  }

  const dot = (s: AgentState) =>
    s === 'active' ? (
      <span className="relative flex w-2 h-2">
        <span className="animate-beacon absolute inline-flex h-full w-full rounded-full bg-accent" />
        <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
      </span>
    ) : s === 'done' ? (
      <Check className="w-3.5 h-3.5 text-ok" />
    ) : (
      <span className="w-2 h-2 rounded-full bg-line-strong" />
    )

  const guardChip = (label: string, at: number) =>
    e >= at && (
      <span className="animate-fade-in inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-1 rounded-md bg-ok-soft text-ok">
        <ShieldCheck className="w-3.5 h-3.5" />
        {label}
      </span>
    )

  const bar = (start: number, end: number) => {
    const p = Math.max(0, Math.min(1, (e - start) / (end - start)))
    return (
      <div className="h-1 rounded-full bg-line overflow-hidden">
        <div className="h-full rounded-full bg-accent" style={{ width: `${p * 100}%` }} />
      </div>
    )
  }

  return (
    <div ref={ref} className="surface rounded-xl shadow-2xl shadow-black/5 dark:shadow-black/40 overflow-hidden text-left">
      {/* Window chrome */}
      <div className="flex items-center gap-3 px-4 h-11 border-b border-line bg-subtle">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-line-strong" />
          <span className="w-2.5 h-2.5 rounded-full bg-line-strong" />
          <span className="w-2.5 h-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="flex-1 text-center text-xs text-faint truncate">{t('hero.mockup.windowTitle')}</div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-faint">
          <ShieldCheck className="w-3.5 h-3.5 text-ok" />
          {t('hero.mockup.policyActive')}
        </div>
      </div>

      <div className="grid md:grid-cols-[200px_1fr] min-h-[420px] sm:min-h-[440px]">
        {/* Agent rail */}
        <aside className="hidden md:block border-r border-line bg-subtle/60 p-4" aria-label={t('hero.mockup.agentTeamTitle')}>
          <div className="text-[11px] font-semibold text-faint uppercase tracking-wider mb-3">
            {t('hero.mockup.agentTeamTitle')}
          </div>
          <ul className="space-y-1">
            {AGENTS.map((name) => (
              <li
                key={name}
                className={`flex items-center justify-between px-2.5 py-2 rounded-md text-sm transition-colors ${
                  agentState[name] === 'active' ? 'bg-accent-soft text-fg' : 'text-muted'
                }`}
              >
                <span>{name}</span>
                {dot(agentState[name])}
              </li>
            ))}
          </ul>
        </aside>

        {/* Conversation */}
        <div className="p-5 sm:p-7 space-y-5 text-sm">
          <div>
            <div className="text-[11px] text-faint mb-1.5">{t('hero.mockup.userRole')}</div>
            <p className={`text-fg leading-relaxed ${e > 300 && e < 2500 ? 'caret' : ''}`}>{typed(prompt, e, 300, 2300)}</p>
          </div>

          {e >= 2600 && (
            <div className="animate-slide-in flex gap-3">
              <span className="w-6 h-6 shrink-0 rounded-full bg-fg text-bg text-[11px] font-semibold flex items-center justify-center">O</span>
              <p className="text-muted leading-relaxed">{typed(plan, e, 2700, 3700)}</p>
            </div>
          )}

          {e >= 3800 && (
            <div className="animate-fade-in grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-line p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-fg">
                  Researcher
                  {dot(agentState.Researcher)}
                </div>
                {bar(3900, 5400)}
                <div className="min-h-[26px]">{guardChip(t('hero.mockup.urlApproved'), 5000)}</div>
              </div>
              <div className="rounded-lg border border-line p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-fg">
                  Librarian
                  {dot(agentState.Librarian)}
                </div>
                {bar(4000, 5700)}
                <div className="min-h-[26px]">{guardChip(t('hero.mockup.pathApproved'), 5400)}</div>
              </div>
            </div>
          )}

          {e >= 6000 && (
            <div className="animate-slide-in rounded-lg border border-line bg-subtle p-4 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-fg">
                  <FileText className="w-4 h-4 text-accent" />
                  {t('hero.mockup.tutorArtifact')}
                </div>
                {e >= 9400 && <span className="animate-fade-in text-xs text-accent">{t('hero.mockup.openInEditor')}</span>}
              </div>
              <p className="text-muted leading-relaxed">{typed(summary, e, 6300, 9300)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
