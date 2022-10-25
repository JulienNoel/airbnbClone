/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoianVsaWVuLW5vZWwiLCJhIjoiY2w5b2FyNHNhMGU0YzN2azR0cGpsODcxNSJ9.4Fq8cKIzAplLzsWBBLE8Zw',
  }
}

module.exports = nextConfig
