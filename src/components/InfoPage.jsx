import { storyLayout, friendSites } from '../data/content'
import { useI18n } from '../i18n'
import GlassWindow from './GlassWindow'
import Placeholder from './Placeholder'
import Reveal from './Reveal'

const Overline = ({ children }) => (
  <div className="overline">
    <span className="section-dot" />
    <span>{children}</span>
  </div>
)

// Initials kept as separate glyphs (ZWNJ) so Dari letters don't join.
const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('‌')

function StoryBlock({ layout, text: copy, signature }) {
  const image = (
    <GlassWindow title={copy.image}>
      <Placeholder label={copy.image} hue={layout.hue} />
    </GlassWindow>
  )
  const text = (
    <div className="story-text">
      <p className="emphasis">{copy.title}</p>
      {copy.body?.map((p, i) => <p key={i}>{p}</p>)}
      {copy.closing && <p className="emphasis closing">{copy.closing}</p>}
      {layout.signature && <span className="signature">{signature}</span>}
    </div>
  )

  // Offset blocks put the text above the image, like the reference layout.
  return (
    <div className={`story-block ${layout.offset ? 'has-offset' : ''}`}>
      {layout.offset ? (
        <>
          {text}
          {image}
        </>
      ) : (
        <>
          {image}
          {text}
        </>
      )}
    </div>
  )
}

export default function InfoPage() {
  const { t } = useI18n()

  return (
    <main>
      <section className="info-hero container">
        <Reveal>
          <Overline>{t.ui.aboutMe}</Overline>
          <h1 className="text-hero">
            {t.hero.lead} <span className="serif">{t.hero.accent}</span>
          </h1>
        </Reveal>

        {storyLayout.map((row, i) => (
          <div className="double-column" key={i}>
            {row.map((layout, j) => (
              <Reveal key={j} delay={j * 120}>
                <StoryBlock layout={layout} text={t.story[i][j]} signature={t.profile.signature} />
              </Reveal>
            ))}
          </div>
        ))}
      </section>

      <div className="divider" />

      <section className="container section-general">
        <Reveal>
          <Overline>{t.ui.experience}</Overline>
        </Reveal>
        <div className="experience-list">
          {t.experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className="experience-card glass">
                <h2 className="heading">{job.company}</h2>
                <div className="experience-block">
                  <div className="meta-row">
                    <span className="meta">{job.role}</span>
                    <span className="meta mono">{job.dates}</span>
                  </div>
                  <p className="body">{job.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="container section-general last">
        <Reveal>
          <Overline>{t.ui.friends}</Overline>
        </Reveal>
        <div className="friends-grid">
          {t.friends.map((f, i) => (
            <Reveal key={friendSites[i]} delay={(i % 3) * 80}>
              <div className="friend-block glass">
                <div className="friend-avatar" style={{ '--hue': (i * 47) % 360 }}>
                  {initials(f.name)}
                </div>
                <div>
                  <p className="friend-name">{f.name}</p>
                  <p className="meta">{f.role}</p>
                  <a className="friend-link" href="#" dir="ltr" onClick={(e) => e.preventDefault()}>
                    {friendSites[i]} ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
