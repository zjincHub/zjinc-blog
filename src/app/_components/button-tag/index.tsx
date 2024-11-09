export default function Index(props: IProps) {
  return <button className="button-tag">{props.children}</button>;
}

interface IProps {
  children: React.ReactNode;
}
