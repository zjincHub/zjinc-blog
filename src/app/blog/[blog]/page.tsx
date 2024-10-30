import { notFound } from 'next/navigation';
import blogComponents from '../../../../_blog';
import PageHeaderCloud from '@/app/components/page-header-cloud';
import PageHeaderTitle from '@/app/components/page-header-title';

/**
 * 博客页面
 */
export default function Index(props: Props) {
  const blogName = props.params.blog;
  const blog = blogComponents.find((blog) => blog.path === blogName);
  if (!blog) notFound();
  const { component: BlogComponent, ...abstract } = blog;
  return (
    <>
      <PageHeaderCloud />
      <PageHeaderTitle {...abstract} />
      <BlogComponent />;
    </>
  );
}

interface Props {
  params: {
    blog: string;
  };
}
