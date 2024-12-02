import Link from 'next/link';
import ButtonReadMore from '../button-read-more';

export default function Index(props: IProps) {
  return (
    <div className="blog-cover w-full max-w-[800px] bg-transparent m-auto">
      <span className="inline-block text-2xl font-bold cursor-pointer tracking-wider">
        <Link className="text-[#1E201E] " href={props.path}>
          {props.title}
        </Link>
      </span>
      <div className="mt-2">
        {props.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
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
