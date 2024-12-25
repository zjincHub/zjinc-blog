import './index.scss';

export default function H1(props: { children?: any }): JSX.Element {
  const value: string = props.children;
  const id = value.replaceAll(' ', '_');
  return (
    <h1 className="h1" id={id}>
      {value}
    </h1>
  );
}
