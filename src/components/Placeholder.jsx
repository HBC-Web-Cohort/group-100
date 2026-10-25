import { useI18n } from '../i18n'

// Gradient placeholder standing in for a real photo.
export default function Placeholder({ label, hue = 220, ratio = '4 / 3' }) {
  const { t } = useI18n()
  return (
    <div
      className="placeholder"
      style={{ '--hue': hue, aspectRatio: ratio }}
      role="img"
      aria-label={`${t.ui.placeholderImage}: ${label}`}
    >
      <svg className="placeholder-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="M4 17l5-5 4 4 3-3 4 4" />
      </svg>
      <span className="placeholder-label">{label}</span>
    </div>
  )
}
