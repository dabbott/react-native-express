import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer, SnackPlayer } from '../components'

const content = markdown(markdownOptions)`
\`SectionList\`s are like \`FlatList\`s, but they can have section headers to separate groups of rows.

\`SectionList\`s render each item in their input \`sections\` using the \`renderSectionHeader\` and \`renderItem\` prop. Each item in \`sections\` should be an object with a unique id (the key), and an array \`data\` of row data. Each item in \`data\` should also be an object with a unique id. The \`renderSectionHeader\` prop is a function which takes an item from the \`sections\` array and maps it to a React Element. The \`renderItem\` prop, just like for \`FlatList\`, is a function which takes an item from the \`data\` array (for a section) and returns a React Element.

# Homogenous Row Example

If each row is rendered with the same \`renderItem\` function, we call this homogenous rendering.

${<SnackPlayer id="HJDgGWugb" />}

# Heterogenous Row Example

A \`renderItem\` function may be specified as part of the \`sections\` data, one per section, rather than as a \`prop\` of the \`SectionList\`. This lets us render each section differently. Alternately, you could use the item data to determine how to render items differently.

${<SnackPlayer id="BJO0NZ_eW" />}
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
