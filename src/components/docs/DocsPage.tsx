import { useParams } from 'react-router'
import { Code, Table } from '@spudnova-ui/components'

import { docsPages } from './data'

function DocsPage() {
  const { docId } = useParams()
  if (!docId || !docsPages[docId]) {
    return <h2>DocsPage: Page not found</h2>
  }

  const { name, code_import, code_example, customization } = docsPages[docId]
  const { keys, required, optional } = customization

  return (
    <div>
      <h2>{name}</h2>
      <h3>Usage</h3>
      <Code codeLines={code_import} />
      <h4>Example use</h4>
      {/* TODO: add commenting if file location important */}
      <Code codeLines={code_example} />
      {(required || optional) && <h3>Parameters</h3>}
      {required && (
        <>
          <h4>Required:</h4>
          <Table
            label='Required parameters'
            hideLabel
            headers={keys}
            data={required}
          />
        </>
      )}
      {optional && (
        <>
          <h4>Optional:</h4>
          <Table
            label='Optional parameters'
            hideLabel
            headers={keys}
            data={optional}
          />
        </>
      )}
    </div>
  )
}

export default DocsPage
