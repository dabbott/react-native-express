function createSection2(folder, title) {
  const slug = folder + '/' + title.replace(/ /g, '_').toLowerCase()
  return { depth: 2, title, slug }
}

let sections = [
  {
    hidden: true,
    depth: 0,
    title: 'Learning JavaScript',
    slug: '',
  },
  {
    depth: 0,
    title: 'Environment',
    slug: 'environment/index',
  },
  {
    depth: 1,
    title: 'Quick Start',
    slug: 'environment/quick_start',
  },
  {
    depth: 0,
    title: 'Language',
    slug: 'chapters/language',
  },
  {
    depth: 1,
    title: 'Fundamentals',
    slug: 'fundamentals/index',
  },
  createSection2('fundamentals', 'Primitive Types'),
  createSection2('fundamentals', 'Library Types'),
  createSection2('fundamentals', 'Variables'),
  createSection2('fundamentals', 'Comparisons'),
  createSection2('fundamentals', 'Fancy Syntax'),
]

// Add section numbers. I use semver naming, since it's easy to remember
// how the sections should be numbered and arranged: {major}.{minor}.{patch}.
sections = sections.reduce(
  (acc, section) => {
    const { depth, hidden } = section
    let { major, minor, patch, sections } = acc

    if (hidden) {
      sections.push(section)
      return acc
    }

    if (depth === 0) {
      major++
      minor = 0
      patch = 0
    } else if (depth === 1) {
      minor++
      patch = 0
    } else {
      patch++
    }

    sections.push({ ...section, major, minor, patch })

    return { ...acc, major, minor, patch }
  },
  { sections: [], major: 0, minor: 0, patch: 0 }
).sections

// Add {parent} to patch sections
sections = sections.reduce(
  (acc, section) => {
    let { parent, sections } = acc
    const { depth } = section

    if (depth === 0) {
      sections.push(section)
      parent = null
    } else if (depth === 1) {
      sections.push(section)
      parent = section.slug
    } else {
      sections.push({ ...section, parent })
    }

    return { ...acc, parent }
  },
  { sections: [], parent: null }
).sections

export default sections

const matches = (path, section) => {
  let normalizedPath = path

  if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.slice(1)
  }

  return normalizedPath === section.slug
}

export const getSection = (path, offset = 0) => {
  const index = sections.findIndex(section => matches(path, section))

  if (index === -1) return null

  return sections[index + offset]
}

export const getNextSection = path => getSection(path, 1)

export const getPreviousSection = path => getSection(path, -1)

export const chapters = sections.reduce((ch, section) => {
  const { depth, hidden } = section

  if (hidden) {
    return ch
  }

  if (depth === 0) {
    ch.push([])
  }

  ch[ch.length - 1].push(section)

  return ch
}, [])
