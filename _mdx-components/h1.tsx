export default function H1(props: { children?: any }): any {
  if (typeof props.children !== 'string') return props.children;
  return (
    <h1
      className="mt-6 mb-2 text-xl text-sky-800"
      id={props.children?.toString()}>
      {props.children}
    </h1>
  );
}
