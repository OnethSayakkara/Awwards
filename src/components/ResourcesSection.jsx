import React from 'react'
import ResourcesSectionOne from './ResourcesSectionOne'
import Header from './Header'
import ResourcesSectionTwo from './ResourcesSectionTwo'
import { GrGift } from "react-icons/gr";
import { BsQuestion } from "react-icons/bs";
import BannerRemake from './BannerRemake';
import ResourcesSectionthree from './ResourcesSectionthree';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import ResourcesSectionfour from './ResourcesSectionfour';
import ResourceCard from './ResourceCard';

const ResourcesSection = () => {
  const resources = [
    { title: 'Display Local Time', level: 'Beginner', date: 'May 20th' },
    { title: 'Light/Dark Switch', level: 'Intermediate', date: 'May 27th' },
    { title: 'CSS Menu Animation', level: 'Beginner', date: 'June 3rd' },
    { title: 'Responsive Nav Bar', level: 'Intermediate', date: 'June 10th' },
    { title: 'Scroll Animation', level: 'Intermediate', date: 'June 17th' },
    { title: 'Gradient Button Hover', level: 'Beginner', date: 'June 24th' },
    { title: 'Custom Cursor Effect', level: 'Intermediate', date: 'July 1st' },
    { title: 'GSAP Slide Reveal', level: 'Advanced', date: 'July 8th' },
  ];

  return (
    <div>
      <Header />
      <ResourcesSectionOne />
      <ResourcesSectionTwo />
      <BannerRemake
        text="freebies ahead"
        footerText="how it's work"
        footerLeft={BsQuestion}
        direction="left"
        isnumber="no"
        isprojecticon="yes"
        topIcon={GrGift}
      />
      <ResourcesSectionthree />
      <BannerRemake
        text="code snippets"
        footerText="copy → paste → enjoy"
        footerLeft={IoIosArrowRoundForward}
        direction="right"
        isnumber="no"
        isprojecticon="no"
        topIcon={IoMdHeartEmpty}
      />
      <ResourcesSectionfour />

      {/* Resource Cards Zig-Zag */}
      <div className="flex flex-col items-stretch">
        {resources.map((res, idx) => (
          <ResourceCard key={idx} {...res} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
