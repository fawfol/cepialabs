// src/components/Navbar/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196f3' }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          CEPIALABS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
