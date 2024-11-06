export default function H2(props: { children?: any }): any {
  return (
    <h1
      className="mt-6 mb-2 text-3xl text-sky-800"
      id={props.children?.toString()}>
      {props.children}
    </h1>
  );
}
