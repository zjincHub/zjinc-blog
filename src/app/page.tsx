import PageHeaderCloud from './_components/page-header-cloud';
import PageFooter from './_components/page-footer';
import BlogCover from './_components/blog-cover';

export default function Index() {
  return (
    <main>
      {/* 顶部云层 */}
      <PageHeaderCloud />
      {/* 首页内容 */}
      <BlogCover title="解锁前端的10个设计模式" />
      {/* 页脚 */}
      <PageFooter />
    </main>
  );
}
