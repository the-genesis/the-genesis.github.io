import { useState } from 'react'
import Overlay from './components/Overlay'
import NavIcon from './components/NavIcon'
import Sidenav from './components/Sidenav'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [sidenavIsOpen, setSidenavIsOpen] = useState(false)

  return (
    <>
      <Overlay isOpen={sidenavIsOpen} onClose={() => setSidenavIsOpen(false)} />
      <NavIcon isOpen={sidenavIsOpen} onToggle={() => setSidenavIsOpen((open) => !open)} />
      <Sidenav isOpen={sidenavIsOpen} />

      <div className={`wrapper${sidenavIsOpen ? ' wrapper-alt' : ''}`}>
        <Hero />
        <About />
        <Works />
        <Contact />
      </div>

      <Footer />
    </>
  )
}
