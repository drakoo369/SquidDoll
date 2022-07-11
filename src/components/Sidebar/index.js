import React, { useState, useEffect } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SideBtnWrapWhenSelectedAccount
} from './SidebarElements';
import { onConnect, 
  // selectedAccountFunction 
} from '../../utils/Web3Interface.js';

const Sidebar = ({ isOpen, toggle }) => {

  const [selectedAccount, setSelectedAccount] = useState(null);

  // const fetchSelectedAccount = () => {
  //   selectedAccountFunction().then((selectedAccount) => {
  //     setSelectedAccount(selectedAccount);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // };

  // useEffect(() => {
  //   setInterval(() => {
  //     fetchSelectedAccount();
  //   });
  // },[]);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
      <SideBtnWrap>
          {/* <SidebarRoute 
            to={{ pathname: "https://stackoverflow.com/questions/42914666/react-router-external-link" }} 
            target="_blank"
            >
              Buy Squiddoll
              </SidebarRoute> */}
              <div> 
              {selectedAccount ? (
                <SideBtnWrapWhenSelectedAccount
                  to={{ pathname: `https://mumbai.polygonscan.com/address/${selectedAccount}` }}
                  target="_blank"
                >
						      {selectedAccount.slice(0, 6) + '...' + selectedAccount.slice(37, 42)}
                </SideBtnWrapWhenSelectedAccount>
              ) : (
                <SidebarRoute onClick={onConnect}>Unlock Wallet</SidebarRoute>
              )}
              </div>
        </SideBtnWrap>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='tokenomics'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Tokenomics
          </SidebarLink>
          <SidebarLink
            to='game'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Game
          </SidebarLink>
          <SidebarLink
            to='mechanics'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Mechanics
          </SidebarLink>
          <SidebarLink
            to='burning'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Burning
          </SidebarLink>
          {/* <SidebarLink
            to='optional2'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Optional2
          </SidebarLink> */}
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to={{ pathname: "https://stackoverflow.com/questions/42914666/react-router-external-link" }} 
             target="_blank">Buy Squiddoll</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
