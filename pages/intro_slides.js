import React from 'react'
import SpectacleSlideshow from '../components/SpectacleSlideshow'

const introSlides = require('!!babel-loader!spectacle-mdx-loader!../slides/intro.mdx')

const slides = introSlides.default.map((slide, index, list) => {
  return {
    sectionName: `Intro`,
    SlideComponent: slide,
    NotesComponent: introSlides.notes[index],
  }
})

export default () => <SpectacleSlideshow slides={slides} />
