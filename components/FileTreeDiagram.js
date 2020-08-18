import react from 'react'
import { diagram } from 'tree-visit'
import { Pre, Code } from 'react-guidebook'
import colors from '../styles/colors'

const normalizeNode = (node) =>
  typeof node === 'string' ? { name: node } : node

export default function FileTreeDiagram({ children }) {
  const output = diagram(children, {
    getChildren: (node) => {
      const normalized = normalizeNode(node)
      return normalized.children ?? []
    },
    getLabel: (node) => {
      const normalized = normalizeNode(node)
      // return `${'children' in normalized ? '📁' : '📄'} ${normalized.name}`
      return normalized.name
    },
    type: 'directory',
  })

  return (
    <Pre
      style={{
        background: 'white',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: colors.divider,
        padding: '16px 20px',
      }}
    >
      <Code
        style={{
          lineHeight: '1.3',
          fontSize: '14px',
        }}
      >
        {output}
      </Code>
    </Pre>
  )
}
