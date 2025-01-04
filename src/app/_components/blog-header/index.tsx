import Image from 'next/image';
import './index.scss';

export default function Index(props: IProps) {
  return (
    <div className="blog-header">
      <div className="content-wrapper">
        <div className="content-box">
          <div className="title-wrapper">
            <h1>{props.title}</h1>
            <div className="page-message">
              创建于<strong>{props.createDate}</strong>， 更新于
              <strong>{props.updateDate}</strong>
            </div>
          </div>
          <Image src="/images/cat.png" alt="cat" width={200} height={200} />
        </div>
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
