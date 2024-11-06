import { notFound } from 'next/navigation';
import blogComponents from '@blog';
import PageHeaderCloud from '@/app/_components/page-header-cloud';
import PageHeaderTitle from '@/app/_components/page-header-title';

/**
 * 博客页面
 */
export default function Index(props: IProps) {
  const blogName = props.params.blog;
  const blog = blogComponents.find((blog) => blog.path === blogName);
  if (!blog) notFound();
  const { component: BlogComponent, ...abstract } = blog;
  return (
    <>
      <PageHeaderCloud />
      <PageHeaderTitle {...abstract} />
      <div className="w-full bg-white max-w-[800px] m-auto px-4 box-border">
        <BlogComponent />
      </div>
    </>
  );
}

interface IProps {
  params: {
    blog: string;
  };
}
