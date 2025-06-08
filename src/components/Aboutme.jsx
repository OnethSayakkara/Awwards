import React from 'react';
import Header from './Header';
import { GoArrowDownRight } from 'react-icons/go';
import eyeAnimation from '../assets/animations/e2.json';
import Lottie from 'lottie-react';

const Aboutme = () => {
  return (
    <div className='bg-lightgray'>
      <Header />
      <section>
        <div className="relative h-[800px]"> {/* Increased height to accommodate all content */}
          <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
          <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
          <div className='relative h-[190px]'>
            <div className="absolute bottom-2 left-24">
              <GoArrowDownRight className="text-brightred mb-2" />
              <div className="flex flex-row text-brightred font-madefor text-sm gap-[36.1rem] text-[0.8rem]">
                <p className="cursor-pointer">onethsayakkara@gmail.com</p>
                <div className="uppercase text-[0.6rem] font-semibold text-darkneutral -space-y-2">
                  <p>a bit about me and</p>
                  <p>how can i support you</p>
                </div>
              </div>
            </div>
            {/* Thin border line */}
            <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"></div>
            {/* Eye animation and CEST bar - positioned below the thin border */}
            <div className="absolute left-0 bottom-[-22px] w-full border-b border-black/25">
              <div className="flex flex-row">
                <div className="justify-center items-center bg-brightred w-fit left-10 ml-14">
                  <Lottie animationData={eyeAnimation} loop={true} className="w-[20px]" />
                </div>
                <div className="w-[1390px] bg-darkgray text-white text-[0.55rem] py-1 px-5 font-madefor uppercase">
                  your shortcut station
                </div>
                <div className="w-fit flex items-center justify-center ml-[2px]"></div>
              </div>
            </div>
          </div>
          <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
          <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
          <div className='relative mt-[1.30rem]'>
            <div className="absolute left-[75px] right-[75px] top-0 overflow-hidden">
              <div className="absolute right-[610px] top-0 h-full w-px bg-black scale-x-[0.2]" />
              <div className='flex flex-row gap-10'>
                <div className='flex flex-col w-[54%] font-madefor font-medium text-[0.75rem]'>
                  <button className='h-[70px] border-b border-r border-black/20 uppercase hover:tracking-[0.5rem] transition-[letter-spacing] duration-300 ease-in-out bg-fill-hover'>
                    <span className="relative z-10">who am i</span>
                  </button>
                  <button className='h-[70px] border-r border-b border-black/20 uppercase hover:tracking-[0.5rem] transition-[letter-spacing] duration-300 ease-in-out bg-fill-hover'>
                    <span className="relative z-10">my approach</span>
                  </button>
                  <button className='h-[70px] border-r uppercase border-black/20 hover:tracking-[0.5rem] transition-[letter-spacing] duration-300 ease-in-out bg-fill-hover'>
                    <span className="relative z-10">beyond the screen</span>
                  </button>
                </div>
                <div className='font-madefor text-xs text-brightred mt-36'>
                  <p>ALWAYS UP FOR A GAME OF ANY SPORT<br />
                    BUT FOOTBALL IS HIS TRUE PASSION<br />
                    TRAINING AND KICKING BALLS SINCE FOREVER</p>
                </div>
              </div>
              <div id='div3' className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"></div>
              {/* Creative Developer section - positioned below div3 */}
              <div className="absolute left-0 right-0 bottom-[40px] h-[200px] flex items-center ">
                <div className="scroll-item text-9xl uppercase font-madefor font-medium text-black flex items-center">
                  <p className="flex flex-row items-center justify-center w-full gap-3">
                    Creative Developerhkjkjh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;