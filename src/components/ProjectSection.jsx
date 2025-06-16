import React from 'react'
import Footer from './Footer';
import ProjectsI9Intro from './ProjectsI9Intro';
import ImageSlider from './ImageSlider';
import ProjectsectionTwo from './ProjectsectionTwo';
import BannerRemake from './BannerRemake';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LuPackageOpen } from "react-icons/lu";
import ProjectSectionThree from './ProjectSectionThree';
import { TbBracketsAngle } from "react-icons/tb";
import Header from './Header';
import { RiMessage2Fill } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";


function ProjectSection  ()  {
  return (
    <div>
          <Header/>
          <ProjectsI9Intro/>
          <ImageSlider/>
            <BannerRemake text="development"
          footerText="from static to alive"
          footerLeft={IoIosArrowRoundForward}
          direction="right"
          isprojecticon = "yes" 
          topIcon={TbBracketsAngle}
          />
          <ProjectsectionTwo/>
          <BannerRemake text="full package"
          footerText="start to launch"
          footerLeft={IoIosArrowRoundForward}
          direction="left"
        isprojecticon = "yes" 
          topIcon={LuPackageOpen}
          />
          <ProjectSectionThree/>
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
  )
}

export default ProjectSection
