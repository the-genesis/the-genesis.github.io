import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Import order matters — it reproduces the <link> order from the old index.html
// (style, then mobile, then sidenav). These stylesheets override one another by
// re-declaring the same selectors, so reordering them changes the rendering.
import './styles/style.css'
import './styles/mobile.css'
import './styles/sidenav.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
