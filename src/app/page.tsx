import Cloud from '@/app/_components/cloud';
import Content from './_components/content';
import { getAllBlogAbstract } from '@/utils/abstract-scan';

export default function Index() {
  const abstracts = getAllBlogAbstract();
  console.log(
    '%c [ abstracts ]-9',
    'font-size:13px; background:#9e9cdf; color:#e2e0ff;',
    abstracts
  );

  return (
    <main>
      {/* 顶部云层 */}
      <Cloud />
      {/* 内容 */}
      <Content />
    </main>
  );
}
