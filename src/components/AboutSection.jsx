import React from 'react'
import Aboutme from './Aboutme';
import Whoami from './Whoami';
import Motherland from './Motherland';
import BannerTwo from './BannerTwo';
import MyApproach from './MyApproach';
import BannerThree from './BannerThree';
import BeyondtheScreen from './BeyondtheScreen';
import Header from './Header';
import BannerFour from './BannerFour';
import Footer from './Footer';
import BannerRemake from './BannerRemake';
import { RiSettings5Fill } from "react-icons/ri";
import { BiSolidLeaf } from "react-icons/bi";

 function AboutSection  ()  {
  return (
    <div>
        <Header/>
        <Aboutme/>
        <Whoami/>
        <Motherland/>
        <BannerTwo/>
        <BannerRemake text="the process"
          footerText="my apporach"
          footerLeft="2"
          direction="right"
          isnumber="yes"
          topIcon={RiSettings5Fill}
          />
        <MyApproach/>
        <BannerRemake text="touching grass"
          footerText=" beyond the screen"
          footerLeft="3"
          direction="left"
          isnumber="yes"
          topIcon={BiSolidLeaf}
          />
        <BeyondtheScreen/>
        <BannerFour/>
        <Footer/>
    </div>
  )
}

export default AboutSection
