/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
	  domains: [
		'ipfs.infura.io',
		'statics-polygon-lens-staging.s3.eu-west-1.amazonaws.com',
		'lens.infura-ipfs.io',
		'ipfs.io',
		'ethereum.org',
		'avatars.githubusercontent.com',
		'bf.zenbit.mx'
	  ],
	},
  }
  
  module.exports = nextConfig