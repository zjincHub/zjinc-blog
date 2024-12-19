import type { MetadataRoute } from 'next';
import { chineseDateToDate } from '@/utils/time';
import blogComponents from '@blog';

const domain = 'https://www.zjinc.top';

type Frequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';
export default function sitemap(): MetadataRoute.Sitemap {
  const blogMaps = blogComponents.map((blog) => {
    return {
      url: `${domain}${blog.path}`,
      lastModified: chineseDateToDate(blog.updateDate),
      changeFrequency: 'weekly' as Frequency,
      priority: 0.5,
    };
  });

  return [
    {
      url: `${domain}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...blogMaps,
  ];
}
