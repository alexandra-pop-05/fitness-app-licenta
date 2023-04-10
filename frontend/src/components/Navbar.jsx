import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import ShopIcon from '@mui/icons-material/Shop';
import { styled } from '@mui/system';
import Logo from '../img/logoW.png';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1024,
      md: 936,
      sm: 768,
      xs: 500,
    },
  },
});

const NavAppBar = styled(AppBar)({
  backgroundColor: '#f28482',
  position: "fixed",
  width: "100%",
});

const NavIconButton = styled(IconButton)({
  color: '#f7ede2',
  marginRight: (theme) => theme.spacing(2),
  marginLeft: (theme) => theme.spacing(1),
});

const NavLinkButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '16px',
  marginLeft: (theme) => theme.spacing(1),
  marginRight: (theme) => theme.spacing(1),
  borderRadius: '20px',
  color: '#f7ede2',
  '&:hover': {
    backgroundColor: '#f7ede2',
    color: '#eaac8b', 
    borderRadius: '20px',
  },
});

const NavIconButtons = styled(Button)({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '16px',
  marginLeft: (theme) => theme.spacing(1),
  marginRight: (theme) => theme.spacing(1),
  borderRadius: '20px',
  color: '#f7ede2',
  '&:hover': {
    backgroundColor: '#f7ede2',
    color: '#eaac8b',
    borderRadius: '20px',

    },
});

const LogoButton = styled(Button)({
  textTransform: 'none',
  width: '100px',
  marginLeft: (theme) => theme.spacing(1),
  marginRight: (theme) => theme.spacing(1),
  borderRadius: '50px',
});

const DrawerMenu = styled(Menu)({
  backgroundColor: '#f7ede2',
  width: '250px',
  height: '100vh',
  color: '#f7ede2',
  padding: '16px',
  '&:hover': {
    backgroundColor: '#f7ede2',
    color: '#eaac8b',
    borderRadius: '20px',
  },
});


export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'Shop',
      pageURL: '/shop',
    },
    {
      menuTitle: 'About me',
      pageURL: '/about_me',
    },
    {
      menuTitle: 'My Account',
      pageURL: '/my_account',
    },
    {
      menuTitle: 'Log In',
      pageURL: '/login',
    },
    {
      menuTitle: 'Contact',
      pageURL: '/contact',
    },
    {
      menuTitle: 'Cart',
      pageURL: '/cart',
    },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <NavAppBar>
      <Toolbar sx={{ flexGrow: 1 }}>
        <div style={{flexGrow: 1}}>
          {/* <NavIconButton edge="start" color="#da4828" aria-label="logo">
            <FitnessCenterIcon />
          </NavIconButton> */}
          <LogoButton component={Link} to="/">
            <img src={Logo} alt="Logo" width={'120px'} height={'60px'} />
          </LogoButton>
        </div>

         {isSmallerThanSm ? ( // conditionally render menu icon button and drawer menu for small screens
          <>
            <NavIconButton onClick={handleMenuOpen}>
              <MenuIcon />
            </NavIconButton>
            <DrawerMenu
              anchor="right"
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              menuItems={menuItems}
            />
                   
          </>
        ) : (
          // render regular navbar items for larger screens
          <>
            <NavLinkButton component={Link} to="/">
              Home
            </NavLinkButton>
            <NavLinkButton component={Link} to="/shop">
              Shop
            </NavLinkButton>
            <NavLinkButton component={Link} to="/about_me">
              About me
            </NavLinkButton>
            <NavLinkButton component={Link} to="/my_account">
              My Account
            </NavLinkButton>
            <NavIconButtons startIcon={<AccountCircleIcon />} component={Link} to="/login">
              Log In
            </NavIconButtons>
            <NavIconButtons startIcon={<PhoneIcon />} component={Link} to="/contact">
              Contact
            </NavIconButtons>
            <NavIconButtons startIcon={<ShopIcon />}>Cart</NavIconButtons>
          </>
        )}
      </Toolbar>
    </NavAppBar>
  );
};