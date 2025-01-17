import { Navbar } from 'spudnova-ui'

function Nav() {
  return (
    <Navbar
      shadow
      left={
        <img
          src='/logos/spudnova_title_b.svg'
          alt='Spudnova Logo'
          style={{ width: '200px' }}
        />
      }
      right={
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a href='/#scrollDown'>Docs</a>
          <a
            href='https://github.com/kelly-keating/spudnova-components'
            target='_blank'
            style={{ height: '40px' }}
          >
            <img
              src='/github-mark.svg'
              alt='GitHub'
              style={{ height: '40px' }}
            />
          </a>
          <a
            href='https://www.npmjs.com/package/@spudnova-ui/components'
            target='_blank'
            style={{ height: '40px' }}
          >
            <img
              src='/npm-logo.svg'
              alt='GitHub'
              style={{ height: '30px', padding: '5px 0' }}
            />
          </a>
        </div>
      }
    />
  )
}

export default Nav
