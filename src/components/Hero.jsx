import React from 'react'
import loadingAnimation from '../assets/animations/a2.json';
import Lottie from 'lottie-react';
import Button from './Button';

function Hero  () {
  return (
    <section>
    <div className='relative h-[450px] px-5'>
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className='absolute ml-[70px] top-10'>
        <p className='font-madefor text-5xl'>Hello, my name is Oneth Vindima.<br/>I'm a <span className='text-brightred'>Web Development Engineer</span><br/>based in Galle, Sri Lanka.</p>
        <div className=' flex flex-row'>
        <div>
        <Button title="Get in touch" containerClass="mt-14 font-medium font-madefor text-white bg-darkgray py-2 px-7 rounded-full" />
        </div>
         <div>
      <Lottie animationData={loadingAnimation} loop={true}  className="w-[350px] -mt-11 ml-[500px]" />
    </div>
        </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"></div>
    </div>
    </section>
  )
}

export default Hero
