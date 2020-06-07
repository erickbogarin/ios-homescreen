const withPWA = require('next-pwa')
const withImages = require('next-images')

module.exports = withImages(
  withPWA({
    devIndicators: {
      autoPrerender: false,
    },
    pwa: {
      dest: 'public',
    },
  }),
)
