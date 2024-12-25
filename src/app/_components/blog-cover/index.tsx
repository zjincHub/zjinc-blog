import { Hash } from 'lucide-react';
import Link from 'next/link';
import ButtonReadMore from '../button-read-more';
import './index.scss';

export default function Index(props: IProps) {
  return (
    <div className="blog-cover">
      <span className="title-wrapper">
        <Link className="title-link" href={props.path}>
          {props.title}
        </Link>
      </span>
      <div className="tags-wrapper">
        {props.tags.map((tag, index) => (
          <span key={index} className="tag-item">
            <Hash className="icon" />
            {tag}
          </span>
        ))}
      </div>
      <div className="summary-wrapper">{props.summary}</div>
      <ButtonReadMore path={props.path} />
    </div>
  );
}

interface IProps {
  title: string;
  summary: string;
  tags: string[];
  path: string;
}
