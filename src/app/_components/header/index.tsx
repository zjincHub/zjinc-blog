import Image from 'next/image';
import { pixel } from '@/utils/fonts';
import './index.scss';

export default function Index() {
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className="content-box">
          <div className="left">
            <h1 className={pixel.className}>探索、思考、分享</h1>
          </div>
          <div className="right">
            <Image src="/images/cat.png" alt="cat" width={220} height={220} />
          </div>
        </div>
      </div>
    </div>
  );
}
