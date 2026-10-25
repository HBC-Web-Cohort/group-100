import { profile } from '../data/content'
import { useI18n } from '../i18n'

export default function Footer({ onNavigate }) {
  const { t } = useI18n()
  const year = new Intl.NumberFormat(t.meta.numberLocale, { useGrouping: false }).format(
    new Date().getFullYear()
  )

  return (
    <footer className="footer container">
      <div className="footer-card glass">
        <div className="footer-top">
          <div>
            <span className="logomark large">{profile.monogram}</span>
            <p className="footer-pitch">
              {t.ui.footerPitch.lead} <span className="serif">{t.ui.footerPitch.accent}</span>
            </p>
            <a className="footer-email" href={`mailto:${profile.email}`} dir="ltr">
              {profile.email}
            </a>
          </div>
          <div className="footer-columns">
            <div>
              <p className="overline-text">{t.ui.pages}</p>
              <a href="#/" onClick={() => onNavigate('work')}>{t.ui.work}</a>
              <a href="#/info" onClick={() => onNavigate('info')}>{t.ui.info}</a>
            </div>
            <div>
              <p className="overline-text">{t.ui.elsewhere}</p>
              {profile.socials.map((s) => (
                <a key={s.id} href={s.href}>
                  {t.profile.socials[s.id]}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {t.profile.name}. {t.ui.copyright}</span>
          <span className="mono">{t.ui.builtWith}</span>
        </div>
      </div>
    </footer>
  )
}
