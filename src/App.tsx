import './App.css'

import Nav from './Nav'
import GettingStarted from './docs/GettingStarted'
import DocsMenu from './docs/DocsMenu'

function App() {
  return (
    <>
      <Nav />
      <div
        style={{
          height: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <div>
          <img alt='SpudNova Logo' src='/logos/spudnova_logo.svg' />
        </div>
        <p>
          <em>
            A simple component library for building React pages with no fuss.
          </em>
        </p>
      </div>
      <div id='scrollDown'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            className='btn-scroll'
            href='#scrollDown'
            style={{
              position: 'absolute',
              marginTop: '-150px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <p>Docs</p> {/* TODO: At 600px stop showing */}
            <img
              alt='Scroll Down'
              src='/arrow_down.svg'
              style={{ height: '50px', marginLeft: '5px' }}
            />
          </a>
        </div>
        <div>
          <GettingStarted />
          <DocsMenu />
        </div>
      </div>
    </>
  )
}

export default App
