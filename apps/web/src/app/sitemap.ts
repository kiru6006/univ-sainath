import { MetadataRoute } from 'next';
import { programsData } from '@/data/programs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kiru6006.github.io/univ-sainath';

  const routes = [
    '',
    '/about',
    '/about/vision-mission',
    '/about/leadership',
    '/about/approvals-recognitions',
    '/about/infrastructure',
    '/academics',
    '/academics/schools',
    '/academics/programs',
    '/academics/calendar',
    '/admissions',
    '/admissions/fee-structure',
    '/admissions/scholarships',
    '/admissions/apply-online',
    '/admissions/application-status',
    '/faculty',
    '/disclosures',
    '/news-events',
    '/student-services/student-corner',
    '/placements',
    '/research',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/admissions') ? 0.9 : 0.8,
  }));

  return routes;
}
