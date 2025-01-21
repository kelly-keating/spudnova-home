import { Link } from 'react-router'
import './App.css'

function App() {
  return (
    <>
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

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '-50px',
        }}
      >
        <Link to='getting-started'>Get Started</Link>
        <Link to='docs'>Docs</Link>
      </div>
    </>
  )
}

export default App
