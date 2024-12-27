import './index.scss';

export default function OL(props: { children?: any }): JSX.Element {
  return <ol className="ol">{props.children}</ol>;
}
