import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? 
    'rgb(0,0,0) linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(41,20,31,1) 100%)' 
    : 
    'rgb(0,0,0) linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(41,20,31,1) 100%)'
    )};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 769px) {
    height: 1400px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 80px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #DC65A4;
  font-size: 20px; //Original 19px
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const TopLine2 = styled.div`
  color: #41AFB3; // original: 01bf71 (el que está: 39A0A4)
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#F7F8FA' : '#F7F8FA')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#F7F8FA' : '#F7F8FA')};
`;

export const Hyperlinked = styled(LinkR)`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#F7F8FA' : '#F7F8FA')};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #381C2A; //fondo (original: fff)
    color: #FFFFFF; 
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BtnInfo = styled(LinkR)`
border-radius: 5px;
background: #46C0C4; //fondo (original: 01bf71)
white-space: nowrap;
padding: 12px 32px;
color: #FFFFFF; //letras (original: 010606)
font-size: 16px;
font-weight: bold;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #46C0C4; //fondo (original: fff)
  color: #FFFFFF; 
}
`;

export const BtnInfo2 = styled(LinkR)`
border-radius: 5px;
background: #46C0C4; //fondo (original: 01bf71)
white-space: nowrap;
padding: 12px 32px;
color: #FFFFFF; //letras (original: 010606)
font-size: 16px;
font-weight: bold;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #DD579E; //fondo (original: fff)
  color: #FFFFFF; 
}
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;
