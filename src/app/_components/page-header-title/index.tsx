export default function Index(props: IProps) {
  return (
    <div className="relative max-w-[800px] m-auto z-20 px-4 box-border">
      <h1 className="text-sky-800 font-medium font-letao text-6xl">
        {props.title}
      </h1>
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
