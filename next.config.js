const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    mode: "production",
    register: true,
    skipWaiting: true,
  },
})
