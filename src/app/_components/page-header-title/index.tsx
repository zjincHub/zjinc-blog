import './index.scss';

export default function Index(props: IProps) {
  return (
    <div className="page-header-title">
      <h1>{props.title}</h1>
      <div className="page-message">
        创建于<strong>{props.createDate}</strong>， 更新于
        <strong>{props.updateDate}</strong>
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
