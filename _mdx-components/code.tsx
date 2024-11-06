import { use } from 'react';
import './code.css';

const DEFAULT_LANG = 'javascript';
const DEFAULT_THEME = 'everforest-dark';

async function Blockquote(props: IProps): Promise<JSX.Element> {
  const { className, children } = props;
  // 语言
  const lang = className ? className.split('-')[1] : DEFAULT_LANG;
  // 解析成html
  const { codeToHtml } = await import('shiki');
  const html = children
    ? await codeToHtml(children, {
        lang,
        theme: DEFAULT_THEME,
      })
    : '';
  return (
    <div className="mdx-code bg-[#2f353a] rounded-[8px]">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="px-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
          <div className="px-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          </div>
          <div className="px-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="text-white text-sm">{lang}</div>
      </div>
      <div className="px-5 pb-4" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default (props: IProps) => {
  return use(Blockquote(props));
};

interface IProps {
  className?: string;
  children?: string;
}
