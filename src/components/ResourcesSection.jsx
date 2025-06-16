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
const ResourcesSection = () => {
  return (
    <div>
        <Header/>
        <ResourcesSectionOne/>
        <ResourcesSectionTwo/>
        <BannerRemake text="freebies ahead"
          footerText="how it's work"
          footerLeft={BsQuestion}
          direction="left"
          isnumber="no"
           isprojecticon = "yes" 
          topIcon={GrGift}
          />
          <ResourcesSectionthree/>
          <BannerRemake text="code snippets"
          footerText="copy → paste → enjoy"
          footerLeft={IoIosArrowRoundForward}
          direction="right"
          isnumber="no"
           isprojecticon = "no" 
          topIcon={IoMdHeartEmpty}
          />
      
    </div>
  )
}

export default ResourcesSection
