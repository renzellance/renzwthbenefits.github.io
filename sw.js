importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2926ee7dc32c00350e88.js",
    "revision": "dd5702994a52b498224b2bbbdb611016"
  },
  {
    "url": "/_nuxt/51a961422682538f0d46.js",
    "revision": "dc0ded34f28f01bb91fd2df351551b37"
  },
  {
    "url": "/_nuxt/556bfe64ff50f2688075.js",
    "revision": "3e00f34a71d8cbc9efd3ab9960204a79"
  },
  {
    "url": "/_nuxt/ab05da7d44ec3f23c17f.js",
    "revision": "c345ed9a46ffcc3ea898118e96eb068c"
  },
  {
    "url": "/_nuxt/ed39ad23548408305b60.js",
    "revision": "1f94bb19b0e0030139deb137d3d659e9"
  }
], {
  "cacheId": "renzwthbenefits.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
