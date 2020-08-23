import 'reset-css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
import '../styles/main.css'

import React from 'react'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
import Router from 'next/router'
import { Page, PageComponents, findNode } from 'react-guidebook'
import { pageView } from '../utils/Analytics'
import colors from '../styles/colors'
import textStyles from '../styles/textStyles'
import slidesTheme from '../styles/slidesTheme'
import EditorConsole from '../components/EditorConsole'
import Author from '../components/Author'
import Disqus from '../components/Disqus'
import BookBanner from '../components/BookBanner'
import FileTreeDiagram from '../components/FileTreeDiagram'
import logo from '../images/logo.svg'
import guidebook from '../guidebook'
import NotFound from '../components/NotFound'

const theme = {
  colors: colors,
  textStyles: textStyles,
}

const Components = {
  ...PageComponents,
  Example: EditorConsole,
  Author,
  FileTreeDiagram: FileTreeDiagram,
  Details: ({ children }) => children,
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const node = findNode(guidebook, router.pathname.slice(1))

    if (!node) {
      return (
        <ThemeProvider theme={theme}>
          <NotFound />
        </ThemeProvider>
      )
    }

    const isIntroduction = node.slug === ''

    return router.pathname.endsWith('slides') ? (
      <ThemeProvider theme={slidesTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={theme}>
        {/* Fragment needed for React.Children.only */}
        <>
          <Helmet title={node.title}>
            <html lang="en" />
            <meta property="og:title" content={node.title} />
          </Helmet>
          <MDXProvider components={Components}>
            <Page
              rootNode={guidebook}
              logo={logo}
              footer={
                <>
                  {isIntroduction ? undefined : <BookBanner />}
                  {isIntroduction ? undefined : (
                    <Disqus
                      title={node.title}
                      identifier={node.slug}
                      shortname={'reactnativeexpress'}
                      stagingShortname={'reactnativeexpress-staging'}
                    />
                  )}
                </>
              }
            >
              <Component {...pageProps} />
            </Page>
          </MDXProvider>
        </>
      </ThemeProvider>
    )
  }
}

if (typeof document !== 'undefined') {
  pageView()
  Router.onRouteChangeComplete = pageView
}
