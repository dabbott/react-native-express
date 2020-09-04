import React from 'react'
import { findNodeBySlug, requireSlides } from 'react-guidebook'
import guidebook from '../guidebook'
import SpectacleSlideshow from './SpectacleSlideshow'

function requireModule(id) {
  return require('!!babel-loader!spectacle-mdx-loader!../pages/' + id + '.mdx')
}

export default ({ sectionName }) => {
  const root = findNodeBySlug(guidebook, sectionName)
  const slides = requireSlides(root, requireModule)

  return <SpectacleSlideshow slides={slides} />
}
