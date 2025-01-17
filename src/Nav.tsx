import { Navbar } from 'spudnova-ui'

function Nav() {
  return (
    <Navbar
      left={
        <img
          src='/logos/spudnova_title_b.svg'
          alt='Spudnova Logo'
          style={{ width: '200px' }}
        />
      }
      right={
        <a
          href='https://github.com/kelly-keating'
          target='_blank'
          style={{ height: '40px' }}
        >
          <img src='/github-mark.svg' alt='GitHub' style={{ height: '40px' }} />
        </a>
      }
      shadow
    />
  )
}

export default Nav
