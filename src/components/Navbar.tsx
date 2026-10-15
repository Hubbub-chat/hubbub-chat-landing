import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.tsx'
import { useTheme } from '../context/ThemeContext.tsx'
import { Logo } from './Logo.tsx'

const NAV_LINKS = [
  { href: '#agents', key: 'nav.agents' },
  { href: '#features', key: 'nav.features' },
  { href: '#security', key: 'nav.security' },
  { href: '#compare', key: 'nav.compare' },
  { href: '#faq', key: 'nav.faq' }
]

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const iconBtn =
    'w-9 h-9 inline-flex items-center justify-center rounded-lg text-muted hover:text-fg hover:bg-surface-hover transition-colors'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
        scrolled || open ? 'bg-bg/85 backdrop-blur-md border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2.5 shrink-0" aria-label="Hubbub Chat">
          <Logo className="w-7 h-7" />
          <span className="text-[15px] font-semibold tracking-tight text-fg">Hubbub Chat</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-fg transition-colors">
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={toggleTheme}
            className={iconBtn}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="hidden sm:flex items-center text-xs font-semibold" role="group" aria-label="Language">
            {(['en', 'vi'] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`px-2 h-9 rounded-lg transition-colors uppercase ${
                  lang === code ? 'text-fg' : 'text-faint hover:text-fg'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <a href="#download" className="btn btn-primary !h-9 !px-4 ml-1.5">
            {t('nav.downloadShort')}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`${iconBtn} lg:hidden`}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg px-5 sm:px-8 py-4 animate-fade-in">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-fg border-b border-line last:border-0"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-2 sm:hidden" role="group" aria-label="Language">
            {(['en', 'vi'] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`btn !h-9 uppercase ${lang === code ? 'btn-primary' : 'btn-secondary'}`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
