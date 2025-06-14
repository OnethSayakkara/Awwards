import React, { useRef, useState, useEffect } from 'react';
import { PiStarFourFill } from "react-icons/pi";

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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();
      setIsScrolling(true);
      smoothScroll(slider, e.deltaY);
    };

    slider.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      slider.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const smoothScroll = (element, delta) => {
    const start = element.scrollLeft;
    const end = start + delta;
    const duration = 400;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      element.scrollLeft = start + (end - start) * easeInOutQuad(progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

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
            className={`flex gap-6 transition-transform duration-300 overflow-x-hidden ${
              isScrolling ? 'scale-[0.95]' : 'scale-100'
            }`}
            style={{
              width: `${totalWidth}px`,
              animation: `scrollRightToLeft ${imageCount * 14}s linear infinite`,
            }}
          >
            {[...images, ...images].map((src, idx) => (
              <div 
                key={idx} 
                className="border-darkgray/10 border-[0.2px] px-10 py-7 flex-shrink-0 relative group"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-[370px] h-[270px] px-5 bg-darkgray flex items-center justify-center relative">
                  <img
                    src={src}
                    alt={`slider-img-${idx}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                  {/* View Button */}
                  {hoveredIndex === idx && (
                     <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
    <button className="bg-brightred text-white rounded-full px-7 py-8 text-lg font-madefor transition-transform duration-[4000ms] ">
      View
    </button>
  </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="absolute left-0 bottom-0 w-full border-b border-t border-black/25">
        <div className='flex flex-row'>
            <div className='justify-center items-center w-fit left-10 ml-14 text-center text-sm font-madefor py-1'>
           <PiStarFourFill className='w-[20px]'/>
             </div>
             <div className="w-[1390px]  text-darkgray text-[0.55rem] py-1 px-5 font-madefor uppercase">
                offrings — services
            </div>
            <div className='w-fit flex items-center justify-center ml-[2px]'>
            
            </div>
            

        </div>
            </div>

        {/* Right Lines */}
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                
      </section>
    </>
  );
}