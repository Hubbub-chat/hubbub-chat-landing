import React from 'react'

interface LogoProps {
  className?: string
  size?: number
  alt?: string
  variant?: 'icon' | 'mark'
}

export const Logo: React.FC<LogoProps> = ({
  className = 'w-6 h-6',
  size,
  alt = 'Hubbub Chat',
  variant = 'icon',
}) => {
  const src = variant === 'mark' ? '/logo-mark.png' : '/logo.png'

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 select-none object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  )
}
