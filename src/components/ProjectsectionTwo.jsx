import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const ProjectsectionTwo = () => {
  return (
        <section>
            <div className='relative h-[570px]'>
            <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
            <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
            
            <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
            <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
            <div className='absolute w-[850px] font-madefor space-y-7 top-6 left-[6.5rem] text-[1.68rem] text-darkgray'>
            <p>Already have a design ready to go? I take your static mockups or UI files and turn them into fast, responsive, and accessible websites. With clean, maintainable code and thoughtful interactions, I bring your designs to life — making sure they not only work across all devices, but also feel smooth, intuitive, and alive.</p>
            
            </div>
                <div className="absolute bottom-5 left-28 right-24 flex justify-between items-center group cursor-pointer">
                  {/* Rotating arrow */}
                  <IoIosArrowRoundForward className="text-4xl text-brightred transition-transform duration-500 group-hover:-rotate-[45deg]" />
                
                  {/* Animated text */}
                  <div className="relative h-[30px] overflow-hidden text-2xl uppercase text-brightred">
                    {/* Top Text */}
                    <div className="transition duration-500 group-hover:-translate-y-[170%] group-hover:skew-y-[20deg]">
                       <a href="mailto:onethsayakkara@gmail.com">contact</a>
                    </div>
                
                    {/* Sliding-in Text */}
                    <div className="absolute top-0 translate-y-[170%] skew-y-[20deg] transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                       <a href="mailto:onethsayakkara@gmail.com">contact</a>
                    </div>
                  </div>
                </div>
    
    
            <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"/>
    
            </div>
        </section>
  )
}

export default ProjectsectionTwo
