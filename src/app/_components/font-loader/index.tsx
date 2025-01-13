'use client';

import { useEffect, useState } from 'react';

export default function Index({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return (
    <div
      style={{
        opacity: fontsLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      {children}
    </div>
  );
}
