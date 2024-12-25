import blogs from '@blog';
import PageHeaderCloud from './_components/page-header-cloud';
import PageFooter from './_components/page-footer';
import BlogCover from './_components/blog-cover';
import ButtonTag from './_components/button-tag';
import { chineseDateToDate } from '@/utils/time';
import './page.scss';

// 排序后的博客列表
const sortBlogs = blogs.sort((a, b) => {
  const dateA = chineseDateToDate(a.createDate);
  const dateB = chineseDateToDate(b.createDate);
  return dateB.getTime() - dateA.getTime();
});

// 所有标签
const tagsTotal = sortBlogs.flatMap((item) => item.tags);

export default function Index(props: { searchParams: { tags: string } }) {
  const tagsStr = props.searchParams.tags;
  const tagList = tagsStr?.split(',') || [];
  const isNoFilter = tagList.length === 0;

  const filterBlogs = sortBlogs.filter((item) => {
    const isIncludeTag = item.tags.some((tag) => tagList.includes(tag));
    return isNoFilter || isIncludeTag;
  });

  return (
    <main className="page-main">
      {/* 顶部云层 */}
      <PageHeaderCloud />
      {/* 首页内容 */}
      <div className="page-content">
        {/* 博客列表 */}
        <div className="blog-wrapper">
          {filterBlogs.map((item) => (
            <BlogCover
              key={item.path}
              title={item.title}
              summary={item.summary}
              tags={item.tags}
              path={item.path}
            />
          ))}
        </div>
        {/* 博客标签 */}
        <div className="blog-tags-wrapper">
          <div className="title">分类标签</div>
          {tagsTotal.map((tag, index) => (
            <ButtonTag key={index} value={tag} activityTags={tagList} />
          ))}
        </div>
      </div>
      {/* 页脚 */}
      <PageFooter />
    </main>
  );
}
