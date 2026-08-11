export default function NavIcon({ isOpen, onToggle }) {
  return (
    <div className="nav-icon-container">
      <div
        id="nav-icon"
        className={isOpen ? 'clicked' : 'unclicked'}
        onClick={onToggle}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className={`nav-icon-top${isOpen ? ' top-clicked' : ''}`} />
        <span className={`nav-icon-bottom${isOpen ? ' bottom-clicked' : ''}`} />
      </div>
    </div>
  )
}
