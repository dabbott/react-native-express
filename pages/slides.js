import React from 'react'
import SpectacleSlideshow from '../components/SpectacleSlideshow'

const introSlides = require('!!babel-loader!spectacle-mdx-loader!../slides/index.mdx')

const slides = introSlides.default.map((slide, index) => {
  return {
    sectionName: ``,
    SlideComponent: slide,
    NotesComponent: introSlides.notes[index],
  }
})

export default () => <SpectacleSlideshow slides={slides} />
