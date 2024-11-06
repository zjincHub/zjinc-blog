export default function Index(props: IProps) {
  return (
    <div className="flex justify-center items-center h-[60px] bg-sky-800">
      <span className="text-white text-lg">{props.title}</span>
    </div>
  );
}

interface IProps {
  title: string;
}
