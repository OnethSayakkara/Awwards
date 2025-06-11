import React from 'react'

function Footer ()  {
  return (
    <section>
        <div className='relative h-[500px] font-madefor text-lg'>
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className='relative h-[330px]'>

        <div className="absolute right-[680px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[700px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        <p className='absolute left-24 top-5'>Don't be shy-Say hello!</p>
        <div className='flex flex-col uppercase text-brightred text-[1.1rem] space-y-2 absolute bottom-10 right-[34.7rem]'>
            
            <a href=''>discord</a>
            <a href=''>instagram</a>
            <a href=''>github</a>
            <a href=''>email</a>
            <a href=''>x</a>
            

        </div>
        <div className="absolute bottom-6 left-0 w-full border-t border-black scale-y-[0.2]"/>
        <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"/>
        </div>
        </div>
    </section>
  )
}

export default Footer
