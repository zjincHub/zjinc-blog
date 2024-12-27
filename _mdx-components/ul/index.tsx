import './index.scss';

export default function UL(props: { children?: any }): JSX.Element {
  return <ul className="ul">{props.children}</ul>;
}
