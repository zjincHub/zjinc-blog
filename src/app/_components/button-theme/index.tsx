'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import './index.scss';

export default function Index(props: { className?: string }) {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isLight ? 'light' : 'dark'
    );
  }, [isLight]);

  return (
    <div
      className={classNames('button-theme', props.className)}
      onClick={() => setIsLight(!isLight)}>
      <div className="cloud front">
        <span className="left-front"></span>
        <span className="right-front"></span>
      </div>
      <span className="sun sunshine"></span>
      <span className="sun"></span>
      <div className="cloud back">
        <span className="left-back"></span>
        <span className="right-back"></span>
      </div>
    </div>
  );
}
