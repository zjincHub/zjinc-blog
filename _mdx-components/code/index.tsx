import { use } from 'react';
import './index.scss';

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
    <div className="mdx-code">
      <div className="header">
        <div className="decorate">
          <div className="decorate-item">
            <div className="red" />
          </div>
          <div className="decorate-item">
            <div className="yellow" />
          </div>
          <div className="decorate-item">
            <div className="green" />
          </div>
        </div>
        <div className="language">{lang}</div>
      </div>
      <div
        className="mdx-code-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export default (props: IProps) => {
  return use(Blockquote(props));
};

interface IProps {
  className?: string;
  children?: any;
}
