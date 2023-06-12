import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export const RecipePageHeader = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              Recipe Manager
            </Link>
          </Typography>
          <Link to='/'>
            <Button sx={{ mr: 2 }} variant="contained" color="success">Back</Button>
          </Link>
          <Button variant="contained" color="success">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box >
  );
}