import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/markdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `const animals = ['cat', 'dog', 'moose']
const newAnimals = [...animals]
const lotsOfAnimals = [...animals, 'bear', 'mouse', 'donkey']
const fruits = [{name: 'banana', color: 'yellow'}, {name: 'apple', color: 'red'}]
const newFruits = [...fruits]
console.log(fruits[0] === newFruits[0]) // true
newFruits[0].name = 'fofana'
console.log(fruits[0].name) // fofana`

const content = markdown(markdownOptions)`
The array spread syntax makes it easy to expand an array. This can be used to make a shallow copy of an array, optionally with other elements added to the copy.

<EditorTranspiler
  code=${code}
  title=${'Array spread'}
/>
`

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"Gabe G'Sell"}
      authorURL={'http://gabegsell.com/'}
    />
    {content}
  </Page>
