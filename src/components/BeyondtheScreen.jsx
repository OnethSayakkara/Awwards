import React from 'react'


function BeyondtheScreen  ()  {
  return (
    <section>
        <div className='relative h-[500px] w-full font-madefor text-[1.1rem]'>
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        <div className="absolute right-[680px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[700px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        <p className='absolute left-28 top-5 w-[330px] text-justify'>When I’m not at my desk, you’ll often find me staying active through sports like football, tennis, basketball, or table tennis. Physical activity plays a significant role in my life—it’s not only a way to stay healthy but also a key source of mental clarity and creative inspiration. Whether it’s a challenging workout, a long run, or a simple walk,these moments help me reset and maintain focus.</p>
        <p className='absolute bottom-7 right-80 w-[330px] text-justify'>I also enjoy unwinding with a game of chess or getting lost in a good book. Stepping away from the screen allows me to return with a refreshed perspective and renewed energy.</p>

             <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"/>
        </div>
    </section>
  )
}

export default BeyondtheScreen
