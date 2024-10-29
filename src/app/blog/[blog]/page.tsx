import { notFound } from 'next/navigation';
import { getBlogAbstract } from '@/utils/abstract-scan';
import DesignPattern from '/_blog/design-pattern/page.mdx';

/**
 * 博客页面
 */
export default function Index(props: Props) {
  const blogName = props.params.blog;
  const blogAbstract = getBlogAbstract(blogName);
  if (!blogAbstract) notFound();
  return <DesignPattern />;
}

interface Props {
  params: {
    blog: string;
  };
}
