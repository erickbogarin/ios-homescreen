const withPWA = require('next-pwa')

module.exports = withPWA({
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public',
  },
})
