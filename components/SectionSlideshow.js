import React from 'react'
import { findNode } from 'react-guidebook'
import guidebook from '../guidebook'
import requireSlides from '../utils/requireSlides'
import Slideshow from './Slideshow'

function requireModule(id) {
  return require('!!babel-loader!spectacle-mdx-loader!../pages/' + id + '.mdx')
}

export default ({ sectionName }) => {
  const root = findNode(guidebook, sectionName)

  const slides = requireSlides([root], requireModule)

  return <Slideshow slides={slides} />
}
