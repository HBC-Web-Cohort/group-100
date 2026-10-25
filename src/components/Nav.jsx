import { useState } from 'react'
import { profile } from '../data/content'

const ExternalIcon = () => (
  <svg className="icon-external" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M5 11L11 5M6 5h5v5" />
  </svg>
)

export default function Nav({ page, onNavigate, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-bar">
        <a
          className="logo-block"
          href="#/"
          onClick={() => onNavigate('work')}
          aria-label={`${profile.name}, home`}
        >
          <span className="logomark">{profile.name.charAt(0)}</span>
          <span className="logo-text">
            <span className="text-logo">{profile.name}</span>
            <span className="text-underlogo">{profile.role}</span>
          </span>
        </a>

        <div className="nav-pill-wrapper">
          <span className={`nav-glow ${page}`} />
          <nav className="nav-pill glass" aria-label="Primary">
            <span className={`nav-indicator ${page}`} />
            <a
              href="#/"
              className={`nav-toggle ${page === 'work' ? 'is-current' : ''}`}
              aria-current={page === 'work' ? 'page' : undefined}
              onClick={() => onNavigate('work')}
            >
              Work
            </a>
            <a
              href="#/info"
              className={`nav-toggle ${page === 'info' ? 'is-current' : ''}`}
              aria-current={page === 'info' ? 'page' : undefined}
              onClick={() => onNavigate('info')}
            >
              Info
            </a>
          </nav>
        </div>

        <div className="nav-right">
          <div className="chip-socials-wrapper glass">
            {profile.socials.map((s) => (
              <a key={s.label} className="chip-socials" href={s.href} target="_blank" rel="noreferrer">
                {s.label}
                <ExternalIcon />
              </a>
            ))}
          </div>

          <button
            className="theme-toggle glass"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'glass' ? 'classic' : 'glass'} theme`}
            title={theme === 'glass' ? 'Glass theme on' : 'Classic theme on'}
          >
            <span className={`theme-knob ${theme}`} />
            <span className="theme-label">{theme === 'glass' ? 'Glass' : 'Classic'}</span>
          </button>

          <button
            className="nav-menu-button glass"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Contact links"
          >
            {menuOpen ? '×' : '@'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-popup glass">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
              <ExternalIcon />
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
