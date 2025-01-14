'use client';

import { useEffect, useState } from 'react';

export default function Index({
  children,
  transitionTime = 0.6,
  className,
}: Props) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return (
    <div
      className={className}
      style={{
        opacity: fontsLoaded ? 1 : 0,
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
