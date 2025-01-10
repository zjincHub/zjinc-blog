import H1 from '../h1';
import P from '../p';
import './index.scss';

const renderH1 = (string: string, index: number) => {
  return (
    <P key={index} className={'blockquote-h1'}>
      {string}
    </P>
  );
};

const renderP = (string: string, index: number) => {
  return (
    <P key={index} className="blockquote-p">
      {string}
    </P>
  );
};

export default function Blockquote(props: { children?: any }): JSX.Element {
  const children: any = [];
  props.children.forEach((child: any, index: number) => {
    if (child.type === H1) {
      children.push(renderH1(child.props.children, index));
    } else if (child.type === P) {
      children.push(renderP(child.props.children, index));
    }
  });
  return <blockquote className="blockquote">{children}</blockquote>;
}
