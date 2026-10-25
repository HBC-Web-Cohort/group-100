import { heroLine, storyRows, experience, friends } from '../data/content'
import GlassWindow from './GlassWindow'
import Placeholder from './Placeholder'
import Reveal from './Reveal'

const Overline = ({ children }) => (
  <div className="overline">
    <span className="section-dot" />
    <span>{children}</span>
  </div>
)

function StoryBlock({ block }) {
  const image = block.image && (
    <GlassWindow title={block.image.label}>
      <Placeholder label={block.image.label} hue={block.image.hue} />
    </GlassWindow>
  )
  const text = (
    <div className="story-text">
      <p className="emphasis">{block.title}</p>
      {block.body?.map((p, i) => <p key={i}>{p}</p>)}
      {block.closing && <p className="emphasis closing">{block.closing}</p>}
      {block.signature && <span className="signature">Alex</span>}
    </div>
  )

  // Offset blocks put the text above the image, like the reference layout.
  return (
    <div className={`story-block ${block.offset ? 'has-offset' : ''}`}>
      {block.offset ? (
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
  return (
    <main>
      <section className="info-hero container">
        <Reveal>
          <Overline>ABOUT ME</Overline>
          <h1 className="text-hero">
            {heroLine.lead} <span className="serif">{heroLine.accent}</span>
          </h1>
        </Reveal>

        {storyRows.map((row, i) => (
          <div className="double-column" key={i}>
            {row.map((block, j) => (
              <Reveal key={j} delay={j * 120}>
                <StoryBlock block={block} />
              </Reveal>
            ))}
          </div>
        ))}
      </section>

      <div className="divider" />

      <section className="container section-general">
        <Reveal>
          <Overline>EXPERIENCE</Overline>
        </Reveal>
        <div className="experience-list">
          {experience.map((job, i) => (
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
          <Overline>FRIENDS</Overline>
        </Reveal>
        <div className="friends-grid">
          {friends.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 80}>
              <div className="friend-block glass">
                <div className="friend-avatar" style={{ '--hue': (i * 47) % 360 }}>
                  {f.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="friend-name">{f.name}</p>
                  <p className="meta">{f.role}</p>
                  <a className="friend-link" href="#" onClick={(e) => e.preventDefault()}>
                    {f.site} ↗
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
