import { IBlog, IBlogInfo } from './type';
import { MDXContent } from 'mdx/types';

// 通过require.context获取mdx页面和info文件
const blogInfoModules = require.context('./', true, /^\.\/([^/]+\/)?info\.ts$/);
const blogComponentModules = require.context(
  './',
  true,
  /^\.\/([^/]+\/)?page\.mdx$/
);

// 收集info信息到数组中
const blogInfos: IBlogInfo[] = [];
blogInfoModules.keys().forEach((key) => {
  const module: { default: IBlogInfo } = blogInfoModules(key);
  blogInfos.push(module.default);
});

// 收集mdx页面和path到数组中
const blogComponents: MDXContent[] = [];
const blogPaths: string[] = [];
blogComponentModules.keys().forEach((key) => {
  const mdxName = key.split('/')[1];
  const module: { default: MDXContent } = blogComponentModules(key);
  blogComponents.push(module.default);
  blogPaths.push(`/blog/${mdxName}`);
});

// 整合info信息、mdx页面、path成一个blog数组
const blogs: IBlog[] = blogInfos.map((info, index) => {
  return {
    ...info,
    path: blogPaths[index],
    component: blogComponents[index],
  };
});

export default blogs;
