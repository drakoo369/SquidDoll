import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(41,20,31) linear-gradient(0deg, rgba(41,20,31,1) 25%, rgba(0,0,0,1) 100%);

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #602E48;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesCard2 = styled.div`
  background: #602E48;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  max-height: 340px;
  padding: 30px;
  grid-column-start: 2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    grid-column-start: 1;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;

export const ServicesPFlicker = styled.p`
  .text {
    font-size: 1rem;
    color: #fff;
    text-align: center;
  }

  .parpadea {
  
    animation-name: parpadeo;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  
    -webkit-animation-name:parpadeo;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }
  
  @-moz-keyframes parpadeo{  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
  }
  
  @-webkit-keyframes parpadeo {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
     100% { opacity: 1.0; }
  }
  
  @keyframes parpadeo {  
    0% { opacity: 1.0; }
     50% { opacity: 0.0; }
    100% { opacity: 1.0; }
  }
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
  background: #DD579E; //fondo (original: fff)
  color: #FFFFFF; 
}
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