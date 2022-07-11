import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import { mintToken, 
  // transferToken 
} from '../../utils/Web3Interface.js';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  TopLine2,
  Heading,
  Subtitle,
  Hyperlinked,
  BtnWrap,
  BtnInfo,
  BtnInfo2,
  ImgWrap,
  Img
} from './InfoElements4';

const InfoSection4 = ({
  lightBg,
  imgStart,
  topLine,
  topLine2,
  lightText,
  headline,
  description,
  description2,
  description3,
  hyperlink,
  buttonLabel,
  buttonLabel2,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);

  const [transferred, setTransferred] = useState(false);

  // const transfer = () => {
	// 	transferToken().then((tx) => {
	// 			console.log(tx);
	// 			setTransferred(true);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <TopLine2>{topLine2}</TopLine2>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <Hyperlinked
                  darkText={darkText}
                  to={{ pathname: "https://google.com" }}
                  target="_blank"
                >
                  {hyperlink}
                </Hyperlinked>
                {/* <BtnInfo 
                    // to={{ pathname: "https://google.com" }} 
                    // target="_blank"
                    onClick={() => transfer()} 
                  >
                      {buttonLabel} 
                </BtnInfo> */}
                {/* <BtnInfo2 
                    to={{ pathname: "https://github.com" }} 
                    target="_blank" 
                  >
                      {buttonLabel2}
                    </BtnInfo2> */}
                {/* <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection4;
