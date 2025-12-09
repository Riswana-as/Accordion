import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Accordion.jsx'
import Accordion from './Accordion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion />
  </StrictMode>,
)
