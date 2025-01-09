'use client';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { Hash } from 'lucide-react';
import { circle } from '@/utils/fonts';
import './index.scss';

export default function Index(props: IProps) {
  const { value, activityTags } = props;
  const isActive = activityTags.includes(value);
  const router = useRouter();

  const onClickTag = () => {
    let tagList;
    if (isActive) {
      tagList = activityTags.filter((tag) => tag !== value);
    } else {
      tagList = [...activityTags, value];
    }
    if (tagList.length === 0) {
      router.push(`/`, { scroll: false });
    } else {
      router.push(`/?tags=${tagList.join(',')}`, { scroll: false });
    }
  };
  return (
    <button
      className={classNames(
        'button-tag',
        circle.className,
        isActive && 'button-tag-active'
      )}
      onClick={onClickTag}>
      <div className="background" />
      <Hash className="icon" />
      <div className="text">{value}</div>
    </button>
  );
}

interface IProps {
  value: string;
  activityTags: string[];
}
