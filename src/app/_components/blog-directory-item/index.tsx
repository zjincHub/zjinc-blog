'use client';

import './index.scss';

export default function Index(props: IProps) {
  const scrollToView = () => {
    const targetElementId = `#${props.value.replaceAll(' ', '_')}`;
    const element = document.querySelector(targetElementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="blog-directory-item" onClick={scrollToView}>
      {props.value}
    </div>
  );
}

interface IProps {
  value: string;
}
