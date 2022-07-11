import { getRoles } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-3.svg';
// import Icon3 from '../../images/svg-5.svg';
import {
  onConnect, 
  getOngoingGame,
  getRegistrationOpen,
  getRewardAmount,
  getMinBalance,
  getEndBlock,
  getBurned,
  participateGame,
  isParticipating,
  getTotalSupply,
  selectedAccountFunction
} from '../../utils/Web3Interface.js';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesCard2,
  // ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesPFlicker,
  BtnInfo,
  Hyperlinked
} from './ServicesElements';

const Services = () => {
  // let updateTime = 15000;

  const [ongoing, setOngoing] = useState(false);
  const [rewardAmount, setRewardAmount] = useState(0);
  const [registration, setRegistration] = useState(null);
  const [minBalance, setMinBalance] = useState(0);
  const [endblock, setEndblock] = useState(0);
  const [burned, setBurned] = useState(0);
  const [part, setPart] = useState(false);
  const [remainingSupply, setRemainingSupply] = useState(0);

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [accountConnected, setAccountConnected] = useState(null);

  let numberFormat = new Intl.NumberFormat('en-US');

  useEffect(() => {
    setInterval(() => {
      getOngoingGame().then(ongoing => {
        setOngoing(ongoing);
      }).catch(err => {
        console.log(err);
      });
    }, []);

    setInterval(() => {
      getRewardAmount().then(rewardAmount => {
        setRewardAmount(rewardAmount);
      }).catch(err => {
        console.log(err);
      });
    }, []);

    setInterval(() => {
      getRegistrationOpen().then(registration => {
        setRegistration(registration);
      }).catch(err => {
        console.log(err);
      });
    }, []);

    setInterval(() => {
      getMinBalance().then(minBalance => {
        setMinBalance(minBalance);
      }).catch(err => {
        console.log(err);
      });
    }, []);

    setInterval(() => {
      getEndBlock().then(endblock => {
        setEndblock(endblock);
      }).catch(err => {
        console.log(err);
      });
    }, []);

    setInterval(() => {
      getBurned().then(burned => {
        setBurned(burned);
      }).catch(err => {
        console.log(err);
      });
    }, []);
    
    setInterval(() => {
      getTotalSupply().then(remainingSupply => {
        setRemainingSupply(remainingSupply);
      }).catch(err => {
        console.log(err);
      });
    });

  },[]);

  const fetchSelectedAccount = () => {
    isParticipating().then((selectedAccount) => {
      setSelectedAccount(selectedAccount);
    }).catch(err => {
      console.log(err);
    });
  };

  const fetchAccountConnected = () => {
    selectedAccountFunction().then((accountConnected) => {
      setAccountConnected(accountConnected);
    }).catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    setInterval(() => {
      fetchSelectedAccount();
    },[500]);
  }, [selectedAccount]);

  useEffect(() => {
    setInterval(() => {
      fetchAccountConnected();
    },[500]);
  }, [accountConnected]);

  const participate = () => {
		participateGame().then((tx) => {
				console.log(tx);
				setPart(true);
			}).catch((err) => {
				console.log(err);
			});
	};

console.log(rewardAmount);
  return (
    <ServicesContainer id='game'>
      <ServicesH1>GAME</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          {/* <ServicesIcon src={Icon1} onClick={() => fetchTotalSupply()} /> */}
          <ServicesH2>Ongoing Game</ServicesH2>
          <ServicesP>
            {/* {supply.toString().slice(0, 10)}  */}
            { accountConnected ? 
              ongoing ? "YES" : "NOT"
              :
              <ServicesPFlicker>
                  <span class="parpadea text">Unlock Wallet...</span>
                </ServicesPFlicker>
              }
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon2} /> */}
          <ServicesH2>Reward Amount</ServicesH2>
          <ServicesP>
            { accountConnected ? 
              numberFormat.format(rewardAmount)
            :
              <ServicesPFlicker>
                  <span class="parpadea text">Unlock Wallet...</span>
                </ServicesPFlicker>
            }
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesH2>Registration Status</ServicesH2>
          <ServicesP>
            { accountConnected ?
              registration ? "OPENED" : "CLOSED"
            :
              <ServicesPFlicker>
                  <span class="parpadea text">Unlock Wallet...</span>
                </ServicesPFlicker>
            }
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesH2>Min. Balance required</ServicesH2>
          <ServicesP>
            {/* Unlock our special membership card that returns 5% cash back. */}
            { accountConnected ? 
              numberFormat.format(minBalance) 
            : 
              <ServicesPFlicker>
                <span class="parpadea text">Unlock Wallet...</span>
                </ServicesPFlicker>
            }
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesH2>End Block</ServicesH2>
          <ServicesP>
            { accountConnected ? 
              endblock 
            : 
              <ServicesPFlicker>
                  <span class="parpadea text">Unlock Wallet...</span>
                </ServicesPFlicker>
            }
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesH2>Tokens Burned</ServicesH2>
          <ServicesP>
            {/* Unlock our special membership card that returns 5% cash back. */}
            { accountConnected ?
              numberFormat.format(burned)
            :
              <ServicesPFlicker>
                  <span class="parpadea text">Unlock Wallet...</span>
                </ServicesPFlicker>
            }
          </ServicesP>
        </ServicesCard>
        <ServicesCard2>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesH2>Tokens to Distribute</ServicesH2>
          <ServicesP>
            {/* Unlock our special membership card that returns 5% cash back. */}
            { accountConnected ? 
              numberFormat.format(remainingSupply)
            :
              <ServicesPFlicker>
                  <span class="parpadea text">Unlock Wallet...</span>
                </ServicesPFlicker>
            }
          </ServicesP>
        </ServicesCard2>
      </ServicesWrapper>
      <br/>
      <br/>
        <div> 
        { accountConnected ? 
          (
          selectedAccount ?
          <ServicesH2>
            You're Participating!
          </ServicesH2>
        :
          <BtnInfo 
          // to={{ pathname: "https://google.com" }} 
          // target="_blank"
          onClick={() => participate()} 
          >
            PARTICIPATE
          </BtnInfo>
          )
        :
          <BtnInfo 
            // to={{ pathname: "https://google.com" }} 
            // target="_blank"
            onClick={onConnect} 
          >
            UNLOCK WALLET  
          </BtnInfo>
        }  
        </div>

      <br/>
      <Hyperlinked
        to={{ pathname: "https://www.youtube.com/watch?v=CroczWHmltY" }} 
        target="_blank"
      >
        How to participate?
      </Hyperlinked>
    </ServicesContainer>
  );
};

export default Services;
