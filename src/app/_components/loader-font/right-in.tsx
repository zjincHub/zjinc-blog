'use client';

import { useEffect, useState } from 'react';

export default function Index({
  children,
  transitionTime = 0.6,
  transitionDelay = 0,
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
        transform: fontsLoaded ? 'translateX(0)' : 'translateX(2rem)',
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
