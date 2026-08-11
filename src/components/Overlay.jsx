// Replaces the old window.onclick handler in main.js — clicking the overlay
// (i.e. anywhere outside the sidenav) closes it.
export default function Overlay({ isOpen, onClose }) {
  return <div id="overlay" style={{ display: isOpen ? 'block' : 'none' }} onClick={onClose} />
}
