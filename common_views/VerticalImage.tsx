import React from 'react';
import Image from 'next/image';

type VerticalImageProps = {
  src: string,
  alt: string,
  height: number | `${number}` | undefined,
  width: number | `${number}` | undefined,
  text: string,
  textSize: string
}

const VerticalImage: React.FC<VerticalImageProps> = ({ src, alt, height, width, text, textSize }) => {
  return (
    <div className='relative'>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
      <div className={`absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${textSize}`}>
        {text}
      </div>
    </div>
  );
};

export default VerticalImage;
