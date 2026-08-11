import { footerLinks } from '../data/socials'

export default function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <p>Connect with me</p>
      </div>

      <div className="social-icons">
        {footerLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.label} />
          </a>
        ))}
      </div>

      <div className="github">
        <img src="/assets/github-logo.svg" alt="github-logo" />
        <a
          className="link"
          href="https://github.com/the-genesis"
          target="_blank"
          rel="noopener noreferrer"
        >
          @the-genesis
        </a>
      </div>
    </footer>
  )
}
