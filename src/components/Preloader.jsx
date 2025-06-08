import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import 'tailwindcss/tailwind.css';

const Preloader = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const loader = gsap.timeline();
    loader
      .to(pathRef.current, {
        duration: 0.8,
        attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z' },
        ease: 'power2.in',
      })
      .to(pathRef.current, {
        duration: 0.8,
        attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z' },
        ease: 'power2.out',
      });

    return () => {
      loader.kill();
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="w-64 h-64"
      >
        <path
          ref={pathRef}
          className="bluee"
          fill="#3B82F6"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        />
      </svg>
    </div>
  );
};

export default Preloader;