const withImages = require('next-images')
const slug = require('rehype-slug')

const withGuidebook = require('generate-guidebook/next')({
  guidebookDirectory: './pages',
  guidebookModulePath: './guidebook.js',
})

const withMDX = require('next-mdx-frontmatter')({
  extension: /\.mdx?$/,
  MDXOptions: {
    rehypePlugins: [slug],
  },
})

const withRawExampleLoader = (nextConfig) => ({
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /examples(\/|\\)files(\/|\\).*$/,
      use: 'raw-loader',
    })

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = withRawExampleLoader(
  withGuidebook(
    withImages(
      withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
      })
    )
  )
)
