import { Navbar, VisuallyHidden } from '@spudnova-ui/components'
import { Link } from 'react-router'

function Nav() {
  return (
    <Navbar
      shadow
      className='bg-3'
      left={
        <Link to='/' aria-label='Home - Spudnova UI'>
          <img
            src='/logos/spudnova_title_b.svg'
            alt='Spudnova Logo'
            style={{ width: '200px' }}
          />
          <VisuallyHidden>Home - Spudnova UI</VisuallyHidden>
        </Link>
      }
      right={
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a
            aria-label='NPM'
            href='https://www.npmjs.com/package/@spudnova-ui/components'
            target='_blank'
            style={{ height: '40px' }}
          >
            <img
              src='/npm-logo.svg'
              alt='GitHub'
              style={{ height: '30px', padding: '5px 0' }}
            />
            <VisuallyHidden>NPM</VisuallyHidden>
          </a>
          <a
            aria-label='GitHub'
            href='https://github.com/kelly-keating/spudnova-components'
            target='_blank'
            style={{ height: '40px' }}
          >
            <img
              src='/github-mark.svg'
              alt='GitHub'
              style={{ height: '40px' }}
            />
            <VisuallyHidden>GitHub</VisuallyHidden>
          </a>
        </div>
      }
    />
  )
}

export default Nav
