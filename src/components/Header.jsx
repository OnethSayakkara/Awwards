import React from 'react';

function Header() {
  return (
    <section>
      <div className="relative h-auto p-5">
        {/* Left ultra-thin vertical border */}
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        
        {/* Right ultra-thin vertical border */}
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        {/* Content inside the borders */}
        <div className="ml-[70px] mr-[70px] h-full flex items-center justify-between">
          {/* Logo */}
          <p className="text-darkneutral font-bold font-madefor">Thing by Oneth</p>

            <div className='justify-between flex flex-row gap-28'>
            <nav className="font-size text-darkgray font-madefor">
            <p className='text-mediumgray py-1'>Status</p>
            <p>Currently available for<br/>any type  of collaboration</p>
          </nav>

                    <nav className="font-size text-darkgray font-madefor spcae-y-2">
            <p className='text-mediumgray py-1'>Say hi</p>
            <div className='space-x-1'>
            <a href="#about" className="hover:text-black transition">Instergram,</a>
            <a href="#example" className="hover:text-black transition">Discord,</a>
            </div>
            <div className='space-x-1'>
            <a href="#about" className="hover:text-black transition">Github,</a>
            <a href="#example" className="hover:text-black transition">X</a>
            </div>
          </nav>
        
          {/* Navigation */}
          <nav className="font-size text-darkgray font-madefor spcae-y-2">
            <p className='text-mediumgray py-1'>Navigate</p>
            <div className='space-x-1'>
            <a href="#about" className="hover:text-black transition">Projects,</a>
            <a href="/about" className="hover:text-black transition">About,</a>
            </div>
            <div className='space-x-1'>
            <a href="#about" className="hover:text-black transition">Resources,</a>
            <a href="" className="hover:text-black transition">Contact</a>
            </div>
          </nav>
          </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]"></div>
        </div>
        

    </section>
  );
}

export default Header;
