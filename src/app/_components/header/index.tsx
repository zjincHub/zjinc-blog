import LoaderCenterIn from '../loader/center-in';
import LoaderImageCenterIn from '../loader-image/center-in';
import './index.scss';

export default function Index() {
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className="content-box">
          <LoaderCenterIn className="left">
            <h1>探索、思考、分享</h1>
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
