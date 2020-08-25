import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import React from 'react'
import { Slideshow } from 'react-guidebook'

import EditorConsole from './EditorConsole'

const Example = (props) => <EditorConsole variant="slides" {...props} />

// Load spectacle dynamically, since it doesn't work with SSR
export default dynamic(
  () =>
    import('spectacle').then((spectacle) => {
      return ({ slides }) => (
        <Slideshow
          slides={slides}
          slidesPagePath="/slides"
          MDXProvider={MDXProvider}
          spectacle={spectacle}
          Example={Example}
        />
      )
    }),
  {
    ssr: false,
  }
)
