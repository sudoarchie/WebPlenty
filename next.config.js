/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
  }
module.exports ={
  nextConfig,
  images: {
    domains: ['shivam-practics-bucket.s3.ap-south-1.amazonaws.com'],
  },


} 
