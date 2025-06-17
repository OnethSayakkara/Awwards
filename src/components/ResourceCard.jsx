import React from 'react';

const getAlignment = (index) => {
  switch (index % 4) {
    case 0:
      return 'justify-start';   // left
    case 1:
    case 3:
      return 'justify-center';  // center
    case 2:
      return 'justify-end';     // right
    default:
      return 'justify-center';
  }
};

const ResourceCard = ({ title, level, date, index }) => {
  const align = getAlignment(index);



  return (
    <div className="relative w-full ">
      {/* Decorative lines */}
      <div className="absolute h-[21px] top-0 left-0 w-full border-t border-b border-black/15 z-0" ></div>
      <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2] z-0" />
      <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2] z-0" />
      <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2] z-0" />
      <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2] z-0" />
      
       

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className={`flex w-full ${align} mb-10 mt-16 `}>
          <div className="bg-gray-100 p-6 rounded-xl w-[22rem] shadow hover:shadow-xl transition">
            <p className="text-xs uppercase text-gray-400 font-semibold">{level}</p>
            <h2 className="text-lg font-bold mt-2">{title}</h2>
            <p className="text-xs text-gray-500 mt-1">{date}</p>
            <a
              href="#"
              className="text-red-500 font-semibold mt-3 inline-block hover:underline"
            >
              Get on CodePen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
