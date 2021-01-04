import App, { AppInitialProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import ReactGA from 'react-ga'
import React, { useMemo } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import type { AppProps, AppContext } from 'next/app'
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
import { searchPages, searchTextMatch } from '../utils/search'
import pkg from '../package.json'
import type { TreeNode } from 'generate-guidebook'

const config: GuidebookConfig = pkg.guidebook ?? {}
const { locales, defaultLocale } = (config as any).i18n as {
  locales: string[]
  defaultLocale: string
}

const Components = {
  ...PageComponents,
  Example: EditorConsole,
  Author,
  FileTreeDiagram,
  Details: ({ children }: { children: React.ReactNode }) => children,
}

const isExternalLink = (href: string): boolean => !!/https?:/.exec(href)

export default function GuidebookApp({
  Component,
  pageProps,
  router,
  locale,
  guidebook,
}: AppProps & {
  locale: string
  guidebook: TreeNode
}) {
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`

  const LinkComponent = useMemo(() => {
    return ({ href, children, style }: LinkProps) => {
      const localizedHref = isExternalLink(href)
        ? href
        : `${localePrefix}${href}`

      return (
        <Link href={localizedHref}>
          <Anchor style={style}>{children}</Anchor>
        </Link>
      )
    }
  }, [localePrefix])

  const slug = router.pathname.slice(1 + localePrefix.length)
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
              locale === 'en' ? (
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
              ) : undefined
            }
            searchPages={locale === 'en' ? searchPages : undefined}
            searchTextMatch={locale === 'en' ? searchTextMatch : undefined}
          >
            <Component {...pageProps} />
          </Page>
        </MDXProvider>
      )
    }
  }

  const routerWithLocale = useMemo(
    () => ({
      pathname: `/${slug}`,
      asPath: `/${slug}`,
      push: (pathname: string) => router.push(`/${locale}${pathname}`),
    }),
    [locale, router.pathname, router.asPath]
  )

  return (
    <>
      <Head>
        {HeadTags({
          config: pkg.guidebook ?? {},
          pageTitle: title,
          pageDescription: description,
        })}
      </Head>
      <RouterProvider value={routerWithLocale}>
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

GuidebookApp.getInitialProps = async (appContext: AppContext) => {
  const router = appContext.router
  const appProps = await App.getInitialProps(appContext)

  const locale =
    locales.find((item) => router.asPath.startsWith(`/${item}`)) ??
    defaultLocale

  return {
    ...appProps,
    locale,
    guidebook: (await import(`../guidebook-${locale}.js`)).default,
  }
}

if (typeof document !== 'undefined' && config.googleAnalytics) {
  const pageView = () => trackPageView(ReactGA)

  initializeAnalytics(ReactGA, config.googleAnalytics.trackingId)
  pageView()
  ;(Router as any).onRouteChangeComplete = pageView
}
