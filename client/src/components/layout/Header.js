import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{textDecoration: 'none', color:'white'}} to={`/`}>Store</Link>
          </Typography>
          <Button  color="inherit" >
            <Link style={{textDecoration: 'none', color:'white'}} to={`/Login`}>Login</Link>
          </Button>
          <Button color="inherit" href='/Register'>
          <Link style={{textDecoration: 'none', color:'white'}} to={`/Register`}>Register</Link>
          </Button>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}