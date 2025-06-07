import React,{ useState, useEffect } from 'react';
import eyeAnimation from '../assets/animations/e2.json';
import Lottie from 'lottie-react';
import { BsEmojiSmile } from "react-icons/bs";

function Banner() {
 const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    
      });

      const cleaned = formattedTime
        .replace(':', ' : ')          // Adds spacing
        .replace(/\sGMT[+-]\d+/, ''); // Just in case offset appears

      setTimeStr(cleaned);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup
  }, []);
  return (
    <section>
      <div className="relative h-64">
        {/* Horizontal line */}
        
           
        <div className="absolute left-0 w-full border-b border-black/25">
        <div className='flex flex-row'>
            <div className='justify-center items-center bg-brightred w-fit left-10 ml-14'>
             <Lottie animationData={eyeAnimation} loop={true}  className="w-[20px]" />
             </div>
             <div className="w-[1369px]  bg-darkgray text-white text-[0.55rem] py-1 px-3 font-madefor">
                {timeStr} CEST
            </div>

        </div>
            </div>

        {/* Left vertical line crossing the horizontal line */}
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />

         <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                                            
        {/* Right vertical line crossing the horizontal line */}
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" /> 
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />

 <div className="absolute left-[75px] right-[75px] top-1/2 -translate-y-1/2 overflow-hidden h-full flex items-center">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="scroll-item text-9xl uppercase font-madefor font-medium text-black flex items-center"
        >
          <p className="flex flex-row items-center justify-center w-full gap-3">
            Creative Developer
            <BsEmojiSmile className="text-brightred text-4xl mx-4" />
          </p>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
}

export default Banner;
