import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import InfoSection3 from '../components/InfoSection3';
import InfoSection4 from '../components/InfoSection4';
import {
  homeObjOne,
  // homeObjTwo,
  // homeObjThree,
  // homeObjFour,
  // homeObjFive
} from '../components/InfoSection/Data';
import {
  // homeObjOne,
  homeObjTwo,
  // homeObjThree,
  // homeObjFour,
  // homeObjFive
} from '../components/InfoSection2/Data';
import {
  // homeObjOne,
  // homeObjTwo,
  homeObjThree,
  // homeObjFour,
  // homeObjFive aquí se debe descomentar en caso de usarse
} from '../components/InfoSection3/Data';
import {
  // homeObjOne,
  // homeObjTwo,
  // homeObjThree,
  homeObjFour,
  // homeObjFive
} from '../components/InfoSection4/Data';
import Services from '../components/Services';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <HeroSection /> */}
      <InfoSection {...homeObjOne} /> {/* Welcome to a new paradigm in social tokens*/}
      <InfoSection2 {...homeObjTwo} /> {/*Tokenomics*/}
      <Services /> {/*Game Stats*/}
      <InfoSection4 {...homeObjFour} /> {/*Game Mechanics*/}
      <InfoSection3 {...homeObjThree} /> {/*DEFLACTIONARY MECHANISM*/}
      
      {/* <InfoSection3 {...homeObjFive} /> */}
      <Footer />
    </>
  );
}

export default Home;
