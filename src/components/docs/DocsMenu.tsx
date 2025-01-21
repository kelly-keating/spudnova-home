import { Link } from 'react-router'

import { docsList } from './data'

function DocsMenu() {
  return (
    <>
      <h2>Components</h2>
      <div>
        <h3>Utilities</h3>
        {docsList.utilities.map((doc) => (
          <Link key={doc.link} to={doc.link}>
            {doc.name}
          </Link>
        ))}
      </div>
      <div>
        <h3>Layouts</h3>
        {docsList.layouts.map((doc) => (
          <Link key={doc.link} to={doc.link}>
            {doc.name}
          </Link>
        ))}
      </div>
      <div>
        <h3>Elements</h3>
        {docsList.elements.map((doc) => (
          <Link key={doc.link} to={doc.link}>
            {doc.name}
          </Link>
        ))}
      </div>
    </>
  )
}

export default DocsMenu
