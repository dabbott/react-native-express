import Head from 'next/head'
import Link from 'next/link'
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
  LinkProvider,
  Anchor,
  RouterProvider,
  Banner,
  LinkProps,
  HeadTags,
  GuidebookConfig,
  Styles,
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
import pkg from '../package.json'

const config: GuidebookConfig = pkg.guidebook ?? {}

const Components = {
  ...PageComponents,
  Example: EditorConsole,
  Author,
  FileTreeDiagram,
  Details: ({ children }: { children: React.ReactNode }) => children,
}

const LinkComponent = ({ href, children, style }: LinkProps) => (
  <Link href={href}>
    <Anchor style={style}>{children}</Anchor>
  </Link>
)

export default function App({ Component, pageProps, router }: AppProps) {
  const slug = router.pathname.slice(1)
  const theme = slug.endsWith('slides') ? slidesTheme : defaultTheme

  let content
  let title: string
  let description: string | undefined

  // Serve these pages "bare", without the Page component wrapper
  if (slug.endsWith('slides')) {
    title = 'Slides'
    content = <Component {...pageProps} />
  } else if (slug.endsWith('playgrounds')) {
    title = 'Playgrounds'
    content = <Component {...pageProps} />
  } else {
    const node = findNodeBySlug(guidebook, slug)

    if (!node) {
      title = 'Not found'
      content = <NotFound routeMap={legacyRoutes} />
    } else {
      const isIntroduction = node.slug === ''

      title = node.title
      description = node.subtitle
      content = (
        <MDXProvider components={Components}>
          <Page
            rootNode={guidebook}
            header={
              isIntroduction ? (
                <Banner logo={logo} github={config.github} />
              ) : undefined
            }
            footer={
              <>
                {isIntroduction ? undefined : <BookBanner />}
                {isIntroduction ? undefined : config.disqus ? (
                  <Disqus
                    title={node.title}
                    identifier={node.slug}
                    shortname={config.disqus.shortname}
                    stagingShortname={config.disqus.stagingShortname}
                  />
                ) : undefined}
              </>
            }
            searchPages={searchPages}
            searchTextMatch={searchTextMatch}
          >
            <Component {...pageProps} />
          </Page>
        </MDXProvider>
      )
    }
  }

  return (
    <>
      <Head>
        {HeadTags({
          config: pkg.guidebook ?? {},
          pageTitle: title,
          pageDescription: description,
        })}
      </Head>
      <RouterProvider value={router}>
        <LinkProvider value={LinkComponent}>
          <Styles.Reset />
          <Styles.Main />
          <ThemeProvider theme={theme}>
            {/* A single child is required here for React.Children.only */}
            {content}
          </ThemeProvider>
        </LinkProvider>
      </RouterProvider>
    </>
  )
}

if (typeof document !== 'undefined' && config.googleAnalytics) {
  const pageView = () => trackPageView(ReactGA)

  initializeAnalytics(ReactGA, config.googleAnalytics.trackingId)
  pageView()
  ;(Router as any).onRouteChangeComplete = pageView
}
