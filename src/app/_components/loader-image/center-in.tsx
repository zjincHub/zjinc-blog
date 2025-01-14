'use client';

import { useState, useEffect } from 'react';
import ImageNext from 'next/image';

export default function Index({
  src,
  height,
  width,
  transitionTime = 0.6,
  className,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div
      className={className}
      style={{
        opacity: imageLoaded ? 1 : 0,
        transition: `opacity ${transitionTime}s ease-in`,
      }}
    >
      <ImageNext src={src} alt="" width={width} height={height} />
    </div>
  );
}

interface Props {
  src: string;
  height: number;
  width: number;
  transitionTime?: number;
  className?: string;
}
