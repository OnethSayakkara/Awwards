import React from 'react'
import eyeAnimation from '../assets/animations/e2.json';
import Lottie from 'lottie-react';
import { GoArrowDownRight } from 'react-icons/go';

function ProjectsI9Intro  ()  {
  return (
    <section>
        <div className='relative'>
                      <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
          <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
          <div className='relative h-[190px]'>
            <div className="absolute bottom-2 left-24">
              <GoArrowDownRight className="text-brightred mb-2" />
              <div className="flex flex-row text-brightred font-madefor text-sm gap-[36.1rem] text-[0.8rem] group">
                 <div className="relative h-[20px] overflow-hidden group">
  {/* Default state */}
  <div className="transition duration-500 group-hover:-translate-y-[180%] group-hover:skew-y-[13.7deg]">
   <a href="mailto:onethsayakkara@gmail.com" className="cursor-pointer text-brightred">onethsayakkara@gmail.com</a>
  </div>

  {/* Animated-in state */}
  <div className="absolute top-0 translate-y-[220%] skew-y-[14.5deg] transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
   <a href="mailto:onethsayakkara@gmail.com" className="cursor-pointer text-brightred">onethsayakkara@gmail.com</a>
  </div>
</div>
                <div className="uppercase text-[0.6rem] font-semibold text-darkneutral -space-y-2">
                  <p>creating next level</p>
                  <p>digital products</p>
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
                <div className="w-[1390px] flex flex-row gap-[690px] bg-darkgray text-white text-[0.55rem] py-1 px-5 font-madefor uppercase">
                  <p>projects 24' - 25'</p>
                  <div>
                    <p>scroll</p>
                  </div>
                </div>
                <div className="w-fit flex items-center justify-center ml-[2px]"></div>
              </div>
            </div>
          </div>


        </div>
    </section>
  )
}

export default ProjectsI9Intro
