/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/go/hims',
        destination: process.env.AFFILIATE_HIMS_URL || '/',
        permanent: false,
      },
      {
        source: '/go/roman',
        destination: process.env.AFFILIATE_ROMAN_URL || '/',
        permanent: false,
      },
      {
        source: '/go/ro',
        destination: process.env.AFFILIATE_RO_URL || '/',
        permanent: false,
      },
      {
        source: '/go/hers',
        destination: process.env.AFFILIATE_HERS_URL || '/',
        permanent: false,
      },
      {
        source: '/go/nurx',
        destination: process.env.AFFILIATE_NURX_URL || '/',
        permanent: false,
      },
      {
        source: '/go/keeps',
        destination: process.env.AFFILIATE_KEEPS_URL || '/',
        permanent: false,
      },
      {
        source: '/go/noom',
        destination: process.env.AFFILIATE_NOOM_URL || '/',
        permanent: false,
      },
      {
        source: '/go/betterhelp',
        destination: process.env.AFFILIATE_BETTERHELP_URL || '/',
        permanent: false,
      },
      {
        source: '/go/rexmd',
        destination: process.env.AFFILIATE_REXMD_URL || '/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
