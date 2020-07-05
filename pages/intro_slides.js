import React from 'react'
import Slideshow from '../components/Slideshow'

const introSlides = require('!!babel-loader!spectacle-mdx-loader!../slides/intro.mdx')

/**
 * @type {import('../utils/requireSlides').Slide[]}
 */
const slides = introSlides.default.map((slide, index, list) => {
  return {
    sectionName: `Intro`,
    SlideComponent: slide,
    NotesComponent: introSlides.notes[index],
  }
})

export default () => <Slideshow slides={slides} />
