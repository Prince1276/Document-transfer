import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '47px',
  zIndex: (theme) => theme.zIndex.drawer + 1,
  backdropFilter: 'blur(10px)',
  backgroundColor: 'transparent',
  boxShadow: 'none',
};

const textContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  alignItems: 'center',
};

function Footer() {
  return (
    <AppBar position="static" color="primary" style={footerStyle}>
      <Toolbar>
        <div style={textContainerStyle}>
          <Typography variant="body1" color="black"style={{fontSize:'12px'}}>
            Designed & Developed by Aligned Automation Pvt. Ltd
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
