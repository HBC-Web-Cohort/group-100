import { profile } from '../data/content'

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer container">
      <div className="footer-card glass">
        <div className="footer-top">
          <div>
            <span className="logomark large">{profile.name.charAt(0)}</span>
            <p className="footer-pitch">
              Let’s build something <span className="serif">together.</span>
            </p>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div className="footer-columns">
            <div>
              <p className="overline-text">PAGES</p>
              <a href="#/" onClick={() => onNavigate('work')}>Work</a>
              <a href="#/info" onClick={() => onNavigate('info')}>Info</a>
            </div>
            <div>
              <p className="overline-text">ELSEWHERE</p>
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. Placeholder content.</span>
          <span className="mono">Built with React · Glass edition</span>
        </div>
      </div>
    </footer>
  )
}
