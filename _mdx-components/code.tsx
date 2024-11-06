import { use } from 'react';

async function Blockquote(props: { children?: any }): Promise<JSX.Element> {
  const { codeToHtml } = await import('shiki');
  const html = await codeToHtml(props.children, {
    lang: 'javascript',
    theme: 'vitesse-dark',
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default (props: { children?: any }) => {
  return use(Blockquote(props));
};
