import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'spudnova-ui/style.css'
import { ThemeSetter } from 'spudnova-ui'

import './index.css'

import App from './App.tsx'

const myTheme = {
  secondaryColor: '#97bbb1',
  textColor: '#99ddcb',
  textAlt: '#ef8354',
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeSetter theme={myTheme} />
    <App />
  </StrictMode>
)
