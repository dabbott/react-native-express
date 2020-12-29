import Head from 'next/head'
import Link from 'next/link'
import 'reset-css'
import '../styles/main.css'

import ReactGA from 'react-ga'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import {
  Page,
  Author,
  PageComponents,
  NotFound,
  findNodeBySlug,
  trackPageView,
  initializeAnalytics,
  LinkContext,
  Anchor,
  RouterContext,
  Banner,
} from 'react-guidebook'
import defaultTheme from '../styles/theme'
import slidesTheme from '../styles/slidesTheme'
import EditorConsole from '../components/EditorConsole'
import Disqus from '../components/Disqus'
import BookBanner from '../components/BookBanner'
import FileTreeDiagram from '../components/FileTreeDiagram'
import logo from '../images/logo.svg'
import legacyRoutes from '../utils/legacyRoutes'
import guidebook from '../guidebook'
import { searchPages, searchTextMatch } from '../utils/search'

const Components = {
  ...PageComponents,
  Example: EditorConsole,
  Author,
  FileTreeDiagram: FileTreeDiagram,
  Details: ({ children }) => children,
}

const github = {
  user: 'dabbott',
  repo: 'react-native-express',
}

const LinkComponent = ({ href, children, style }) => (
  <Link href={href}>
    <Anchor style={style}>{children}</Anchor>
  </Link>
)

export default function App({ Component, pageProps, router }: AppProps) {
  const slug = router.pathname.slice(1)
  const theme = slug.endsWith('slides') ? slidesTheme : defaultTheme

  let content

  // Serve these pages "bare", without the Page component wrapper
  if (slug.endsWith('slides') || slug.endsWith('playgrounds')) {
    content = <Component {...pageProps} />
  } else {
    const node = findNodeBySlug(guidebook, slug)

    if (!node) {
      content = <NotFound routeMap={legacyRoutes} />
    } else {
      const isIntroduction = node.slug === ''

      content = (
        <>
          <Head>
            <title>{node.title}</title>
            <meta property="og:title" content={node.title} />
          </Head>
          <MDXProvider components={Components}>
            <Page
              rootNode={guidebook}
              header={
                isIntroduction ? (
                  <Banner logo={logo} github={github} />
                ) : undefined
              }
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
              searchPages={searchPages}
              searchTextMatch={searchTextMatch}
            >
              <Component {...pageProps} />
            </Page>
          </MDXProvider>
        </>
      )
    }
  }

  return (
    <RouterContext.Provider value={router}>
      <LinkContext.Provider value={LinkComponent}>
        <ThemeProvider theme={theme}>
          {/* A single child is required here for React.Children.only */}
          {content}
        </ThemeProvider>
      </LinkContext.Provider>
    </RouterContext.Provider>
  )
}

if (typeof document !== 'undefined') {
  const pageView = () => trackPageView(ReactGA)

  initializeAnalytics(ReactGA, 'UA-77053427-1')
  pageView()
  ;(Router as any).onRouteChangeComplete = pageView
}
