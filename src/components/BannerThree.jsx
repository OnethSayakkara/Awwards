import React from 'react'
import { BiSolidLeaf } from "react-icons/bi";

function BannerThree  ()  {
  return (
    <section>
        <div className='relative h-[255px]'>
        
                     <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                
                <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                     <div className="absolute left-[75px] right-[75px] top-1/2 -translate-y-1/2 overflow-hidden h-full flex items-center">
                            <div
                             
                              className="scroll-about text-[9.4rem] uppercase font-madefor font-medium text-darkgray flex items-center"
                            >
                              <p className="flex flex-row items-center justify-center w-full gap-3">
                                touching grass
                                <BiSolidLeaf className="text-brightred text-4xl mx-4"/>
                                touching grass
                                <BiSolidLeaf className="text-brightred text-4xl mx-4"/>
                               
                               
                               
                              </p>
                            </div>
                        </div>
                <div className="absolute left-0 bottom-0 w-full border-b border-t border-black/25">
                <div className='flex flex-row'>
                    <div className='justify-center items-center w-fit left-10 ml-14 text-center text-sm font-madefor'>
                        <p className="w-[20px]">3</p>
                     </div>
                     <div className="w-[1390px] bg-darkgray text-white text-[0.55rem] py-1 px-5 font-madefor uppercase">
                          beyond the screen
                    </div>
                    <div className='w-fit flex items-center justify-center ml-[2px]'>
                    
                    </div>
                    
        
                </div>
                    </div>
        
        
                </div>
    </section>
  )
}

export default BannerThree
