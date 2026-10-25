import { useRef } from 'react'

// macOS-style window frame. In the glass theme a specular highlight follows the cursor.
export default function GlassWindow({ children, title }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <div className="window" ref={ref} onPointerMove={handleMove}>
      <div className="glare glare-outer" />
      <div className="window-outline">
        <div className="window-main">
          <div className="window-bar">
            <div className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            {title && <span className="window-title">{title}</span>}
          </div>
          <div className="window-content">{children}</div>
        </div>
      </div>
      <div className="window-sheen" aria-hidden="true" />
    </div>
  )
}
