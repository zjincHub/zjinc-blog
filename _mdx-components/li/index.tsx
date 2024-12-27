import './index.scss';

export default function LI(props: { children?: any }): JSX.Element {
  return <li className="li">{props.children}</li>;
}
