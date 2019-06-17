const withCSS = require('@zeit/next-css')

const withImages = require('next-images')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const withRawExampleLoader = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /examples\/files\/.*\.js$/,
        use: 'raw-loader',
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}

module.exports = withRawExampleLoader(
  withImages(
    withCSS(
      withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
      })
    )
  )
)
