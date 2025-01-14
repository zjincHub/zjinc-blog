'use client';

import ImageNext from 'next/image';
import { useState } from 'react';

export default function Index({
  src,
  height,
  width,
  transitionTime = 0.3,
  className,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={className}
      style={{
        opacity: imageLoaded ? 1 : 0,
        transition: `opacity ${transitionTime}s ease-in`,
      }}
    >
      <ImageNext
        src={src}
        alt=""
        width={width}
        height={height}
        onLoad={() => setImageLoaded(true)}
      />
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
