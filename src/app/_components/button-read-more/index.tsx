'use client';
import { useRouter } from 'next/navigation';

export default function Index(props: IProps) {
  const router = useRouter();
  return (
    <button
      className="button-read-more"
      onClick={() => router.push(props.path)}>
      阅读更多
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="15px"
        width="15px"
        className="icon">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          stroke="#374151"
          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
      </svg>
    </button>
  );
}

interface IProps {
  path: string;
}
