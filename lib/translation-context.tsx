"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, TranslationKey } from './translations'

type Language = 'he' | 'en' | 'ru'

interface TranslationContextType {
  currentLang: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const TranslationContext = createContext<TranslationContextType>({
  currentLang: 'en',
  setLanguage: () => {},
  t: (key) => key,
})

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('en')

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
  }

  const t = (key: TranslationKey): string => {
    return translations[currentLang]?.[key] || translations.en[key]
  }

  return (
    <TranslationContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => useContext(TranslationContext) 