import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px; //original: -80px
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  // color: #fff;
  // justify-self: flex-start;
  // cursor: pointer;
  // font-size: 1.5rem;
  // display: flex;
  // align-items: center;
  // margin-left: 24px;
  // font-weight: bold;
  // text-decoration: none;

  @font-face {
    font-family: Clip;
    src: url("https://acupoftee.github.io/fonts/Clip.ttf");
  }

  body {
    background-color: #141114;
    background-image: linear-gradient(335deg, black 1.4375rem, transparent 1.4375rem),
      linear-gradient(155deg, black 1.4375rem, transparent 1.4375rem),
      linear-gradient(335deg, black 1.4375rem, transparent 1.4375rem),
      linear-gradient(155deg, black 1.4375rem, transparent 1.4375rem);
    background-size: 3.625em 3.625em;
    background-position: 0em 0.125rem, 0.25rem 2.1875rem, 1.8125rem 1.9375rem, 2.125rem 0.375rem;
  }
  
  .sign {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5%;
    height: 50%;
    background-image: radial-gradient(
      ellipse 50% 35% at 50% 50%,
      #6b1839,
      transparent
    );
    transform: translate(-50%, -50%);
    letter-spacing: 1;
    left: 18%;
    top: 50%;
    font-family: "Arial";
    text-transform: uppercase;
    font-size: 2.85vw;
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    animation: shine 2s forwards, flicker 3s infinite;
  }
  
  @keyframes blink {
    0%,
    22%,
    36%,
    75% {
      color: #ffe6ff;
      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
    28%,
    33% {
      color: #ff65bd;
      text-shadow: none;
    }
    82%,
    97% {
      color: #ff2483;
      text-shadow: none;
    }
  }
  
  .flicker {
    animation: shine 2s forwards, blink 3s 2s infinite;
  }
  
  .fast-flicker {
    animation: shine 2s forwards, blink 10s 1s infinite;
  }
  
  @keyframes shine {
    0% {
      color: #6b1839;
      text-shadow: none;
    }
    100% {
      color: #ffe6ff;
      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
  }
  
  @keyframes flicker {
    from {
      opacity: 1;
    }
  
    4% {
      opacity: 0.9;
    }
  
    6% {
      opacity: 0.85;
    }
  
    8% {
      opacity: 0.95;
    }
  
    10% {
      opacity: 0.9;
    }
  
    11% {
      opacity: 0.922;
    }
  
    12% {
      opacity: 0.9;
    }
  
    14% {
      opacity: 0.95;
    }
  
    16% {
      opacity: 0.98;
    }
  
    17% {
      opacity: 0.9;
    }
  
    19% {
      opacity: 0.93;
    }
  
    20% {
      opacity: 0.99;
    }
  
    24% {
      opacity: 1;
    }
  
    26% {
      opacity: 0.94;
    }
  
    28% {
      opacity: 0.98;
    }
  
    37% {
      opacity: 0.93;
    }
  
    38% {
      opacity: 0.5;
    }
  
    39% {
      opacity: 0.96;
    }
  
    42% {
      opacity: 1;
    }
  
    44% {
      opacity: 0.97;
    }
  
    46% {
      opacity: 0.94;
    }
  
    56% {
      opacity: 0.9;
    }
  
    58% {
      opacity: 0.9;
    }
  
    60% {
      opacity: 0.99;
    }
  
    68% {
      opacity: 1;
    }
  
    70% {
      opacity: 0.9;
    }
  
    72% {
      opacity: 0.95;
    }
  
    93% {
      opacity: 0.93;
    }
  
    95% {
      opacity: 0.95;
    }
  
    97% {
      opacity: 0.93;
    }
  
    to {
      opacity: 1;
    }
  }

  // @media screen and (max-width: 1500px) {
      
  //       font-size: 7vw;
      
  //     }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } //original max-width: 768px para todos
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #DD579E;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 5px;
  background: #DD579E;
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #46C0C4;
    color: #FFFFFF;
  }
`;

export const NavBtnWhenSelectedAccount = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bolder;
  font-size: 20px;

  &.active {
    border-bottom: 3px solid #DD579E;
  }
`;

// export const NavBtnLink2 = styled(LinkR)`
// border-radius: 50px;
// background: #DD579E;
// white-space: nowrap;
// padding: 10px 22px;
// color: #FFFFFF;
// font-size: 16px;
// outline: none;
// border: none;
// cursor: pointer;
// transition: all 0.2s ease-in-out;
// text-decoration: none;

// &:hover {
//   transition: all 0.2s ease-in-out;
//   background: #46C0C4;
//   color: #FFFFFF;
// }
// `;