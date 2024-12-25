'use client';

import classNames from 'classnames';
import './index.scss';

export default function Index(props: {
  value: boolean;
  className?: string;
  onClick: (value: boolean) => void;
}) {
  return (
    <div
      className={classNames(
        'setting-directory',
        { 'setting-directory-close': !props.value },
        props.className
      )}
      onClick={() => props.onClick(!props.value)}
    >
      <div className="setting-directory-left">
        <div className="rect" />
        <div className="rect" />
      </div>
      <div className="setting-directory-right">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
}
