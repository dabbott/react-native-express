import React from 'react'
import { findNodeBySlug, requireSlides, TreeNode } from 'react-guidebook'
import SpectacleSlideshow from './SpectacleSlideshow'

const guidebook: TreeNode = require('../guidebook')

function requireModule(id) {
  return require('!!babel-loader!spectacle-mdx-loader!../pages/' + id + '.mdx')
}

export default ({ sectionName }) => {
  const root = findNodeBySlug(guidebook, sectionName)
  const slides = requireSlides(root, requireModule)

  return <SpectacleSlideshow slides={slides} />
}
