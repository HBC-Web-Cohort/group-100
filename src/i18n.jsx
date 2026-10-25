import { createContext, useContext } from 'react'
import en from './locales/en.json'
import fa from './locales/fa.json'

// To add a language: drop a JSON file in src/locales and register it here.
export const locales = { en, fa }

export const detectLanguage = () => {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && locales[saved]) return saved
  } catch {
    /* storage unavailable */
  }
  // Dari is "prs"; browsers in Afghanistan often report "fa-AF" or "fa".
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('fa') || nav.startsWith('prs') ? 'fa' : 'en'
}

const I18nContext = createContext({ lang: 'en', t: en, setLang: () => {} })

export const I18nProvider = I18nContext.Provider

export const useI18n = () => useContext(I18nContext)
