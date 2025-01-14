'use client';

import { useEffect, useState } from 'react';

export default function Index({
  children,
  transitionTime = 0.3,
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
        transition: `opacity ${transitionTime}s ease-in`,
      }}
    >
      {children}
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  transitionTime?: number;
  className?: string;
}
