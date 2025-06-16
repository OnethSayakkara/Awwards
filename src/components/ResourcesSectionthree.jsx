import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function ResourcesSectionthree  ()  {
  return (
        <section>
                    <div className='relative h-[585px]'>
                    <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                    <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                    
                    <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                    <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
                    <div className='absolute w-[700px] font-madefor  space-y-5 top-6 left-[6.5rem] text-[1.01rem] text-darkgray'>
                        <div className='items-center flex flex-row uppercase text-brightred text-[0.7rem] font-medium font-madefor'>
                            <p>copy </p>
                            <IoIosArrowRoundForward/>
                            <p> paste </p>
                            <IoIosArrowRoundForward/>
                            <p> enjoy</p>

                        </div>
                    <p>The snippets are provided in HTML format, so integrating them into your project is as simple as copying and pasting. Each snippet comes with detailed comments to walk you through the code, helping you understand what's happening and how you can tweak it to suit your needs. If you're already working with a pre-existing HTML structure, no worries—just grab the JavaScript and CSS from the snippet. Just remember to ensure that the IDs in your project match those in the snippet for everything to function seamlessly.</p>
                    
                    </div>
                    
                    <div className='absolute w-[620px]  tracking-widest font-madefor font-semibold left-[6.5rem] space-y-7 bottom-11 text-[0.59rem] uppercase text-darkgray'>
                        <p className=' text-brightred'>
                            note
                        </p>
                        <p>
                            new snippets will be released every week, and to make it easier for you, they’ll be organized into three levels: beginner, intermediate, and advanced. whether you're just starting out or looking to challenge yourself, there’s something for everyone!
                        </p>
                    </div>
            

                    <div className="absolute bottom-5 left-0 w-full border-t border-black scale-y-[0.2]"/>
            
                    <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"/>
            
                    </div>
        </section>
  )
}

export default ResourcesSectionthree
