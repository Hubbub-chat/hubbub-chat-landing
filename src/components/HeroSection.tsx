import React from 'react'
import { Download, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { HeroDemo } from './HeroDemo.tsx'

export const HeroSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
      <div className="hero-glow absolute inset-x-0 top-0 h-[520px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div
            style={{ animationDelay: '0ms' }}
            className="animate-fade-up inline-flex items-center gap-2 text-[13px] text-muted border border-line rounded-full pl-2.5 pr-3.5 py-1.5 mb-8"
          >
            <span className="relative flex w-2 h-2">
              <span className="animate-beacon absolute inline-flex h-full w-full rounded-full bg-ok" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-ok" />
            </span>
            {t('hero.pillTag')}
          </div>

          <h1
            style={{ animationDelay: '80ms' }}
            className="animate-fade-up text-balance text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-fg"
          >
            {t('hero.title1')}
            <span className="text-accent">{t('hero.titleHighlight')}</span>
            {t('hero.title2')}
          </h1>

          <p
            style={{ animationDelay: '160ms' }}
            className="animate-fade-up mt-7 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </p>

          <div
            style={{ animationDelay: '240ms' }}
            className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#download" className="btn btn-primary">
              <Download className="w-4 h-4" />
              {t('hero.ctaDownload')}
            </a>
            <a href="https://github.com/thanghn14/hubbub-chat" target="_blank" rel="noreferrer" className="btn btn-secondary">
              {t('hero.ctaGithub')}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <p style={{ animationDelay: '300ms' }} className="animate-fade-up mt-4 text-xs text-faint">
            {t('hero.ctaDownloadSub')}
          </p>
        </div>

        <div style={{ animationDelay: '400ms' }} className="animate-fade-up mt-16 sm:mt-24 max-w-5xl mx-auto">
          <HeroDemo />
        </div>
      </div>
    </section>
  )
}
