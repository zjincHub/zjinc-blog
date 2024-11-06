import H1 from './h1';
import P from './p';

const renderH1 = (string: string) => {
  return (
    <P className={'text-base font-normal text-sky-800 text-right pr-6 mt-3'}>
      {string}
    </P>
  );
};

const renderP = (string: string) => {
  return (
    <P className="w-full px-6 py-4 rounded-lg bg-slate-100 box-border border-0 border-l-8 border-l-blue-400 border-solid">
      {string}
    </P>
  );
};

export default function Blockquote(props: { children?: any }): JSX.Element {
  const children: any = [];
  props.children.forEach((child: any) => {
    if (child.type === H1) {
      children.push(renderH1(child.props.children));
    } else if (child.type === P) {
      children.push(renderP(child.props.children));
    }
  });
  return <blockquote className="mx-0 my-4">{children}</blockquote>;
}
