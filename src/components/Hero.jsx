import DribbbleIcon from './icons/DribbbleIcon'
import MediumIcon from './icons/MediumIcon'

export default function Hero() {
  return (
    <section className="section header">
      <h4 className="intro">
        Hi, I'm <span>Genesis Anosike</span> and I design simple, easy-to-use digital products
        from Ibadan, Nigeria.
      </h4>

      <div className="accounts-container">
        {/* These anchors are inline, so the whitespace between them is rendered
            as a space and contributes ~4px to the icon spacing. JSX strips
            newline whitespace between elements, so it has to be explicit. */}
        <a href="https://dribbble.com/the-genesis" target="_blank" rel="noopener noreferrer">
          <DribbbleIcon />
        </a>{' '}
        <a href="https://medium.com/@anosikegenesis" target="_blank" rel="noopener noreferrer">
          <MediumIcon />
        </a>
      </div>

      <div className="buttons-div">
        <a href="#contact-me" className="btn">
          Contact me
        </a>
      </div>
    </section>
  )
}
