import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { useInView } from '../hooks/useInView.ts'
import { useClock, usePageVisible, usePrefersReducedMotion } from '../hooks/useClock.ts'
import { SectionHeader } from './SectionHeader.tsx'

type LayerId = 'ui' | 'core' | 'policy' | 'tools' | 'storage'

const ORDER: LayerId[] = ['ui', 'core', 'policy', 'tools', 'storage']
const STEP_MS = 4200
const RESUME_AFTER_MS = 10000

const POLICY_CODE = `// Rust Policy Engine checks capability token before dispatching tool
pub async fn check_capability(
    &self,
    ctx: &ExecutionContext,
    action: &ToolAction,
) -> Result<AuthorizedToken, SecurityViolation> {
    if !self.granted_capabilities.contains(&action.required_capability()) {
        return Err(SecurityViolation::UnauthorizedAction(action.id()));
    }
    self.approval_manager.verify_user_confirmation(action).await
}`

const TOOLS_CODE = `// PathGuard canonicalization prevents directory traversal escapes
let canonical = fs::canonicalize(&target_path)?;
if !canonical.starts_with(&workspace_root) {
    return Err(PathGuardError::DirectoryTraversalBlocked(target_path));
}`

export const SecurityArchitecture: React.FC = () => {
  const [active, setActive] = useState<LayerId>('policy')
  const [hold, setHold] = useState(false)
  const [hovered, setHovered] = useState(false)
  const holdTimer = useRef<number | undefined>(undefined)
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const visible = usePageVisible()
  const reduced = usePrefersReducedMotion()

  const { elapsed, reset } = useClock({
    running: inView && visible && !reduced && !hold && !hovered,
    duration: STEP_MS,
    onDone: () => setActive((cur) => ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length])
  })

  useEffect(() => () => window.clearTimeout(holdTimer.current), [])

  const select = (id: LayerId) => {
    setActive(id)
    reset()
    setHold(true)
    window.clearTimeout(holdTimer.current)
    holdTimer.current = window.setTimeout(() => setHold(false), RESUME_AFTER_MS)
  }

  const vi = lang === 'vi'
  const detail: Record<LayerId, { file: string; tag: string; text: string; code?: string }> = {
    ui: {
      file: 'apps/desktop',
      tag: 'React 19 + Tauri 2',
      text: vi
        ? 'Giao diện React tối giản kết nối với backend Rust qua Tauri IPC có kiểm tra kiểu dữ liệu. Không có kết nối mạng ngầm nào ra bên ngoài.'
        : 'A lean React interface that talks to the Rust backend only over strictly typed Tauri IPC commands and events.'
    },
    core: {
      file: 'crates/agent',
      tag: 'Tokio agent loop',
      text: vi
        ? 'Chu trình Agent bất đồng bộ trên Tokio. Mỗi agent con chạy biệt lập với giới hạn token, thời gian chờ và cơ chế ngắt an toàn.'
        : 'Async agent loops on Tokio. Each sub-agent runs isolated, with token budgets, timeouts and cancellation hooks.'
    },
    policy: {
      file: 'crates/policy',
      tag: '#![forbid(unsafe_code)]',
      text: vi
        ? 'Policy Engine kiểm duyệt mọi ý định do LLM đề xuất: xác minh năng quyền, đối chiếu quy tắc và yêu cầu bạn xác nhận với hành động rủi ro.'
        : 'The Policy Engine intercepts every intent an LLM proposes: it verifies capabilities, evaluates grants and asks you to confirm risky actions.',
      code: POLICY_CODE
    },
    tools: {
      file: 'crates/tools',
      tag: 'PathGuard + UrlGuard',
      text: vi
        ? 'Mọi truy cập file phải qua PathGuard để chống vượt thư mục. Truy cập web đi qua UrlGuard, chặn mạng nội bộ (SSRF).'
        : 'Every filesystem call goes through PathGuard. Web access is sandboxed by UrlGuard, which blocks private IP ranges (SSRF).',
      code: TOOLS_CODE
    },
    storage: {
      file: 'crates/store',
      tag: 'SQLite FTS5',
      text: vi
        ? 'Không khóa nhà cung cấp. Lịch sử lưu trong file SQLite tiêu chuẩn, tài liệu là file Markdown thuần trên đĩa của bạn.'
        : 'No lock-in. Chats and logs live in a standard SQLite file; documents are plain Markdown files on your disk.'
    }
  }

  const d = detail[active]
  const progress = reduced ? 0 : Math.min(1, elapsed / STEP_MS)

  return (
    <section id="security" className="py-24 sm:py-32 lg:py-40 border-t border-line bg-subtle">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow={t('security.badge')} title={t('security.title')} subtitle={t('security.subtitle')} />

        <div
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="mt-16 sm:mt-20 grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-10"
        >
          {/* Layer stack */}
          <div role="tablist" aria-label="Architecture layers" aria-orientation="vertical" className="space-y-2">
            {ORDER.map((id) => {
              const isActive = id === active
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => select(id)}
                  className={`relative w-full text-left rounded-lg border px-4 py-3.5 overflow-hidden transition-colors ${
                    isActive ? 'bg-surface border-line-strong' : 'border-line hover:bg-surface-hover'
                  }`}
                >
                  <div className={`text-[10px] font-mono mb-0.5 ${id === 'policy' ? 'text-ok' : 'text-faint'}`}>
                    {t(`security.layers.${id}.num`)}
                  </div>
                  <div className={`text-sm font-semibold ${isActive ? 'text-fg' : 'text-muted'}`}>{t(`security.layers.${id}.name`)}</div>
                  <div className="text-xs text-faint">{t(`security.layers.${id}.desc`)}</div>
                  {isActive && !reduced && (
                    <span
                      className="absolute left-0 bottom-0 h-0.5 bg-accent"
                      style={{ width: `${progress * 100}%` }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Inspector */}
          <div key={active} role="tabpanel" className="animate-fade-in surface rounded-xl overflow-hidden self-start">
            <div className="flex items-center justify-between gap-3 px-5 h-11 border-b border-line bg-bg text-xs font-mono">
              <span className="text-fg">{d.file}</span>
              <span className="text-faint">{d.tag}</span>
            </div>
            <div className="p-5 sm:p-7 space-y-5">
              <p className="text-base text-muted leading-relaxed">{d.text}</p>
              {d.code && (
                <pre className="rounded-lg bg-code text-code-fg text-xs leading-relaxed p-4 sm:p-5 overflow-x-auto">
                  <code>{d.code}</code>
                </pre>
              )}
            </div>
          </div>
        </div>

        {/* Rules */}
        <dl className="mt-20 sm:mt-28 grid sm:grid-cols-2 gap-x-16 gap-y-10">
          {(['rule1', 'rule2', 'rule3', 'rule4'] as const).map((r) => (
            <div key={r} className="border-t border-line pt-5">
              <dt className="flex items-baseline gap-3">
                <span className="text-[11px] font-mono text-accent">{t(`security.rules.${r}.num`)}</span>
                <span className="text-base font-semibold text-fg">{t(`security.rules.${r}.title`)}</span>
              </dt>
              <dd className="mt-2 text-sm text-muted leading-relaxed">{t(`security.rules.${r}.desc`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
