import { workLinks, connectLinks } from '../data/socials'

function SidenavLink({ href, label, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn with-icon ${className}`}
    >
      {label}
    </a>
  )
}

export default function Sidenav({ isOpen }) {
  return (
    <div className={`sidenav-container${isOpen ? ' sidenav-out' : ''}`}>
      <div className="sidenav-content">
        <h4 className="sidenav-heading intro">See my work on</h4>
        {workLinks.map((link) => (
          <SidenavLink key={link.label} {...link} />
        ))}

        <h4 className="sidenav-heading intro">Connect with me on</h4>
        {connectLinks.map((link) => (
          <SidenavLink key={link.label} {...link} />
        ))}

        <p className="sidenav-heading2">Or just shoot me an email</p>
        <div className="detail">
          <img src="/assets/envelope.svg" alt="envelope" />
          <a className="link address" href="mailto:anosikegenesis@gmail.com">
            anosikegenesis@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
