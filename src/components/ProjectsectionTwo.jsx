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
            <div className='absolute flex flex-row left-28 bottom-5 text-brightred  justify-between uppercase font-madefor'>
                <IoIosArrowRoundForward className='text-4xl'/>
                
            </div>
            <p className='absolute text-2xl right-24 text-brightred uppercase bottom-5'>contact</p>
    
    
            <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"/>
    
            </div>
        </section>
  )
}

export default ProjectsectionTwo
