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
    <div className={classNames('button-theme', props.className)}>
      <div className="cloud front" onClick={() => setIsLight(!isLight)}>
        <span className="left-front"></span>
        <span className="right-front"></span>
      </div>
      <span className="sun sunshine"></span>
      <span className="sun" onClick={() => setIsLight(!isLight)}></span>
      <div className="cloud back" onClick={() => setIsLight(!isLight)}>
        <span className="left-back"></span>
        <span className="right-back"></span>
      </div>
    </div>
  );
}
