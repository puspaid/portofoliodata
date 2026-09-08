'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { content, type Lang, type Dict } from '@/lib/content'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default bahasa: Bahasa Indonesia
  const [lang, setLang] = useState<Lang>('id')

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'))
  }, [])

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle,
    t: content[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
