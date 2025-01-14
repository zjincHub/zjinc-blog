import classNames from 'classnames';
import LoaderFontCenterIn from '../loader-font/center-in';
import LoaderImageCenterIn from '../loader-image/center-in';
import { circle } from '@/utils/fonts';
import './index.scss';

export default function Index() {
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className="content-box">
          <div className={classNames('left', circle.className)}>
            <LoaderFontCenterIn transitionTime={0.6}>
              <h1>探索、思考、分享</h1>
            </LoaderFontCenterIn>
          </div>
          <div className="right">
            <LoaderImageCenterIn
              src="/images/cat.png"
              width={220}
              height={220}
              transitionTime={0.6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
