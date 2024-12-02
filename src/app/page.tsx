import blogs from '@blog';
import PageHeaderCloud from './_components/page-header-cloud';
import PageFooter from './_components/page-footer';
import BlogCover from './_components/blog-cover';
import ButtonTag from './_components/button-tag';
import { chineseDateToDate } from '@/utils/time';

const sortBlogs = blogs.sort((a, b) => {
  const dateA = chineseDateToDate(a.createDate);
  const dateB = chineseDateToDate(b.createDate);
  return dateB.getTime() - dateA.getTime();
});

export default function Index() {
  return (
    <main className="bg-[var(--color-background-main)]">
      {/* 顶部云层 */}
      <PageHeaderCloud />
      {/* 首页内容 */}
      <div className="relative z-0 w-full max-w-[1000px] bg-transparent m-auto flex">
        <div className="w-full max-w-[700px] pr-12">
          {sortBlogs.map((item) => (
            <BlogCover
              key={item.path}
              title={item.title}
              summary={item.summary}
              tags={item.tags}
              path={item.path}
            />
          ))}
        </div>
        <div className="w-full max-w-[300px] translate-y-24">
          <div>分类查询</div>
          <ButtonTag>JavaScript</ButtonTag>
          <ButtonTag>TypeScript</ButtonTag>
          <ButtonTag>Eslint</ButtonTag>
          <ButtonTag>Prettier</ButtonTag>
          <ButtonTag>设计模式</ButtonTag>
        </div>
      </div>
      {/* 页脚 */}
      <PageFooter />
    </main>
  );
}
