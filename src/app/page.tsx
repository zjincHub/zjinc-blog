import blogs from '@blog';
import Header from './_components/header';
import Footer from './_components/footer';
import BlogCover from './_components/blog-cover';
import ButtonTag from './_components/button-tag';
import ButtonTheme from './_components/button-theme';
import LoaderFontRightIn from './_components/loader-font/right-in';
import LoaderLeftIn from './_components/loader/left-in';
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
      {/* 顶部天空 */}
      <Header />
      {/* 顶部太阳/月亮 */}
      <LoaderLeftIn
        transitionTime={2}
        transitionDelay={1}
        className="setting-theme"
      >
        <ButtonTheme />
      </LoaderLeftIn>
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
          <LoaderFontRightIn>
            <div className="title">博客分类标签</div>
          </LoaderFontRightIn>
          <div className="tag-box">
            {tagsTotal.map((tag, index) => (
              <LoaderFontRightIn
                key={index}
                transitionDelay={index * 0.1}
                className="button-tag-right-in"
              >
                <ButtonTag value={tag} activityTags={tagList} />
              </LoaderFontRightIn>
            ))}
          </div>
        </div>
        {/* 博客热门 */}
      </div>
      {/* 页脚 */}
      <Footer />
    </main>
  );
}
