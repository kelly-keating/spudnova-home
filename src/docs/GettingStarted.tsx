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
        <pre>
          <code>npm install @spudnova-ui/components</code>
        </pre>
        <h3>Usage</h3>
        <p>
          To use the provided styles you need to import the styles in the root
          component of your App (or wherever you want the styles to be applied):
        </p>
        <pre>
          <code>'@spudnova-ui/components/style.css'</code>
        </pre>
        <p>
          You can then use the components in your project as you like, importing
          them where needed:
        </p>
        <pre>
          <code>
            import {'{'} Button {'}'} from '@spudnova-ui/components'
          </code>
        </pre>
      </div>
    </>
  )
}

export default GettingStarted
