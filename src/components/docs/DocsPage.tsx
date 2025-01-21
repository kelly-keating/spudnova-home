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
      <h4>Example configuration</h4>
      {/* TODO: add commenting if file location important */}
      <Code codeLines={code_example} />
      <h3>Parameters</h3>
      {required && <Table headers={keys} data={required} />}
      {optional && <Table headers={keys} data={optional} />}
    </div>
  )
}

export default DocsPage
