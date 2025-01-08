import Image from 'next/image';
import classNames from 'classnames';
import ButtonTheme from '@/app/_components/button-theme';
import { pixel } from '@/utils/fonts';
import './index.scss';

export default function Index(props: IProps) {
  return (
    <div className="blog-header">
      <div className="content-wrapper">
        <div className="content-box">
          <div className={classNames('left', pixel.className)}>
            <h1>{props.title}</h1>
            <h3>
              创建于<strong>{props.createDate}</strong>， 更新于
              <strong>{props.updateDate}</strong>
            </h3>
          </div>
          <div className="right">
            <ButtonTheme className="setting-theme" />
            <Image src="/images/cat.png" alt="cat" width={220} height={220} />
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
