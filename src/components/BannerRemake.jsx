import React from 'react';

const BannerRemake = ({
  text,
  footerText,
  footerLeft,
  direction = 'right',
  topIcon,
  isnumber = 'yes' 
}) => {
  const scrollClass = direction === 'left' ? 'scroll-left' : 'scroll-right';
  const number = isnumber === 'yes' ? 'text-sm' : 'mt-1';

  return (
    <section>
      <div className='relative h-[255px]'>
        {/* Vertical lines */}
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        {/* Scrolling text */}
        <div className="absolute left-[75px] right-[75px] top-1/2 -translate-y-1/2 overflow-hidden h-full flex items-center">
          <div className={`text-[9.4rem] uppercase font-madefor font-medium text-darkgray flex items-center whitespace-nowrap ${scrollClass} ${number}`}>
            <p className="flex flex-row items-center justify-center w-full gap-3">
              {Array(4).fill(null).map((_, i) => (
                <React.Fragment key={i}>
                  {text}
                  <span className="text-brightred text-4xl mx-4">
                    {topIcon ? React.createElement(topIcon) : null}
                  </span>
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        {/* Footer bar */}
        <div className="absolute left-0 bottom-0 w-full border-b border-t border-black/25">
          <div className='flex flex-row'>
            <div className='justify-center items-center w-fit left-10 ml-14 text-center text-darkgray'>
              <span className="w-[20px] block">
                {typeof footerLeft === 'string'
                  ? <span className="font-madefor">{footerLeft}</span>
                  : React.createElement(footerLeft)}
              </span>
            </div>
            <div className="w-[1390px] bg-darkgray text-white text-[0.55rem] py-1 px-5 font-madefor uppercase">
              {footerText}
            </div>
            <div className='w-fit flex items-center justify-center ml-[2px]'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerRemake;
