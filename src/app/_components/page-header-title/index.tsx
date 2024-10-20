interface Props {
  title: string;
  author: string;
  createDate: string;
  updateDate: string;
}
export default function Index(props: Props) {
  return (
    <div className="relative max-w-[800px] m-auto mt-[-100px] z-20">
      <h1 className="text-sky-800 font-medium font-letao">{props.title}</h1>
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
