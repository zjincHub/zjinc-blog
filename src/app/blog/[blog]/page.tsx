import { notFound } from 'next/navigation';
import blogComponents from '@blog';
import PageHeaderCloud from '@/app/_components/page-header-cloud';
import PageHeaderTitle from '@/app/_components/page-header-title';
import BlogDirectory from '@/app/_components/blog-directory';
import SettingBlog from '@/app/_components/setting-blog';

/**
 * 博客页面
 */
export default function Index(props: IProps) {
  const blogName = props.params.blog;
  const blog = blogComponents.find(
    (blog) => blog.path.split('/').pop() === blogName
  );
  if (!blog) notFound();
  const { component: BlogComponent, ...abstract } = blog;
  return (
    <>
      <PageHeaderCloud />
      <PageHeaderTitle {...abstract} />
      <div className="relative z-0 w-full max-w-[1180px] bg-transparent m-auto flex">
        <div className="w-full max-w-[880px] bg-transparent relative z-50 m-auto px-12 box-border">
          <BlogComponent />
        </div>
        <div className="w-full max-w-[300px] px-10 translate-y-5">
          <BlogDirectory mdxContent={BlogComponent} />
        </div>
      </div>
      <SettingBlog />
    </>
  );
}

interface IProps {
  params: {
    blog: string;
  };
}
