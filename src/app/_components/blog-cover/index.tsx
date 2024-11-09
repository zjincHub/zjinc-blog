import Link from 'next/link';
import ButtonReadMore from '../button-read-more';
import ButtonTag from '../button-tag';

export default function Index(props: IProps) {
  return (
    <div className="blog-cover w-full max-w-[800px] bg-transparent m-auto">
      <span className="inline-block mb-1 text-2xl font-bold cursor-pointer tracking-wider">
        <Link href={props.path}>{props.title}</Link>
      </span>
      <div>
        {props.tags.map((tag, index) => (
          <ButtonTag key={index}>{tag}</ButtonTag>
        ))}
      </div>
      <div className="mt-4 text-gray-700 text-base tracking-wider">
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
