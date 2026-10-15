import React, { useEffect, useRef, useState } from 'react'
import { Check, Pause, Play, ShieldAlert, ShieldCheck, TerminalSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { useInView } from '../hooks/useInView.ts'
import { useClock, usePageVisible, usePrefersReducedMotion, typed } from '../hooks/useClock.ts'
import { SectionHeader } from './SectionHeader.tsx'

const STEP_MS = 6200
const RESUME_AFTER_MS = 10000
const END = 1e9

const AGENT_KEYS = ['orchestrator', 'researcher', 'librarian', 'tutor'] as const

export const AgentOrchestrationDemo: React.FC = () => {
  const { lang, t } = useLanguage()

  const scenarios = [
    {
      id: 'academic',
      title: lang === 'vi' ? 'Tổng Hợp Nghiên Cứu ArXiv' : 'Academic Literature & Preprint Synthesis',
      description:
        lang === 'vi'
          ? 'Quy trình nghiên cứu tự chủ kết hợp bài báo trực tuyến và ghi chú riêng tư.'
          : 'Autonomous research pipeline combining online scholarly papers with private workspace notes.',
      userGoal:
        lang === 'vi'
          ? 'Nghiên cứu kiến trúc lai State-Space Mamba-2 so với Attention trên ngữ cảnh dài.'
          : 'Investigate Transformer state-space hybrid models (Mamba-2) vs. Attention mechanisms for long-context recall.',
      steps: [
        {
          stepNumber: 1,
          agent: 'Orchestrator',
          action:
            lang === 'vi'
              ? 'Lập đồ thị thực thi DAG đa tầng, ấn định ngân sách tối đa 6 bước.'
              : 'Formulates multi-stage execution DAG and checks token budget (Max Steps: 6).',
          policyGate: 'PolicyEngine::AuthorizeStepPlan (Approved)',
          logSnippet: '[Orchestrator] Spawned sub-task #1 -> Researcher(arXiv), sub-task #2 -> Librarian(vault)',
          resultSummary:
            lang === 'vi'
              ? 'Mục tiêu được chia nhỏ thành 2 tác vụ truy xuất song song và 1 bước tổng hợp.'
              : 'Goal decomposed into 2 parallel retrieval tasks and 1 final synthesis step.'
        },
        {
          stepNumber: 2,
          agent: 'Researcher',
          action:
            lang === 'vi'
              ? 'Truy vấn API arXiv và trích xuất cấu trúc thuật toán Mamba-2.'
              : 'Queries arXiv API and parses Mamba-2 architecture whitepaper.',
          policyGate: 'UrlGuard::EnforceDomainAllowlist("arxiv.org") -> OK',
          logSnippet: '[Researcher] Fetched 2405.21060v1.pdf. Extracted State Space Duality matrix formulas.',
          resultSummary:
            lang === 'vi'
              ? 'Trích xuất điểm khác biệt: Tốc độ huấn luyện nhanh gấp 8 lần nhờ nhân khối ma trận.'
              : 'Retrieved exact algorithmic differences: 8x faster training via block matrix multiplication.'
        },
        {
          stepNumber: 3,
          agent: 'Librarian',
          action:
            lang === 'vi'
              ? 'Quét thư mục máy tính để lấy kết quả đo lường độ trễ trên ngữ cảnh 32k tokens.'
              : 'Scans local research vault for internal benchmark numbers on 32k context.',
          policyGate: 'PathGuard::SandboxCheck("/vault/benchmarks_2026.csv") -> OK',
          logSnippet: '[Librarian] SQLite FTS5 query returned 4 local benchmark reports in 1.8ms.',
          resultSummary:
            lang === 'vi'
              ? 'Độ trễ phần cứng: 42ms so với 190ms của FlashAttention-2 ở 32k tokens.'
              : 'Hardware latency profile: 42ms vs 190ms for FlashAttention-2 at 32k tokens.'
        },
        {
          stepNumber: 4,
          agent: 'Tutor',
          action:
            lang === 'vi'
              ? 'Tạo tài liệu Markdown Milkdown hoàn chỉnh kèm công thức toán và bảng đối chiếu.'
              : 'Generates structured Milkdown WYSIWYG Markdown document with citations & tables.',
          policyGate: 'Workspace::WriteArtifact("Mamba2_vs_Attention.md") -> OK',
          logSnippet: '[Tutor] Synthesized report with 5 references, LaTeX math, and performance comparison table.',
          resultSummary:
            lang === 'vi'
              ? 'Tài liệu nghiên cứu đã được lưu vào thư mục làm việc với trích dẫn chuẩn xác.'
              : 'Living research document saved to local workspace with verified citations.'
        }
      ]
    },
    {
      id: 'security-audit',
      title: lang === 'vi' ? 'Kiểm Soát An Ninh & Chặn Rò Rỉ' : 'Zero-Leak Security & Threat Modeling',
      description:
        lang === 'vi'
          ? 'Kiểm duyệt nghiêm ngặt các yêu cầu gọi công cụ của Agent bằng năng quyền Rust.'
          : 'Validating untrusted agent tool requests against strict capability boundaries.',
      userGoal:
        lang === 'vi'
          ? 'Mô phỏng prompt độc hại cố tình vượt sandbox để đánh cắp SSH key của máy.'
          : 'Simulate an untrusted prompt trying to escape sandbox to read private SSH keys.',
      steps: [
        {
          stepNumber: 1,
          agent: 'Orchestrator',
          action:
            lang === 'vi'
              ? 'Tiếp nhận prompt chứa chuỗi tấn công Path Traversal lẩn tránh.'
              : 'Receives prompt containing obfuscated path traversal injection.',
          policyGate: 'PolicyEngine::SanitizePrompt (Flagged)',
          logSnippet: '[Orchestrator] Dispatching file read request to Librarian with bounded capability context.',
          resultSummary:
            lang === 'vi'
              ? 'Yêu cầu được cô lập vào không gian thực thi có kiểm soát an ninh.'
              : 'Request isolated into sandboxed execution context.'
        },
        {
          stepNumber: 2,
          agent: 'Librarian',
          action:
            lang === 'vi'
              ? 'Thử nghiệm phân giải đường dẫn: "../../.ssh/id_rsa".'
              : 'Attempts to resolve path: "../../.ssh/id_rsa" on behalf of prompt.',
          policyGate: 'PathGuard::DenyTraversal(Target outside root) -> 403 FORBIDDEN',
          logSnippet: '[Rust Security] VIOLATION BLOCKED: PathGuard caught unpermitted filesystem escape.',
          resultSummary:
            lang === 'vi'
              ? 'Chặn đứng lập tức ở tầng mã Rust bản địa. Không có dữ liệu nào bị đọc.'
              : 'Hard block enforced in native Rust. No file access or leakage occurred.'
        },
        {
          stepNumber: 3,
          agent: 'Orchestrator',
          action:
            lang === 'vi'
              ? 'Ghi nhận phản hồi chặn từ Policy Engine và ghi vết vào SQLite.'
              : 'Receives security rejection from Policy Engine and logs audit trail to SQLite.',
          policyGate: 'AuditLog::RecordIncident(Severity::High, PathTraversalAttempt)',
          logSnippet: '[AuditLog] Incident #899 saved with timestamp, model ID, and rejected path signature.',
          resultSummary:
            lang === 'vi'
              ? 'Toàn bộ vết sự cố được lưu trữ bảo mật trên máy phục vụ kiểm toán.'
              : 'Complete cryptographic audit trail preserved locally.'
        },
        {
          stepNumber: 4,
          agent: 'Tutor',
          action:
            lang === 'vi'
              ? 'Giải thích rõ ràng về vi phạm an ninh và thông báo cho người dùng.'
              : 'Explains the security violation to user with recommended remediation.',
          policyGate: 'PolicyEngine::FormatSafeUserFeedback -> OK',
          logSnippet: '[Tutor] Alert displayed in UI: "Access denied by Rust PathGuard. Action aborted safely."',
          resultSummary:
            lang === 'vi'
              ? 'Người dùng nhận cảnh báo rõ ràng mà không ảnh hưởng tới hệ điều hành.'
              : 'User alerted transparently with zero risk to host operating system.'
        }
      ]
    }
  ]

  const [pos, setPos] = useState({ s: 0, i: 0 })
  const [playing, setPlaying] = useState(true)
  const [hold, setHold] = useState(false)
  const [hovered, setHovered] = useState(false)
  const holdTimer = useRef<number | undefined>(undefined)

  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const visible = usePageVisible()
  const reduced = usePrefersReducedMotion()

  const scenario = scenarios[pos.s]
  const step = scenario.steps[pos.i]
  const blocked = step.policyGate.includes('Deny')

  const advance = () =>
    setPos((p) => {
      const last = p.i >= scenarios[p.s].steps.length - 1
      if (!last) return { s: p.s, i: p.i + 1 }
      return { s: (p.s + 1) % scenarios.length, i: 0 }
    })

  const running = playing && !hold && !hovered && inView && visible && !reduced
  const { elapsed: clock, reset } = useClock({ running, duration: STEP_MS, onDone: advance })
  const e = reduced ? END : clock

  useEffect(() => () => window.clearTimeout(holdTimer.current), [])

  // Manual navigation pauses autoplay briefly, then resumes.
  const select = (s: number, i: number) => {
    setPos({ s, i })
    reset()
    setHold(true)
    window.clearTimeout(holdTimer.current)
    holdTimer.current = window.setTimeout(() => setHold(false), RESUME_AFTER_MS)
  }

  const gateState = e < 1500 ? 'wait' : e < 2400 ? 'check' : blocked ? 'blocked' : 'ok'
  const progress = reduced ? 1 : Math.min(1, e / STEP_MS)
  const activeAgent = step.agent.toLowerCase()

  return (
    <section id="agents" className="py-24 sm:py-32 lg:py-40 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow={t('agents.badge')} title={t('agents.title')} subtitle={t('agents.subtitle')} />

        <div
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setHovered(true)}
          onBlurCapture={() => setHovered(false)}
          className="mt-16 sm:mt-20 surface rounded-xl overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/40"
        >
          {/* Toolbar: scenarios + play/pause */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-line bg-subtle">
            <div className="flex items-center gap-1" role="group" aria-label="Demo scenarios">
              {scenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => select(idx, 0)}
                  aria-pressed={pos.s === idx}
                  className={`px-3 h-8 rounded-md text-[13px] font-medium transition-colors ${
                    pos.s === idx ? 'bg-surface text-fg border border-line' : 'text-muted hover:text-fg border border-transparent'
                  }`}
                >
                  {sc.title}
                </button>
              ))}
            </div>
            {!reduced && (
              <button
                onClick={() => setPlaying((p) => !p)}
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md text-[13px] text-muted hover:text-fg hover:bg-surface-hover transition-colors"
                aria-label={playing ? 'Pause demo' : 'Play demo'}
              >
                {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{playing ? (lang === 'vi' ? 'Tạm dừng' : 'Pause') : lang === 'vi' ? 'Phát' : 'Play'}</span>
              </button>
            )}
          </div>

          {/* Goal */}
          <div className="px-4 sm:px-6 py-5 border-b border-line">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-faint mb-1.5">
              {t('agents.simulation.simulatedGoal')}
            </div>
            <p key={pos.s} className="animate-fade-in text-base sm:text-lg text-fg leading-snug">
              {scenario.userGoal}
            </p>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr]">
            {/* Left: agents + steps */}
            <div className="border-b lg:border-b-0 lg:border-r border-line p-4 sm:p-6 space-y-6 bg-subtle/50">
              <ul className="space-y-1" aria-label="Agents">
                {AGENT_KEYS.map((k) => (
                  <li
                    key={k}
                    className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                      activeAgent === k ? 'bg-accent-soft' : ''
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-medium ${activeAgent === k ? 'text-fg' : 'text-muted'}`}>
                        {t(`agents.${k}.name`)}
                      </div>
                      <div className="text-[11px] text-faint">{t(`agents.${k}.role`)}</div>
                    </div>
                    {activeAgent === k && (
                      <span className="relative flex w-2 h-2">
                        <span className="animate-beacon absolute inline-flex h-full w-full rounded-full bg-accent" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <ol className="relative space-y-1" role="tablist" aria-label="Execution steps">
                {scenario.steps.map((st, idx) => {
                  const current = idx === pos.i
                  const past = idx < pos.i
                  return (
                    <li key={st.stepNumber}>
                      <button
                        role="tab"
                        aria-selected={current}
                        onClick={() => select(pos.s, idx)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                          current ? 'bg-surface border border-line' : 'border border-transparent hover:bg-surface-hover'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[10px] font-semibold ${
                            past ? 'bg-ok-soft text-ok' : current ? 'bg-accent text-bg' : 'bg-line text-faint'
                          }`}
                        >
                          {past ? <Check className="w-3 h-3" /> : st.stepNumber}
                        </span>
                        <span className={`text-sm truncate ${current ? 'text-fg font-medium' : 'text-muted'}`}>{st.agent}</span>
                      </button>
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* Right: live step */}
            <div key={`${pos.s}-${pos.i}`} className="p-5 sm:p-8 space-y-6 min-h-[360px]">
              <div>
                <div className="text-xs text-faint font-mono mb-2">
                  {t('agents.simulation.step')} {step.stepNumber} {t('agents.simulation.of')} {scenario.steps.length} · {step.agent}
                </div>
                <p className={`text-base sm:text-lg text-fg leading-relaxed ${e < 1500 ? 'caret' : ''}`}>
                  {typed(step.action, e, 100, 1400)}
                </p>
              </div>

              {/* Policy gate */}
              <div
                className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 transition-colors ${
                  gateState === 'blocked' ? 'border-bad/40 bg-bad-soft animate-shake' : gateState === 'ok' ? 'border-ok/30 bg-ok-soft' : 'border-line'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {gateState === 'blocked' ? (
                    <ShieldAlert className="w-4 h-4 shrink-0 text-bad" />
                  ) : (
                    <ShieldCheck className={`w-4 h-4 shrink-0 ${gateState === 'ok' ? 'text-ok' : 'text-faint'}`} />
                  )}
                  <code className="text-xs font-mono text-fg truncate">
                    {gateState === 'wait' ? '' : step.policyGate}
                  </code>
                </div>
                <span
                  className={`shrink-0 text-[11px] font-mono font-semibold ${
                    gateState === 'blocked' ? 'text-bad' : gateState === 'ok' ? 'text-ok' : 'text-faint'
                  }`}
                >
                  {gateState === 'wait'
                    ? ''
                    : gateState === 'check'
                      ? lang === 'vi'
                        ? 'ĐANG KIỂM TRA…'
                        : 'CHECKING…'
                      : gateState === 'blocked'
                        ? t('agents.simulation.gateBlocked')
                        : t('agents.simulation.verifiedSafe')}
                </span>
              </div>

              {/* Terminal */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-faint mb-2">
                  <TerminalSquare className="w-3.5 h-3.5" />
                  {t('agents.simulation.runtimeTrace')}
                </div>
                <div className="rounded-lg bg-code text-code-fg font-mono text-xs leading-relaxed p-4 min-h-[64px] overflow-x-auto">
                  <span className="text-faint select-none">$ </span>
                  <span className={e > 2400 && e < 4400 ? 'caret' : ''}>{typed(step.logSnippet, e, 2400, 4400)}</span>
                </div>
              </div>

              {/* Result */}
              <div className="min-h-[48px]">
                {e >= 4500 && (
                  <div className="animate-slide-in flex gap-3">
                    <Check className={`w-4 h-4 mt-1 shrink-0 ${blocked ? 'text-bad' : 'text-ok'}`} />
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-faint mb-1">
                        {t('agents.simulation.resolution')}
                      </div>
                      <p className="text-sm sm:text-base text-muted leading-relaxed">{step.resultSummary}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="h-0.5 bg-line" aria-hidden="true">
            <div className="h-full bg-accent" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  )
}
