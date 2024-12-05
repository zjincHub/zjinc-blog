import { Hash } from 'lucide-react';
import Link from 'next/link';
import ButtonReadMore from '../button-read-more';

export default function Index(props: IProps) {
  return (
    <div className="blog-cover w-full max-w-[800px] bg-transparent m-auto">
      <span className="inline-block text-2xl font-bold cursor-pointer tracking-wider">
        <Link className="text-gray-700" href={props.path}>
          {props.title}
        </Link>
      </span>
      <div className="mt-3 flex items-center text-[#776B5D] font-bold text-sm">
        {props.tags.map((tag, index) => (
          <span key={index} className="flex items-center mr-2">
            <Hash className="w-3 h-3 stroke-[3]" />
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2 text-gray-700 text-base tracking-wider">
        {props.summary}
      </div>
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
