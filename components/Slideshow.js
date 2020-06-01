import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import { ThemeContext } from './EditorConsole'

const splitSources = imports =>
  imports.reduce(
    (result, element) => {
      result.slides.push(...element.default)
      result.notes.push(...element.notes)
      return result
    },
    { slides: [], notes: [] }
  )

const theme = {
  size: {
    width: 1366,
    height: 768,
    // width: 1920,
    // height: 1080,
    maxCodePaneHeight: 200,
  },
  colors: {
    primary: 'black',
    secondary: 'rgb(100,100,100)',
    tertiary: 'white',
    quaternary: '#EFD251',
    quinary: 'orange',
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Menlo", monospace',
  },
  fontSizes: {
    h1: '72px',
    h2: '48px',
    h3: '36px',
    text: '24px',
    monospace: '20px',
  },
  space: [8, 16, 32],
}

const styles = {
  heading: {
    textDecoration: 'underline',
    textDecorationColor: theme.colors.quaternary,
  },
}

export default dynamic(
  () =>
    import('spectacle').then(spectacle => {
      const {
        Deck,
        FlexBox,
        Slide,
        Box,
        Progress,
        FullScreen,
        Notes,
        mdxComponentMap,
      } = spectacle

      const components = {
        ...mdxComponentMap,
        h2: props => <mdxComponentMap.h2 {...props} style={styles.heading} />,
        h1: props => <mdxComponentMap.h1 {...props} style={styles.heading} />,
        blockquote: props => null,
        // blockquote: props => {
        //   console.log('code', props)
        //   return (
        //     <blockquote
        //       style={{
        //         opacity: 0.5,
        //         borderLeft: `2px solid ${theme.colors.secondary}`,
        //         padding: 0,
        //         marginLeft: theme.space[1],
        //         marginBottom: theme.space[2],
        //       }}
        //       {...props}
        //     />
        //   )
        // },
        code: props => {
          console.log('code', props)
          return <code {...props} style={{ backgroundColor: 'teal' }} />
        },
        strong: props => <strong {...props} style={{ fontWeight: 'bold' }} />,
        em: props => (
          <em
            {...props}
            style={{
              fontStyle: 'italic',
              color: theme.colors.secondary,
              textDecoration: 'underline',
            }}
          />
        ),
      }

      console.log(components)

      const template = () => (
        <FlexBox
          justifyContent="center"
          position="absolute"
          bottom={0}
          width={1}
        >
          <Box padding={0.5} alignItems="center">
            <Progress color={theme.colors.secondary} size={20} />
          </Box>
          {/* <Box padding="0 1em">
            <FullScreen />
          </Box> */}
        </FlexBox>
      )

      const Presentation = ({ sources = [] }) => {
        const { slides, notes } = splitSources(sources)

        return (
          <ThemeContext.Provider value="slides">
            <MDXProvider components={components}>
              <Deck loop theme={theme} template={template}>
                {slides
                  .map((MDXSlide, i) => [MDXSlide, notes[i]])
                  .map(([MDXSlide, MDXNote], i) => (
                    <Slide key={`slide-${i}`} slideNum={i}>
                      <MDXSlide />
                      <Notes>
                        <MDXNote />
                      </Notes>
                    </Slide>
                  ))}
              </Deck>
            </MDXProvider>
          </ThemeContext.Provider>
        )
      }

      return Presentation
    }),
  {
    ssr: false,
  }
)
