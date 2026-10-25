import { useEffect, useMemo, useState } from 'react'
import Background from './components/Background'
import Nav from './components/Nav'
import InfoPage from './components/InfoPage'
import WorkPage from './components/WorkPage'
import Footer from './components/Footer'
import { I18nProvider, detectLanguage, locales } from './i18n'

const pageFromHash = () => (window.location.hash.startsWith('#/info') ? 'info' : 'work')

const readTheme = () => {
  try {
    return localStorage.getItem('theme') || 'glass'
  } catch {
    return 'glass'
  }
}

export default function App() {
  const [page, setPage] = useState(pageFromHash)
  const [theme, setTheme] = useState(readTheme)
  const [lang, setLang] = useState(detectLanguage)
  const t = locales[lang]
  const i18n = useMemo(() => ({ lang, t, setLang }), [lang, t])

  useEffect(() => {
    const onHash = () => {
      setPage(pageFromHash())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.lang = t.meta.lang
    root.dir = t.meta.dir
    document.title = `${t.profile.name} — ${page === 'info' ? t.ui.info : t.ui.work}`
    try {
      localStorage.setItem('theme', theme)
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable */
    }
  }, [theme, page, lang, t])

  return (
    <I18nProvider value={i18n}>
      <Background />
      <Nav
        page={page}
        onNavigate={setPage}
        theme={theme}
        onToggleTheme={() => setTheme((th) => (th === 'glass' ? 'classic' : 'glass'))}
      />
      {/* key forces reveal animations to replay when switching page or language */}
      <div key={`${page}-${lang}`} className="page">
        {page === 'info' ? <InfoPage /> : <WorkPage />}
      </div>
      <Footer onNavigate={setPage} />
    </I18nProvider>
  )
}
