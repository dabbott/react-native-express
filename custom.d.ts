declare module '*.png'
declare module '*.svg'

namespace Config {
  interface Disqus {
    shortname: string
    stagingShortname?: string
  }

  interface GoogleAnalytics {
    trackingId: string
  }

  interface Github {
    user: string
    repo: string
  }

  interface Facebook {
    appId: string
  }

  interface Location {
    host: string
  }

  interface Author {
    twitter: string
  }

  interface PreviewImage {
    type: string
    width: string
    height: string
    alt: string
    path: string
  }

  interface Favicon {
    type: string
    path: string
  }

  interface Guidebook {
    location?: Location
    author?: Author
    previewImage?: PreviewImage
    favicons?: Favicon[]
    disqus?: Disqus
    googleAnalytics?: GoogleAnalytics
    github?: Github
    facebook?: Facebook
  }
}
