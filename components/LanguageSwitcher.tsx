"use client"

import Image from 'next/image'
import { useTranslation } from '@/lib/translation-context'

type Language = 'he' | 'en' | 'ru'

interface LanguageConfig {
  code: Language
  flag: string
  name: string
}

const languages: LanguageConfig[] = [
  {
    code: 'he',
    flag: '/flags/israel.svg',
    name: 'עברית'
  },
  {
    code: 'en',
    flag: '/flags/usa.svg',
    name: 'English'
  },
  {
    code: 'ru',
    flag: '/flags/ukraine.svg',
    name: 'Русский'
  }
]

export default function LanguageSwitcher() {
  const { currentLang, setLanguage } = useTranslation()

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`relative w-8 h-6 rounded overflow-hidden transition-transform hover:scale-110 ${
            currentLang === lang.code ? 'ring-2 ring-blue-500' : ''
          }`}
          title={lang.name}
        >
          <Image
            src={lang.flag}
            alt={lang.name}
            fill
            className="object-cover"
          />
        </button>
      ))}
    </div>
  )
} 