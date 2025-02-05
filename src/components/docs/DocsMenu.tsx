import { Link } from 'react-router'
import { Card, FlexGrid } from '@spudnova-ui/components'

import { docsList } from './data'

function DocsMenu() {
  const renderTiles = (
    title: string,
    list: { name: string; link: string; icon: string }[]
  ) => (
    <div style={{ width: 'fit-content' }}>
      <h3>{title}</h3>
      <FlexGrid>
        {list.map((doc) => (
          <Card
            key={doc.link}
            content={<Link to={doc.link}>{doc.name}</Link>}
            titleImg={{ src: '/icons/' + doc.icon, alt: doc.name + ' icon' }}
          />
        ))}
      </FlexGrid>
    </div>
  )

  return (
    <div>
      <h2>Components</h2>
      {renderTiles('Blocks', docsList.blocks)}
      {renderTiles('Utilities', docsList.utilities)}
      {renderTiles('Layouts', docsList.layouts)}
      {renderTiles('Elements', docsList.elements)}
    </div>
  )
}

export default DocsMenu
