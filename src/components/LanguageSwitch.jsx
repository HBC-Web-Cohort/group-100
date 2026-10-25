import { locales, useI18n } from '../i18n'

// Segmented glass control: one segment per registered locale.
export default function LanguageSwitch({ className = '' }) {
  const { lang, t, setLang } = useI18n()
  const codes = Object.keys(locales)

  return (
    <div className={`lang-switch glass ${className}`} role="group" aria-label={t.ui.language}>
      <span
        className="lang-indicator"
        style={{ '--i': codes.indexOf(lang), '--n': codes.length }}
        aria-hidden="true"
      />
      {codes.map((code) => {
        const meta = locales[code].meta
        return (
          <button
            key={code}
            type="button"
            lang={meta.lang}
            className={`lang-option ${code === lang ? 'is-current' : ''}`}
            aria-pressed={code === lang}
            title={meta.label}
            onClick={() => setLang(code)}
          >
            {meta.short}
          </button>
        )
      })}
    </div>
  )
}
