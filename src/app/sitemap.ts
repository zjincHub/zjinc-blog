import type { MetadataRoute } from 'next';
import { chineseDateToDate } from '@/utils/time';
import blogComponents from '@blog';

const domain = 'https://www.zjinc.top';

enum EnumFrequency {
  always = 'always',
  hourly = 'hourly',
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
  yearly = 'yearly',
  never = 'never',
}

enum EnumLevel {
  Firsr = 1,
  Second = 0.8,
  Third = 0.6,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogMaps = blogComponents.map((blog) => {
    return {
      url: `${domain}${blog.path}`,
      lastModified: chineseDateToDate(blog.updateDate),
      changeFrequency: EnumFrequency.weekly,
      priority: EnumLevel.Second,
    };
  });

  return [
    {
      url: `${domain}/`,
      lastModified: new Date(),
      changeFrequency: EnumFrequency.monthly,
      priority: EnumLevel.Firsr,
    },
    ...blogMaps,
  ];
}
