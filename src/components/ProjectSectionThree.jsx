import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function ProjectSectionThree  ()  {
  return (
    <section>
                <div className='relative h-[570px]'>
                <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                
                <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                <div className='absolute w-[850px] font-madefor space-y-7 top-6 left-[6.5rem] text-[1.68rem] text-darkgray'>
                <p>Need the whole thing handled from the ground up? I’ll collaborate with you to design and build a custom website that reflects your brand, meets your goals, and connects with your users. From initial strategy and wireframes to polished design and final development, I take care of the entire process. The result is a fast, responsive, and accessible website — thoughtfully crafted, with design and code working seamlessly together.</p>
                
                </div>
                <div className='absolute flex flex-row left-28 bottom-5 text-brightred  justify-between uppercase font-madefor'>
                    <IoIosArrowRoundForward className='text-4xl'/>
                    
                </div>
                <p className='absolute text-2xl right-24 text-brightred uppercase bottom-5'>contact</p>
        
        
                <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"/>
        
                </div>
    </section>

  )
}

export default ProjectSectionThree
