import { MDXContent } from 'mdx/types';
import BlogDirectoryItem from '../blog-directory-item';
import H1 from '../../../../_mdx-components/h1';

export default function Index(props: IProps) {
  const component = props.mdxContent({});
  const children: any[] = component.props.children;

  // 收集博客中的h1标签
  const h1List: string[] = [];
  children
    .filter((item) => item.type === H1)
    .forEach((item) => {
      const h1 = item.props.children;
      if (typeof h1 === 'string') h1List.push(h1);
    });

  return (
    <div className="blog-directory">
      {h1List.map((item, index) => (
        <BlogDirectoryItem key={index} value={item} />
      ))}
    </div>
  );
}

interface IProps {
  mdxContent: MDXContent;
}
