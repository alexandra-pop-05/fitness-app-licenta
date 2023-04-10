import React from 'react';
import { styled } from '@mui/system';
import { Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../img/logoW2.png';

const FooterContainer = styled(Grid)({
  backgroundColor: '#84a59d',
  color: '#f7ede2',
  marginTop: 'auto',
  width: '100%',
  padding: '20px',
  display: 'flex',
});

const LogoContainer = styled(Grid)({
  textAlign: 'center',
});

const SocialIconsContainer = styled(Grid)({
  textAlign: 'center',
});

const SocialIconButton = styled(IconButton)({
  color: '#f7ede2',
  marginRight: '10px',
});

export const Footer = () => {
  return (
    <FooterContainer container>
      <LogoContainer item xs={12}>
        <img src={Logo} alt="Logo" width="50px"  />
      </LogoContainer>
      <SocialIconsContainer item xs={12}>
        <SocialIconButton aria-label="instagram" component={Link} to="/">
          <InstagramIcon />
        </SocialIconButton>
        <SocialIconButton aria-label="facebook" component={Link} to="/">
          <FacebookIcon />
        </SocialIconButton>
        <SocialIconButton aria-label="twitter" component={Link} to="/">
          <TwitterIcon />
        </SocialIconButton>
        <SocialIconButton aria-label="youtube" component={Link} to="/">
          <YouTubeIcon />
        </SocialIconButton>
      </SocialIconsContainer>
    </FooterContainer>
  );
};
