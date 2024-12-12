'use client';

import classNames from 'classnames';

export default function Index(props: {
  value: boolean;
  className?: string;
  onClick: (value: boolean) => void;
}) {
  return (
    <button
      className={classNames('setting-theme', props.className, {
        'setting-theme-dark': props.value,
      })}
      onClick={() => props.onClick(!props.value)}>
      <div className="sun-rays"></div>
      <div className="main-circle"></div>
    </button>
  );
}
