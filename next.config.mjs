/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'upload.wikimedia.org',
            },
          ],
    },
    i18n: {
      defaultLocale: 'ru',
      locales: ['ru', 'en'],
      defaultLocale: 'ru'
    },
    swcMinify: true
};

export default nextConfig;
