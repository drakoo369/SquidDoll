import React, { useState, useEffect } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

import {  
  // getTotalSupply, 
  // getOwner,
  // mintToken
} from '../../utils/Web3Interface.js';

function HeroSection() {
  let updateTime = 2000;

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  // const [supply, setSupply] = useState(0);
  // const [owner, setOwner] = useState("");
  // const [minted, setMinted] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     getTotalSupply().then(supply => {
  //       setSupply(supply);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  //   }, []);

  //   setInterval(() => {
  //     getOwner().then(owner => {
  //       setOwner(owner);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  //   }, []);
  // },[]);

  // const mint = () => {
	// 	mintToken().then((tx) => {
	// 			console.log(tx);
	// 			setMinted(true);
	// 		}).catch((err) => {
	// 			console.log(err);
	// 		});
	// };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Virtual Banking Made Easy
          {/* TotalSupply = {supply.toString().slice(0, 10)} */}
        </HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
          {/* Owner = {owner.slice(0, 5) + '...' + owner.slice(38, 42)} */}
        </HeroP>
        <HeroBtnWrapper>
          <Button
            // to='signup'

            // onClick={() => mint()}

            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Mint Token {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
