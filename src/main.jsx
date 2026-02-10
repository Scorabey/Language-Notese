import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import Footer from './shared/ui/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
