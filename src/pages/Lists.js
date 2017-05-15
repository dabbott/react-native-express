import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const content = markdown(markdownOptions)`
Lists are like ScrollViews, but optimized to recycle elements and reduce re-renders for better performance. As a result, the APIs are a little more complicated than ScrollView. The built-in list components in React Native are still evolving, so you can expect more stability and performance from these in the future.

FlatList and SectionList are the new recommended list components for simple, performant lists. They're built on top of VirtualizedList, which is a highly flexible and optimized list implementation, which generally shouldn't be used directly.

However, at the time of writing, both of these are currently missing important features (e.g. sticky headers), and so you may still need to use the previous list component, ListView. 

In general, start with a FlatList or SectionList. Ultimately, switching between these and ListView isn't that difficult or time consuming, so if you need more capabilities down the road, you can switch later.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
