import React, { useState } from 'react'
import { Download, Check, Copy, ShieldCheck, FolderArchive } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { SectionHeader } from './SectionHeader.tsx'

const RELEASE_VERSION = '0.1.0'
const RELEASE_BASE_URL = `https://github.com/thanghn14/hubbub-chat/releases/download/v${RELEASE_VERSION}`

export const DownloadSection: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false)
  const { lang, t } = useLanguage()
  const sha256Checksum = 'cd9ee74f54aa6e3867c569393d3c46e0445b89ecf62b56d9e7af4019fdb29b78'

  const handleCopyHash = () => {
    navigator.clipboard.writeText(sha256Checksum)
    setCopiedHash(true)
    setTimeout(() => setCopiedHash(false), 2000)
  }

  const requirements = [
    [t('download.osReq'), t('download.osSub')],
    [t('download.ramReq'), t('download.ramSub')],
    [t('download.ollamaReq'), t('download.ollamaSub')]
  ]

  return (
    <section id="download" className="py-24 sm:py-32 lg:py-40 border-t border-line bg-subtle">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow={t('download.badge')} title={t('download.title')} subtitle={t('download.subtitle')} />

        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto surface rounded-xl p-6 sm:p-10">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-fg">{t('download.cardTitle')}</h3>
              <p className="text-sm text-muted mt-0.5">{t('download.cardSub')}</p>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded-md border border-line text-muted shrink-0">v{RELEASE_VERSION} Beta</span>
          </div>

          <a
            href={`${RELEASE_BASE_URL}/hubbub-chat_${RELEASE_VERSION}_x64_en-US.msi`}
            className="btn btn-primary !h-14 w-full !justify-between !px-5 group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <Download className="w-5 h-5 shrink-0 transition-transform group-hover:translate-y-0.5" />
              <span className="text-left min-w-0">
                <span className="block text-sm font-semibold truncate">{t('download.msiBtn')}</span>
                <span className="block text-[11px] font-normal opacity-70 truncate">hubbub-chat_{RELEASE_VERSION}_x64_en-US.msi</span>
              </span>
            </span>
            <span className="text-xs font-mono opacity-70 shrink-0">6.8 MB</span>
          </a>

          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            <a href={`${RELEASE_BASE_URL}/hubbub-chat_${RELEASE_VERSION}_x64-setup.exe`} className="btn btn-secondary !justify-between">
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Setup (.exe)
              </span>
              <span className="text-xs font-mono text-faint">4.7 MB</span>
            </a>
            <a href={`${RELEASE_BASE_URL}/hubbub-chat_${RELEASE_VERSION}_x64.portable.zip`} className="btn btn-secondary !justify-between">
              <span className="flex items-center gap-2">
                <FolderArchive className="w-4 h-4" />
                Portable (.zip)
              </span>
              <span className="text-xs font-mono text-faint">6.8 MB</span>
            </a>
          </div>

          <div className="mt-3 text-center">
            <a
              href="https://github.com/thanghn14/hubbub-chat/releases"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:underline"
            >
              {lang === 'vi' ? 'Xem tất cả bản phát hành →' : 'View all releases →'}
            </a>
          </div>

          {/* Checksum */}
          <div className="mt-8 pt-6 border-t border-line">
            <div className="flex items-center justify-between text-xs text-faint mb-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-ok" />
                {t('download.shaLabel')}
              </span>
              <button onClick={handleCopyHash} className="inline-flex items-center gap-1 text-accent hover:underline">
                {copiedHash ? (
                  <>
                    <Check className="w-3 h-3" />
                    {t('download.copied')}
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    {t('download.copy')}
                  </>
                )}
              </button>
            </div>
            <div className="p-3 rounded-lg bg-subtle border border-line font-mono text-[11px] text-muted truncate">{sha256Checksum}</div>
          </div>
        </div>

        {/* Requirements */}
        <dl className="mt-12 max-w-3xl mx-auto grid sm:grid-cols-3 gap-x-8 gap-y-6">
          {requirements.map(([title, sub]) => (
            <div key={title}>
              <dt className="text-sm font-medium text-fg">{title}</dt>
              <dd className="text-sm text-muted mt-1">{sub}</dd>
            </div>
          ))}
        </dl>

        {/* Quick start */}
        <ol className="reveal-stagger mt-20 sm:mt-28 grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((n) => (
            <li key={n} className="border-t border-line pt-5">
              <div className="text-xs font-mono text-accent mb-2">0{n}</div>
              <h4 className="text-base font-semibold text-fg">{t(`download.steps.step${n}Title`)}</h4>
              <p className="mt-2 text-sm text-muted leading-relaxed">{t(`download.steps.step${n}Desc`)}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center text-xs text-faint">
          {t('download.macLinux')} · {t('download.roadmapTag')}
        </p>
      </div>
    </section>
  )
}
