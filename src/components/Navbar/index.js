import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
  // NavBtnLink2
  NavBtnWhenSelectedAccount,
} from './NavbarElements';
import { 
  onConnect, 
  selectedAccountFunction 
} from '../../utils/Web3Interface.js';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const fetchSelectedAccount = () => {
    selectedAccountFunction().then((selectedAccount) => {
      setSelectedAccount(selectedAccount);
    }).catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    setInterval(() => {
      fetchSelectedAccount();
    },[500]);
  },[selectedAccount]);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
            <div class="sign">
            <span class="fast-flicker">s</span>quid<span class="flicker">do</span>ll
            </div>
              {/* dolla */}
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  // onClick={fetchSelectedAccount} // si se da click aquí fetchea la address que está conectada
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}web3Handler
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='tokenomics'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Tokenomics
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='game'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Game
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='mechanics'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Mechanics
                </NavLinks> 
              </NavItem>
              <NavItem>
                <NavLinks
                  to='burning'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Burning
                </NavLinks>
              </NavItem>
              
              {/* <NavItem>
                <NavLinks
                  to='optional2'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Optional2
                </NavLinks>
              </NavItem> */}
              
            </NavMenu>
            <NavBtn>
             {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
             {/* <NavBtnLink 
                to={{ pathname: "https://stackoverflow.com/questions/42914666/react-router-external-link" }} 
                target="_blank"
                >
                  Buy Squiddoll 
              </NavBtnLink> */}
              <div> 
              {selectedAccount ? (
                <NavBtnWhenSelectedAccount
                  to={{ pathname: `https://bscscan.com/address/${selectedAccount}` }}
                  target="_blank"
                >
						      {selectedAccount.slice(0, 6) + '...' + selectedAccount.slice(37, 42)}
                </NavBtnWhenSelectedAccount>
              ) : (
                <NavBtnLink onClick={onConnect}>Unlock Wallet</NavBtnLink>
              )}
              </div>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
