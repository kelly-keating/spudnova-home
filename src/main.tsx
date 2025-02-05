import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import '@spudnova-ui/components/style.css'
import { ThemeSetter } from '@spudnova-ui/components'

import './index.css'

import App from './components/App.tsx'
import Nav from './components/Nav.tsx'
import GettingStarted from './components/GettingStarted.tsx'

import DocsTemplate from './components/docs/DocsTemplate.tsx'
import DocsMenu from './components/docs/DocsMenu.tsx'
import DocsPage from './components/docs/DocsPage.tsx'

const myTheme = {
  // textColor: '#99ddcb',
  // textAlt: '#ef8354',
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeSetter theme={myTheme} />
      <Nav />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='getting-started' element={<GettingStarted />} />

        <Route path='docs' element={<DocsTemplate />}>
          <Route index element={<DocsMenu />} />
          <Route path=':docId' element={<DocsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
