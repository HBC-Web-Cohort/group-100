import { useEffect, useState } from 'react'
import Background from './components/Background'
import Nav from './components/Nav'
import InfoPage from './components/InfoPage'
import WorkPage from './components/WorkPage'
import Footer from './components/Footer'

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

  useEffect(() => {
    const onHash = () => {
      setPage(pageFromHash())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.title = `Alex Rivera — ${page === 'info' ? 'Info' : 'Work'}`
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme, page])

  return (
    <>
      <Background />
      <Nav
        page={page}
        onNavigate={setPage}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'glass' ? 'classic' : 'glass'))}
      />
      {/* key forces reveal animations to replay when switching pages */}
      <div key={page} className="page">
        {page === 'info' ? <InfoPage /> : <WorkPage />}
      </div>
      <Footer onNavigate={setPage} />
    </>
  )
}
