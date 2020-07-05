import React from 'react'
import path from 'path'

/**
 * @typedef {{ SlideComponent: React.Component, NotesComponent: React.Component, sectionName: string }} Slide
 */

/**
 * @param {import('react-guidebook').TreeNode[]} node
 * @param {(pagePath: string) => any} requireModule
 * @returns {Slide[]}
 */
export default function requireSlides(nodePath, requireModule) {
  const last = nodePath[nodePath.length - 1]

  return [
    requireSlide(nodePath, requireModule),
    ...last.children.map((child) =>
      requireSlides([...nodePath, child], requireModule)
    ),
  ].flat()
}

/**
 * @param {import('react-guidebook').TreeNode[]} node
 * @param {(pagePath: string) => any} requireModule
 * @returns {Slide[]}
 */
function requireSlide(nodes, requireModule) {
  const nodePath = nodes
    .map((node) => path.basename(node.file, '.mdx'))
    .join('/')

  const module = requireModule(nodePath)

  const { default: slideComponents, notes: notesComponents } = module

  const slides = []

  for (let i = 0; i < slideComponents.length; i++) {
    const slidePath = nodes.map((node) => node.title)

    const slideIndex =
      slideComponents.length > 1
        ? ' (' +
          (i + 1).toString() +
          '/' +
          slideComponents.length.toString() +
          ')'
        : ''

    slides.push({
      SlideComponent: slideComponents[i],
      NotesComponent: notesComponents[i],
      sectionName: slidePath.join(' / ') + slideIndex,
    })
  }

  return slides
}
