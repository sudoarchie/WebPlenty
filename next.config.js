/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
   
  }
module.exports ={
  nextConfig,
  images: {
    domains: ['webplentybackend.s3.ap-south-1.amazonaws.com'],
    unoptimized: true
  },
  typescript:{
    ignoreBuildErrors:true
  }


} 
