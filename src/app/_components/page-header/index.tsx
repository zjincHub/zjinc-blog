import Image from 'next/image';
import './index.scss';

export default function Index() {
  return (
    <div className="page-header">
      <div className="content-wrapper">
        <div className="content-box">
          <div className="title-wrapper">
            <h1>探索、思考、分享</h1>
            <p>分享我在前端领域的所做与所想</p>
          </div>
          <Image src="/images/cat.png" alt="cat" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
