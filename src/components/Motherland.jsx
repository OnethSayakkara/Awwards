import React from 'react'
import sl from "../assets/img/sl3.png"
import { FaLocationDot } from "react-icons/fa6";

function Motherland  ()  {
  return (
    <section>
        <div className='relative h-[900px]'>

        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        <p className='absolute right-[28.5rem] top-7 font-madefor text-xs'>FROM A SMALL PLACE KNOWN<br/> AS GALLE, LOCATED IN SRI LANKA</p>
        <img src={sl} alt='man' className='absolute top-28 left-[30%] w-[562px]'/>
        <FaLocationDot className='absolute bottom-[8.8rem] text-brightred text-4xl left-[40rem]'/>
        <div className="absolute bottom-5 left-0 w-full border-t border-black scale-y-[0.2]"></div>

        </div>
    </section>
  )
}

export default Motherland
