import React, { createContext, useContext } from 'react'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import EditorConsole from './EditorConsole'
import { PageComponents } from 'react-guidebook'

const NotesContext = createContext(false)

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
  space: [16, 32, 64],
}

const styles = {
  heading: {
    textDecoration: 'underline',
    textDecorationColor: theme.colors.quaternary,
    marginTop: '20px',
  },
  em: {
    fontStyle: 'italic',
    color: theme.colors.secondary,
    textDecoration: 'underline',
  },
  strong: {
    fontWeight: 'bold',
  },
}

// Load spectacle dynamically, since it doesn't work with SSR
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

      const slideComponentMap = {
        ...mdxComponentMap,
        ...PageComponents,
        Example: props => <EditorConsole variant="slides" {...props} />,
        Details: () => null,
        h2: props => <PageComponents.h2 {...props} style={styles.heading} />,
        h1: props => <PageComponents.h2 {...props} style={styles.heading} />,
        blockquote: props => null,
      }

      const notesComponentMap = {
        ...Object.fromEntries(
          Object.entries(slideComponentMap).map(([key, Component]) => [
            key,
            props => {
              const isVisible = useContext(NotesContext)
              return isVisible && <Component {...props} />
            },
          ])
        ),
        blockquote: props => (
          <NotesContext.Provider value={true}>
            <PageComponents.blockquote {...props} />
          </NotesContext.Provider>
        ),
      }

      const template = () => (
        <FlexBox
          justifyContent="center"
          position="absolute"
          bottom={0}
          width={1}
        >
          <Box padding={0.5} alignItems="center">
            <Progress color={'black'} size={16} />
          </Box>
          {/* <Box padding="0 1em">
            <FullScreen />
          </Box> */}
        </FlexBox>
      )

      const Presentation = ({ slides }) => {
        return (
          <MDXProvider components={slideComponentMap}>
            <Deck loop theme={theme} template={template}>
              {slides.map(({ SlideComponent, sectionName }, i) => (
                <Slide key={`slide-${i}`} slideNum={i}>
                  <PageComponents.strong>
                    <a
                      href="/slides"
                      style={{
                        color: '#337ab7',
                        textDecoration: 'none',
                      }}
                    >
                      Index
                    </a>
                    {sectionName ? ` / ${sectionName}` : sectionName}
                  </PageComponents.strong>
                  <SlideComponent spectacle={spectacle} />
                  <Notes>
                    <MDXProvider components={notesComponentMap}>
                      <div style={{ backgroundColor: 'white' }}>
                        <SlideComponent />
                      </div>
                    </MDXProvider>
                  </Notes>
                </Slide>
              ))}
            </Deck>
          </MDXProvider>
        )
      }

      return Presentation
    }),
  {
    ssr: false,
  }
)
