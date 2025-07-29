'use client';

import { useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';

type CarouselProps = {
  images: string[];
  autoPlay?: boolean;
  isVertical?: boolean;
};

export default function Carousel({
  images,
  autoPlay = false,
  isVertical = false,
}: CarouselProps) {
  const [lightboxToggle, setLightboxToggle] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(1);

  const handleImageClick = (index: number) => {
    setLightboxSlide(index + 1);
    setLightboxToggle(!lightboxToggle);
  };

  return (
    <div className='my-8'>
      <ResponsiveCarousel
        autoPlay={autoPlay}
        infiniteLoop
        showThumbs={false}
        showStatus={true}
        interval={3500}
        className='rounded-lg overflow-hidden'
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className='cursor-pointer'
          >
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              width={800}
              height={400}
              style={
                isVertical ?
                  {
                    maxHeight: '600px',
                    height: 'auto',
                    width: 'auto',
                  }
                : {}
              }
            />
          </div>
        ))}
      </ResponsiveCarousel>

      <FsLightbox
        toggler={lightboxToggle}
        sources={images}
        slide={lightboxSlide}
      />
    </div>
  );
}
