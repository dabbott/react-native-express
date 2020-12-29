import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import guidebook from '../guidebook'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head lang="en">
          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />

          {/* Site description */}
          <meta name="description" content={guidebook.subtitle} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://www.reactnative.express/" />
          <meta property="og:site_name" content={guidebook.title} />
          <meta property="og:description" content={guidebook.subtitle} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:card" content="summary" />
          <meta property="og:creator" content="@dvnabbott" />
          <meta
            property="article:author"
            content="https://twitter.com/dvnabbott"
          />

          {/* Image */}
          <meta
            property="og:image"
            content="http://www.reactnative.express/static/preview.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://www.reactnative.express/static/preview.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:creator" content="@dvnabbott" />
          <meta
            name="twitter:image"
            content="https://www.reactnative.express/static/preview.png"
          />

          {/* Facebook */}
          <meta property="fb:app_id" content="907755649360812" />

          {/* Step 5: Output the styles in the head  */}
          {(this.props as any).styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
