import React from 'react'
import Aboutme from './Aboutme';
import Whoami from './Whoami';
import Motherland from './Motherland';
import MyApproach from './MyApproach';
import BeyondtheScreen from './BeyondtheScreen';
import Header from './Header';
import Footer from './Footer';
import BannerRemake from './BannerRemake';
import { RiSettings5Fill } from "react-icons/ri";
import { BiSolidLeaf } from "react-icons/bi";
import { RiMessage2Fill } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";

 function AboutSection  ()  {
  return (
    <div>
        <Header/>
        <Aboutme/>
        <Whoami/>
        <Motherland/>
        <BannerRemake text="the process"
          footerText="my apporach"
          footerLeft="2"
          direction="right"
          isnumber="yes"
          topIcon={RiSettings5Fill}
          />
        <MyApproach/>
        <BannerRemake text="touching grass"
          footerText="beyond the screen"
          footerLeft="3"
          direction="left"
          isnumber="yes"
          topIcon={BiSolidLeaf}
          />
        <BeyondtheScreen/>
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

export default AboutSection
