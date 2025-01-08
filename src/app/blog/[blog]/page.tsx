import { notFound } from 'next/navigation';
import blogComponents from '@blog';
import BlogHeader from '@/app/blog/_components/blog-header';
import BlogDirectory from '@/app/blog/_components/blog-directory';
import Footer from '@/app/_components/footer';
import ButtonTheme from '@/app/_components/button-theme';
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
      {/* 顶部太阳/月亮 */}
      <ButtonTheme className="setting-theme" />
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
      {/* 页脚 */}
      <Footer />
    </div>
  );
}

interface IProps {
  params: {
    blog: string;
  };
}
