import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import guidebook from '../guidebook'
import pkg from '../package.json'

const config: Config.Guidebook = pkg.guidebook ?? {}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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
          {/* Site description */}
          <meta name="description" content={guidebook.subtitle} />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content={guidebook.title} />
          <meta property="og:description" content={guidebook.subtitle} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:card" content="summary" />

          {/* Location */}
          {config.location && (
            <meta
              property="og:url"
              content={`https://${config.location.host}`}
            />
          )}

          {/* Favicon */}
          {config.favicons?.map(({ type, path }, index) => (
            <link key={index} rel="icon" type={type} href={path} />
          ))}

          {/* Author */}
          {config.author && (
            <>
              <meta
                property="og:creator"
                content={`@${config.author.twitter}`}
              />
              <meta
                property="article:author"
                content={`https://twitter.com/${config.author.twitter}`}
              />
            </>
          )}

          {/* Preview Image */}
          {config.location && config.previewImage && (
            <>
              <meta
                property="og:image"
                content={`http://${config.location.host}${config.previewImage.path}`}
              />
              <meta
                property="og:image:secure_url"
                content={`https://${config.location.host}${config.previewImage.path}`}
              />
              <meta
                property="og:image:type"
                content={config.previewImage.type}
              />
              <meta
                property="og:image:width"
                content={config.previewImage.width}
              />
              <meta
                property="og:image:height"
                content={config.previewImage.height}
              />
              <meta property="og:image:alt" content={config.previewImage.alt} />
            </>
          )}

          {/* Twitter */}
          {config.author?.twitter && (
            <>
              <meta name="twitter:card" content="summary"></meta>
              <meta
                name="twitter:creator"
                content={`@${config.author.twitter}`}
              />
              {config.location && config.previewImage && (
                <meta
                  name="twitter:image"
                  content={`https://${config.location.host}${config.previewImage.path}`}
                />
              )}
            </>
          )}

          {/* Facebook */}
          {config.facebook && (
            <meta property="fb:app_id" content={config.facebook.appId} />
          )}

          {/* Output the styles in the head  */}
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
