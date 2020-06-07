const withPWA = require('next-pwa')
const withImages = require('next-images')

const pwa = (module.exports = withPWA({
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public',
  },
}))

const images = withImages()

module.exports = {
  ...pwa,
  ...images,
}
