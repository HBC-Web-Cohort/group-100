import { projectHues } from '../data/content'
import { useI18n } from '../i18n'
import GlassWindow from './GlassWindow'
import Placeholder from './Placeholder'
import Reveal from './Reveal'

export default function WorkPage() {
  const { t } = useI18n()
  const { lead, accent, trail } = t.ui.workHero

  return (
    <main>
      <section className="work-hero container">
        <Reveal>
          <div className="overline">
            <span className="section-dot" />
            <span>{t.ui.selectedWork}</span>
          </div>
          <h1 className="text-hero big">
            {lead} <span className="serif">{accent}</span> {trail}
          </h1>
          <p className="swipe-hint">{t.ui.scrollHint}</p>
        </Reveal>
      </section>

      <section className="container work-grid">
        {t.projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120}>
            <a className="project-card" href="#/" onClick={(e) => e.preventDefault()}>
              <GlassWindow title={p.title}>
                <Placeholder label={p.title} hue={projectHues[i]} ratio="16 / 10" />
              </GlassWindow>
              <div className="project-meta">
                <h2 className="heading">{p.title}</h2>
                <span className="meta mono">{p.tag}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </section>
    </main>
  )
}
