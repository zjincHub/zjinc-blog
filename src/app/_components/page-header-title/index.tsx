export default function Index(props: IProps) {
  return (
    <div className="relative max-w-[1180px] m-auto px-12 box-border">
      <h1 className="mt-0 text-sky-800 font-bold text-3xl">{props.title}</h1>
      <div className="mt-4 mb-10 text-sm">
        <span>{`作者：${props.author}`}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{`创建：${props.createDate}`}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{`更新：${props.updateDate}`}</span>
      </div>
    </div>
  );
}

interface IProps {
  title: string;
  author: string;
  createDate: string;
  updateDate: string;
}
