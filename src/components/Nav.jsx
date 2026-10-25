import { useState } from 'react'
import { profile } from '../data/content'
import { useI18n } from '../i18n'
import LanguageSwitch from './LanguageSwitch'

const ExternalIcon = () => (
  <svg className="icon-external" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M5 11L11 5M6 5h5v5" />
  </svg>
)

function ThemeToggle({ theme, onToggle, className = '' }) {
  const { t } = useI18n()
  const label = theme === 'glass' ? t.ui.themeGlass : t.ui.themeClassic
  return (
    <button
      className={`theme-toggle glass ${className}`}
      onClick={onToggle}
      aria-label={theme === 'glass' ? t.ui.switchToClassic : t.ui.switchToGlass}
      title={label}
    >
      <span className={`theme-knob ${theme}`} />
      <span className="theme-label">{label}</span>
    </button>
  )
}

export default function Nav({ page, onNavigate, theme, onToggleTheme }) {
  const { t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-bar">
        <a
          className="logo-block"
          href="#/"
          onClick={() => onNavigate('work')}
          aria-label={`${t.profile.name}, ${t.ui.home}`}
        >
          <span className="logomark">{profile.monogram}</span>
          <span className="logo-text">
            <span className="text-logo">{t.profile.name}</span>
            <span className="text-underlogo">{t.profile.role}</span>
          </span>
        </a>

        <div className="nav-pill-wrapper">
          <span className={`nav-glow ${page}`} />
          <nav className="nav-pill glass" aria-label={t.ui.primaryNav}>
            <span className={`nav-indicator ${page}`} />
            <a
              href="#/"
              className={`nav-toggle ${page === 'work' ? 'is-current' : ''}`}
              aria-current={page === 'work' ? 'page' : undefined}
              onClick={() => onNavigate('work')}
            >
              {t.ui.work}
            </a>
            <a
              href="#/info"
              className={`nav-toggle ${page === 'info' ? 'is-current' : ''}`}
              aria-current={page === 'info' ? 'page' : undefined}
              onClick={() => onNavigate('info')}
            >
              {t.ui.info}
            </a>
          </nav>
        </div>

        <div className="nav-right">
          <div className="chip-socials-wrapper glass">
            {profile.socials.map((s) => (
              <a key={s.id} className="chip-socials" href={s.href} target="_blank" rel="noreferrer">
                {t.profile.socials[s.id]}
                <ExternalIcon />
              </a>
            ))}
          </div>

          <LanguageSwitch className="desktop-only" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} className="desktop-only" />

          <button
            className="nav-menu-button glass"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={t.ui.contactLinks}
          >
            {menuOpen ? '×' : '@'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-popup glass">
          {profile.socials.map((s) => (
            <a key={s.id} href={s.href} target="_blank" rel="noreferrer">
              {t.profile.socials[s.id]}
              <ExternalIcon />
            </a>
          ))}
          {/* On phones the switchers move into this menu to keep the bar uncluttered */}
          <div className="popup-settings">
            <p className="overline-text">{t.ui.settings}</p>
            <LanguageSwitch />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      )}
    </header>
  )
}
