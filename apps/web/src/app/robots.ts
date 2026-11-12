import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/'],
    },
    sitemap: 'https://kiru6006.github.io/univ-sainath/sitemap.xml',
  };
}

