// Header.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton, // Import ListItemButton
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];

const Header = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Adjust breakpoint as needed
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    // Close drawer on key presses (Esc)
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift' || event.key === 'Escape')
    ) {
      setDrawerOpen(false);
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: darkMode ? '#333' : '#fff',
        height: '100%',
        position: 'relative',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ScrollLink
                to={text.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-64}
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    color: darkMode ? '#fff' : '#333',
                    fontSize: '1.2rem',
                    '&:hover': {
                      color: darkMode ? '#ff4081' : '#f50057',
                      transition: 'color 0.3s ease',
                    },
                  }}
                />
              </ScrollLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" sx={{ color: darkMode ? '#fff' : '#333', mb: 1 }}>
          Dark Mode
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          inputProps={{ 'aria-label': 'Dark mode toggle' }}
          sx={{
            color: darkMode ? '#ff4081' : '#f50057',
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#ff4081',
              '&:hover': {
                backgroundColor: 'rgba(255, 64, 129, 0.08)',
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#ff4081',
            },
          }}
        />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#333',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          zIndex: theme.zIndex.drawer + 1,
          padding: '0 20px',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo or Brand Name */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              color: darkMode ? '#fff' : '#333',
            }}
          >
            Developer Portfolio
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={600}
                  offset={-64}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    sx={{
                      color: darkMode ? '#fff' : '#333',
                      padding: { xs: '8px 12px', sm: '10px 15px' },
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: darkMode ? '#444' : '#f0f0f0',
                        borderRadius: '8px',
                        transition: 'background-color 0.3s ease',
                      },
                      marginLeft: 2,
                    }}
                  >
                    {item}
                  </Button>
                </ScrollLink>
              ))}
              {/* Dark Mode Toggle Switch */}
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                inputProps={{ 'aria-label': 'Dark mode toggle' }}
                sx={{
                  color: darkMode ? '#ff4081' : '#f50057',
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#ff4081',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 64, 129, 0.08)',
                    },
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#ff4081',
                  },
                  marginLeft: 3,
                }}
              />
            </Box>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from being hidden behind the AppBar */}
      <Toolbar />
    </>
  );
};

export default Header;
