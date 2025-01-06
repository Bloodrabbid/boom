/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Поддерживаемые форматы — указываем, чтобы при возможности Next сам генерировал WebP/AVIF
    formats: ['image/avif', 'image/webp'],

    // Если изображения используются с внешних доменов, добавляем их в список
    domains: [
      'static-maps.yandex.ru',
      'images.unsplash.com',
      'api-maps.yandex.ru'
    ],
    // deviceSizes, imageSizes — опционально, если вам нужно более детально контролировать вывод
  },
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;