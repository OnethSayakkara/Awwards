import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function MyApproach  ()  {
  return (
    <section id='myapproach'>
        <div className='relative h-[570px]'>
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className='absolute w-[560px] font-madefor space-y-7 top-6 left-28 text-[1.01rem] text-darkgray'>
        <p>I work best when I’m part of the whole journey — from the first idea to the final line of code. Whether I’m designing and building from scratch, or bringing an existing design to life with clean, responsive development, I focus on creating digital experiences that just feel right.</p>
        <p>I care a lot about the small stuff — the little hovers, transitions, and animations that most people don’t even notice, but definitely feel. Those micro-interactions are what make a site feel smooth, responsive, and alive. I like building things that feel thoughtful, where even the tiniest detail has a purpose.</p>
        <p>A fast, accessible site isn’t a bonus — it’s the baseline. I try to make sure what I build loads fast, works on all devices, and feels good for everyone who uses it. Every project’s different. Sometimes I’m more focused on design systems and patterns, other times it's about shipping features fast. I'm comfortable adapting to what the project needs.</p>

        </div>
        <div className="absolute bottom-5 left-28 right-24 flex justify-between items-center group cursor-pointer">
  {/* Rotating arrow */}
  <IoIosArrowRoundForward className="text-4xl text-brightred transition-transform duration-500 group-hover:-rotate-[45deg]" />

  {/* Animated text */}
  <div className="relative h-[30px] overflow-hidden text-2xl uppercase text-brightred">
    {/* Top Text */}
    <div className="transition duration-500 group-hover:-translate-y-[170%] group-hover:skew-y-[20deg]">
      <p>see my work</p>
    </div>

    {/* Sliding-in Text */}
    <div className="absolute top-0 translate-y-[170%] skew-y-[20deg] transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
       <a href='/projects'>see my work</a>
    </div>
  </div>
</div>




        <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"/>

        </div>
    </section>
  )
}

export default MyApproach
