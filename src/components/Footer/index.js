import React from 'react';
import {
  // FaFacebook,
  // FaInstagram,
  // FaYoutube,
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaBookOpen,
  // FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destinations</FooterLink>
              <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Submit Video</FooterLink>
              <FooterLink to='/'>Ambassadors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Youtube</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Socials
            </SocialLogo>
            
            <SocialIcons>
              {/* <SocialIconLink  
                target='_blank' 
                aria-label='Facebook'
                href='/'
                >
                <FaFacebook />
              </SocialIconLink> */}
              {/* <SocialIconLink  
                target='_blank' 
                aria-label='Instagram'
                href='/'
                >
                <FaInstagram />
              </SocialIconLink> */}
              {/* <SocialIconLink
                href='//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink> */}
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='//www.twitter.com/briandesignz'
              >
                <FaTwitter />
              </SocialIconLink>
              {/* <SocialIconLink  
                target='_blank' 
                aria-label='Linkedin'
                href='/'
                >
                <FaLinkedin />
              </SocialIconLink> */}
              <SocialIconLink  
                target='_blank' 
                aria-label='Telegram'
                href='https://t.me/squiddoll_official'
                >
                <FaTelegramPlane />
              </SocialIconLink>
              <SocialIconLink  
                target='_blank' 
                aria-label='Discord'
                href='/'
                >
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink  
                target='_blank' 
                aria-label='WhitePaper'
                href='/'
                >
                <FaBookOpen />
              </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>                                                                                </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
