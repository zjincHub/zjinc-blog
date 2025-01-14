'use client';

import { useEffect, useState } from 'react';

export default function Index({
  children,
  transitionTime = 0.3,
  transitionDelay = 0,
  className,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translate(0)' : 'translate(-2rem, -2rem)',
        transition: `all ${transitionTime}s ease ${transitionDelay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  transitionTime?: number;
  transitionDelay?: number;
  className?: string;
}
