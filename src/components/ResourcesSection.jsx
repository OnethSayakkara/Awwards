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
import { RiMessage2Fill } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";
import Footer from './Footer';


const ResourcesSection = () => {
  const resources = [
    { title: 'Display Local Time', level: 'Beginner',topic: 'utilities & scripts - may 20th', link:'/code1.png',sitelink: 'https://codepen.io/OnethSayakkara/pen/yyNqGdm' },
    { title: 'Light / Dark Switch', level: 'Intermediate',topic: 'utilities & scripts - may 27th', link:'/code2.png' },
    { title: 'CSS Menu Animation', level: 'Beginner',topic: 'buttons - june 3rd', link:'/code3.png' },
    { title: 'scroll direction', level: 'advanced',topic: 'marquees - june 10th', link:'/code4.png' },
    { topic: 'coming up june 20th. .' },
    { topic: 'coming up july 25th. .'},
    { topic: 'coming up july 30th. .'},
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
                  <BannerRemake text="let's connect"
          footerText="let's make awesome happen"
          footerLeft={HiOutlineLink}
          direction="right"
          isnumber="no"
           isprojecticon = "no" 
          topIcon={RiMessage2Fill}
          />
        <Footer/>
    </div>
  );
};

export default ResourcesSection;
