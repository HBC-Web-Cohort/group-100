import { projects, profile } from '../data/content'
import GlassWindow from './GlassWindow'
import Placeholder from './Placeholder'
import Reveal from './Reveal'

export default function WorkPage() {
  return (
    <main>
      <section className="work-hero container">
        <Reveal>
          <div className="overline">
            <span className="section-dot" />
            <span>SELECTED WORK</span>
          </div>
          <h1 className="text-hero big">
            {profile.name.split(' ')[0]} <span className="serif">designs</span> things.
          </h1>
          <p className="swipe-hint">SCROLL TO SEE WORK ↓</p>
        </Reveal>
      </section>

      <section className="container work-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120}>
            <a className="project-card" href="#/" onClick={(e) => e.preventDefault()}>
              <GlassWindow title={p.title}>
                <Placeholder label={p.title} hue={p.hue} ratio="16 / 10" />
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
