/** @type {import('next').NextConfig} */
const nextConfig = {}


// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'image.tmdb.org',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
//   }

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          port: '',
          pathname: '/my-bucket/**',
        },
      ],
    },
  }