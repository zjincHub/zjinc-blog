import H1 from '../h1';
import P from '../p';
import './index.scss';

const renderH1 = (string: string) => {
  return <P className={'blockquote-h1'}>{string}</P>;
};

const renderP = (string: string) => {
  return <P className="blockquote-p">{string}</P>;
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
  return <blockquote className="blockquote">{children}</blockquote>;
}
