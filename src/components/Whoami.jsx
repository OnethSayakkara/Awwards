import React from 'react'
import man from "../assets/img/man.jpg"

function Whoami  () {
  return (
    <section id='whoami' className='relative h-[623px]'>
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[680px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[700px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"/>
        <div className="absolute bottom-5 left-0 w-full border-t border-black scale-y-[0.2]"/>
        
        <div className='flex flex-row'>
            
            <div>
                <p className='w-[315px] font-madefor text-justify absolute left-24 top-5 tracking-wide text-base font-darkneutral'>
                  I’m a creative developer who’s always been curious about how things work — not just the code, but the feeling behind it. I love building things that are not only functional, but also intuitive and a little bit delightful. Whether it’s a micro-interaction or a full experience, I believe good design is in the details.<br/>
This space is my way of sharing what I’ve learned, what I’m still figuring out, and hopefully giving something useful back to the community.
                </p>
                <p className='absolute bottom-10 text-brightred uppercase w-[315px] font-madefor text-justify left-24 tracking-wide text-[0.8rem]'>
                It's all part of my way of staying curious, staying creative, and staying in motion.
                </p>
            </div>
            <img src={man} alt='man' className='absolute top-5 right-24 w-[562px]'/>

        </div>
    </section>
  )
}

export default Whoami
