import React from 'react';

const getAlignment = (index) => {
  switch (index % 4) {
    case 0:
      return 'justify-start';
    case 1:
    case 3:
      return 'justify-center';
    case 2:
      return 'justify-end';
    default:
      return 'justify-center';
  }
};

const getTopicMargin = (index) => {
  switch (index % 4) {
    case 0:
      return 'ml-[6.2rem]';
    case 1:
      return 'ml-[35.5rem]';
    case 2:
      return 'ml-[64.4rem]';
    case 3:
      return 'ml-[35.5rem]';
    default:
      return '';
  }
};

const ResourceCard = ({ title, level, index, topic, link, sitelink }) => {
  const align = getAlignment(index);
  const topicMargin = getTopicMargin(index);

  const isPlaceholder = !title || !level || !link;

  return (
    <div className="relative w-full h-[240px]">
      {/* Topic Label */}
      <div
        id="topic"
        className={`absolute h-[22px] top-0 left-0 w-full border-t border-b border-black/15 z-0 flex items-center`}
      >
        <span className={`text-xs text-darkgray text-[0.599rem] font-semibold px-4 font-madefor uppercase ${topicMargin}`}>
          {topic}
        </span>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2] z-0" />
      <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2] z-0" />
      <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2] z-0" />
      <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2] z-0" />

      {/* Card Content */}
      <div className="max-w-screen-xl mx-auto relative z-10 uppercase font-madefor">
        <div className={`flex w-full ${align} mb-8 mt-12`}>
          <div className={`p-5 rounded-lg w-[22rem] flex flex-row gap-8 transition
            ${isPlaceholder ? 'bg-neutral-300/65' : 'bg-neutral-300/70'}`}>

            {/* Image */}
            {isPlaceholder ? (
              <div className="w-[120px] h-[120px] rounded-xl bg-darkgray flex items-center justify-center text-white text-xl font-bold">
                ?
              </div>
            ) : (
              <img
                src={link}
                alt="resource thumbnail"
                className="w-[120px] h-[120px] rounded-xl object-cover"
              />
            )}

            {/* Text Section */}
            <div className="flex flex-col justify-between">
              {isPlaceholder ? (
                <>
                  <p className="text-[0.71rem] uppercase text-mediumgray font-bold bg-mediumgray w-24 h-3 "></p>
                  <h2 className="bg-darkgray w-32 h-3 mt-2"></h2>
                  <span className="bg-brightred w-28 h-3 mt-10 "></span>
                </>
              ) : (
                <>
                  <p className="text-[0.71rem] uppercase text-mediumgray font-bold">{level}</p>
                  <h2 className="font-bold mt-1 text-[0.73rem]">{title}</h2>
                  <a
                    href={sitelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brightred font-medium text-[0.7rem] mt-14 cursor-pointer inline-block hover:underline"
                  >
                    Get on CodePen
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ResourceCard;

