import React from 'react';

function ResourcesSectionfour() {
  return (
    <section>
      <div className='relative h-[190px] '>
        {/* Vertical border lines */}
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        {/* Centered text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-madefor text-center text-[1.01rem] text-darkgray">
          <p>Okay, enough talking... Here are the codes, enjoy!</p>
        </div>

        {/* Bottom border lines */}
    
      </div>
    </section>
  );
}

export default ResourcesSectionfour;
