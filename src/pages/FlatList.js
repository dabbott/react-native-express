import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const content = markdown(markdownOptions)`
\`FlatList\`s are used for large quantities of scrollable content. They expose the underlying \`ScrollView\`, but add performance improvements: only rendering the content on screen (clipping offscreen content), and only updating rows that have changed. Like \`ScrollView\`s, they can scroll horizontally or vertically.

Instead of rendering their \`children\` prop, \`FlatList\`s render each item in their input \`data\` using the \`renderItem\` prop. The \`renderItem\` prop is a function which takes an item from the \`data\` array and maps it to a React Element. Each item in \`data\` should be an object with a unique id, so that React can determine when items are rearranged. The unique id is looked up as \`item.key\` by default, but you can specify another way to find/build a the id by passing a \`keyExtractor\` function prop.

# Basic Example

${
  <div>
    <div
      data-snack-id="SyKH_IDeZ"
      data-snack-platform="ios"
      data-snack-preview="true"
      style={{
        overflow: 'hidden',
        background: '#fafafa',
        border: '1px solid rgba(0,0,0,.16)',
        borderRadius: '4px',
        height: '505px',
        width: '100%',
      }}
    />
  </div>
}

`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
