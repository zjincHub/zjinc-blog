import LoaderCenterIn from '@/app/_components/loader/center-in';
import LoaderImageCenterIn from '@/app/_components/loader-image/center-in';
import './index.scss';

export default function Index(props: IProps) {
  return (
    <div className="blog-header">
      <div className="content-wrapper">
        <div className="content-box">
          <LoaderCenterIn className="left">
            <h1>{props.title}</h1>
            <h3>
              创建于<strong>{props.createDate}</strong>， 更新于
              <strong>{props.updateDate}</strong>
            </h3>
          </LoaderCenterIn>
          <div className="right">
            <LoaderImageCenterIn
              src="/images/cat.png"
              width={220}
              height={220}
            />
          </div>
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
