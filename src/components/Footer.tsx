import React from 'react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { Logo } from './Logo.tsx'

const REPO = 'https://github.com/thanghn14/hubbub-chat'

export const Footer: React.FC = () => {
  const { t } = useLanguage()

  const linkCls = 'text-sm text-muted hover:text-fg transition-colors'
  const headCls = 'text-sm font-semibold text-fg mb-4'

  return (
    <footer className="border-t border-line bg-subtle">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 max-w-xs">
            <div className="flex items-center gap-2.5">
              <Logo className="w-7 h-7" />
              <span className="text-[15px] font-semibold tracking-tight text-fg">Hubbub Chat</span>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">{t('footer.tagline')}</p>
          </div>

          <div>
            <div className={headCls}>{t('footer.colProduct')}</div>
            <ul className="space-y-3">
              <li><a href="#agents" className={linkCls}>{t('nav.agents')}</a></li>
              <li><a href="#features" className={linkCls}>{t('nav.features')}</a></li>
              <li><a href="#security" className={linkCls}>{t('nav.security')}</a></li>
              <li><a href="#download" className={linkCls}>{t('nav.downloadShort')}</a></li>
            </ul>
          </div>

          <div>
            <div className={headCls}>{t('footer.colEcosystem')}</div>
            <ul className="space-y-3">
              <li><a href={REPO} target="_blank" rel="noreferrer" className={linkCls}>GitHub</a></li>
              <li><a href={`${REPO}#readme`} target="_blank" rel="noreferrer" className={linkCls}>Documentation</a></li>
              <li><a href={`${REPO}/releases`} target="_blank" rel="noreferrer" className={linkCls}>Releases</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-faint">
          <div>© {new Date().getFullYear()} {t('footer.copyright')}</div>
          <div>{t('footer.builtWith')}</div>
        </div>
      </div>
    </footer>
  )
}
