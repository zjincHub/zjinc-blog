export default function H1(props: { children?: any }): JSX.Element {
  const value: string = props.children;
  const id = value.replaceAll(' ', '_');
  return (
    <h1 className="mt-6 mb-2 text-xl text-sky-800" id={id}>
      {value}
    </h1>
  );
}
