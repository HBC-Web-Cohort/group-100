// Ambient layer: drifting color orbs (visible in the glass theme) plus film grain.
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="noise" />
    </div>
  )
}
