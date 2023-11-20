import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';

export default function Sidebar() {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <Drawer
  variant="permanent"
  sx={{
    width: 100,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 60,
      backgroundColor: 'transparent',
      marginTop: '90px',
      border: 'none', // Add this line to remove the border
      overflow: 'hidden', // Add this line to hide any overflowing content
    },
  }}
>
      <Box sx={{ p: 1 }}>
        <List>
          <Link to="/" onClick={() => handleLinkClick('/')}>
          <ListItem button sx={{ justifyContent: 'center', marginBottom: '10px' }}>
            <ListItemIcon sx={{ color: 'green',fontSize: '30px',marginLeft: '20px' }}>
              <HomeIcon />
            </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/about" onClick={() => handleLinkClick('/about')}>
          <ListItem button sx={{ justifyContent: 'center', marginBottom: '10px' }}>
            <ListItemIcon sx={{ color: 'green',fontSize: '30px',marginLeft: '20px' }}>
              <PersonIcon />
            </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/account" onClick={() => handleLinkClick('/account')}>
          <ListItem button sx={{ justifyContent: 'center', marginBottom: '10px' }}>
            <ListItemIcon sx={{ color: 'green',fontSize: '30px',marginLeft: '20px' }}>
              <AccountCircleIcon />
            </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/contact" onClick={() => handleLinkClick('/contact')}>
          <ListItem button sx={{ justifyContent: 'center', marginBottom: '10px' }}>
            <ListItemIcon sx={{ color: 'green',fontSize: '30px',marginLeft: '20px' }}>
              <ContactsIcon />
            </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/dashboard" onClick={() => handleLinkClick('/dashboard')}>
          <ListItem button sx={{ justifyContent: 'center', marginBottom: '10px' }}>
            <ListItemIcon sx={{ color: 'green',fontSize: '30px',marginLeft: '20px' }}>
              <DashboardIcon />
            </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/home" onClick={() => handleLinkClick('/home')}>
          <ListItem button sx={{ justifyContent: 'center', marginBottom: '10px' }}>
            <ListItemIcon sx={{ color: 'green',fontSize: '30px',marginLeft: '20px' }}>
              <DescriptionIcon />
            </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/logout" onClick={() => handleLinkClick('/logout')}>
          <ListItem button sx={{ justifyContent: 'center', marginBottom: '10px' }}>
            <ListItemIcon sx={{ color: 'green',fontSize: '30px',marginLeft: '20px' }}>
              <ExitToAppIcon />
            </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
}
