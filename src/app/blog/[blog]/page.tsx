import { notFound } from 'next/navigation';
import blogComponents from '@blog';
import BlogHeader from '@/app/_components/blog-header';
import BlogDirectory from '@/app/_components/blog-directory';
import SettingBlog from '@/app/_components/setting-blog';
import PageFooter from '@/app/_components/page-footer';
import './page.scss';

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
    <div className="blog">
      {/* 顶部天空 */}
      <BlogHeader {...abstract} />
      <div className="blog-content">
        <div className="left">
          {/* 正文 */}
          <BlogComponent />
        </div>
        <div className="right">
          {/* 目录 */}
          <BlogDirectory mdxContent={BlogComponent} />
        </div>
      </div>
      <SettingBlog />
      {/* 页脚 */}
      <PageFooter />
    </div>
  );
}

interface IProps {
  params: {
    blog: string;
  };
}
