import React from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, subtitle, align = 'center', className = '' }) => (
  <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
    {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
    <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-fg leading-[1.1]">{title}</h2>
    {subtitle && <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">{subtitle}</p>}
  </div>
)
