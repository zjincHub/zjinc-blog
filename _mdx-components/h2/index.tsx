import './index.scss';

export default function H2(props: { children?: any }): any {
  return (
    <h2 className="h2" id={props.children?.toString()}>
      {props.children}
    </h2>
  );
}
