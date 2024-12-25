import './index.scss';

export default function Index(props: IProps) {
  return (
    <div className="page-header-title">
      <h1>{props.title}</h1>
      <div className="page-message">
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
