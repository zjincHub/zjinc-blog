'use client';

import classNames from 'classnames';
import './index.scss';

export default function Index(props: {
  value: boolean;
  className?: string;
  onClick: (value: boolean) => void;
}) {
  return (
    <div className={classNames('setting-switch', props.className)}>
      <label className="bar" htmlFor="check">
        <input
          id="check"
          type="checkbox"
          checked={props.value}
          onChange={(e: any) => props.onClick(e.target.checked)}
        />
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </label>
    </div>
  );
}
