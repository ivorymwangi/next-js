/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js which outside websites are allowed as image
  // sources for the <Image /> component. We're using placehold.co
  // for placeholder images right now — once you swap in your own
  // photos (see README), you can remove this.
  images: {
    domains: ['placehold.co'],
  },
};

module.exports = nextConfig;
