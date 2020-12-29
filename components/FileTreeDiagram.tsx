import { Code, Pre } from 'react-guidebook'
import { diagram } from 'tree-visit/lib/diagram'

type Node = {
  name: string
  children?: Node[]
}

const normalizeNode = (node: Node) =>
  typeof node === 'string' ? { name: node } : node

interface Props {
  children: () => Node
}

export default function FileTreeDiagram({ children }: Props) {
  const root = children()

  const output = diagram(root, {
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
    flattenSingleChildNodes: false,
  })

  return (
    <Pre
      style={{
        border: '1px solid rgba(0,0,0,0.05)',
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
