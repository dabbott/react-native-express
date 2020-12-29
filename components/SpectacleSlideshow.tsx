import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import React from 'react'
import { Slideshow } from 'react-guidebook'
import { Slide } from 'react-guidebook/lib/utils/requireSlides'

import EditorConsole from './EditorConsole'

const Example = (props: React.ComponentProps<typeof EditorConsole>) => (
  <EditorConsole variant="slides" {...props} />
)

interface Props {
  slides: Slide[]
}

// Load spectacle dynamically, since it doesn't work with SSR
export default dynamic<Props>(
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
