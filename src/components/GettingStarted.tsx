import { Code } from '@spudnova-ui/components'
import { Link } from 'react-router'

function GettingStarted() {
  return (
    <>
      <h2>Getting Started</h2>
      <div>
        <h3>Installation</h3>
        <p>
          To install SpudNova UI, run the following command in your project
          directory:
        </p>
        <Code>npm install @spudnova-ui/components</Code>
        <h3>Usage</h3>
        <p>
          To use the provided styles you need to import the styles in the root
          component of your App (make sure you import this before importing any
          files containing custom styling files):
        </p>
        <Code>import '@spudnova-ui/components/style.css'</Code>
        <p>
          You can then use the components in your project as you like, importing
          them where needed:
        </p>
        <Code>
          import {'{'} Button {'}'} from '@spudnova-ui/components'
        </Code>
      </div>
      <Link to='/docs'>Read about the components</Link>
    </>
  )
}

export default GettingStarted
