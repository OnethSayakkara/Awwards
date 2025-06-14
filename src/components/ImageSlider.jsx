import React, { useRef, useState, useEffect } from 'react';

const images = [
  '/src/assets/img/1.png',
  '/src/assets/img/2.png',
  '/src/assets/img/3.png',
  '/src/assets/img/4.png',
  '/src/assets/img/5.png',
];

export default function InfiniteImageSlider() {
  const imageWidth = 370;
  const gap = 24;
  const imageCount = images.length;
  const totalWidth = (imageWidth + gap) * imageCount * 2;

  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();
      setIsScrolling(true);
      slider.scrollLeft += e.deltaY;
    };

    slider.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      slider.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    if (isScrolling) {
      const timeout = setTimeout(() => setIsScrolling(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isScrolling]);

  return (
    <>
      <style>
        {`
          @keyframes scrollRightToLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth / 2}px); }
          }
        `}
      </style>

      <section className="relative overflow-hidden h-[490px] flex items-center">
        {/* Left Lines */}
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        {/* Slider Container */}
        <div className="w-full max-w-[calc(100%-150px)] mx-auto overflow-hidden">
          <div
            ref={sliderRef}
            className={`flex gap-6 transition-transform duration-300  overflow-x-hidden ${
              isScrolling ? 'scale-[0.95]' : 'scale-100'
            }`}
            style={{
              width: `${totalWidth}px`,
              animation: `scrollRightToLeft ${imageCount * 14}s linear infinite`,
            }}
          >
            {[...images, ...images].map((src, idx) => (
              <div key={idx} className="border-darkgray/10 border-[0.2px] px-10 py-7 flex-shrink-0">
                <div className="w-[370px] h-[270px] px-5 bg-darkgray flex items-center justify-center">
                  <img
                    src={src}
                    alt={`slider-img-${idx}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Lines */}
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
      </section>
    </>
  );
}
