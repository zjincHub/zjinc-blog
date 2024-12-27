import './index.scss';

export default function EM(props: { children?: any }): JSX.Element {
  return <span className="em">{props.children}</span>;
}
