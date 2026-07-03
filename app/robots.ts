import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.uvaco.info/sitemap.xml',
    host: 'https://www.uvaco.info',
  };
}
