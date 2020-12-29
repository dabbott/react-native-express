import React from 'react'
import type { TreeNode } from 'generate-guidebook'
import { findNodeBySlug, requireSlides } from 'react-guidebook'
import SpectacleSlideshow from './SpectacleSlideshow'

const guidebook: TreeNode = require('../guidebook')

function requireModule(id: string) {
  return require('!!babel-loader!spectacle-mdx-loader!../pages/' + id + '.mdx')
}

export default ({ sectionName }: { sectionName: string }) => {
  const root = findNodeBySlug(guidebook, sectionName)!
  const slides = requireSlides(root, requireModule)

  return <SpectacleSlideshow slides={slides} />
}
