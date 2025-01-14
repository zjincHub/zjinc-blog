import { Hash } from 'lucide-react';
import Link from 'next/link';
import ButtonReadMore from '../button-read-more';
import './index.scss';

export default function Index(props: IProps) {
  return (
    <div className="blog-cover">
      {/* 标题 */}
      <span className="title-wrapper">
        <Link className="title-link" href={props.path}>
          {props.title}
        </Link>
      </span>
      {/* 博客标签 */}
      <div className="tags-wrapper">
        {props.tags.map((tag, index) => (
          <span key={index} className="tag-item">
            <Hash className="icon" />
            {tag}
          </span>
        ))}
      </div>
      {/* 博客简介 */}
      <div className="summary-wrapper">{props.summary}</div>
      {/* 底部按钮 */}
      <div className="foot">
        <ButtonReadMore path={props.path} />
      </div>
      {/* 底部分割线 */}
      <div className="wave-wrapper">
        <svg
          className="wave-divider"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,30 400,90 600,60 C800,30 1000,90 1200,60"
            fill="none"
            stroke="var(--color-text-decorate)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

interface IProps {
  title: string;
  summary: string;
  tags: string[];
  path: string;
}
