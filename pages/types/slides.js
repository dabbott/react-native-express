import React from 'react'

import Slideshow from '../../components/Slideshow'
import * as index from '!!babel-loader!spectacle-mdx-loader!./index.mdx'
import * as primitive_types from '!!babel-loader!spectacle-mdx-loader!./primitive_types.mdx'
import * as type_names from '!!babel-loader!spectacle-mdx-loader!./type_names.mdx'
import * as reference_types from '!!babel-loader!spectacle-mdx-loader!./reference_types.mdx'
import * as nullability from '!!babel-loader!spectacle-mdx-loader!./nullability.mdx'
import * as library_types from '!!babel-loader!spectacle-mdx-loader!./library_types.mdx'

export default () => (
  <Slideshow
    sources={[
      index,
      primitive_types,
      reference_types,
      library_types,
      nullability,
      type_names,
    ]}
  />
)
