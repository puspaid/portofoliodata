'use client'

import { useLanguage } from '@/components/language-provider'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-wine-deep/25 bg-background p-0.5 text-sm font-bold ${className}`}
      role="group"
      aria-label="Language switcher / Pengalih bahasa"
    >
      <button
        type="button"
        onClick={() => setLang('id')}
        aria-pressed={lang === 'id'}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === 'id'
            ? 'bg-wine-deep text-primary-foreground'
            : 'text-wine-deep hover:bg-blush'
        }`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === 'en'
            ? 'bg-wine-deep text-primary-foreground'
            : 'text-wine-deep hover:bg-blush'
        }`}
      >
        EN
      </button>
    </div>
  )
}
