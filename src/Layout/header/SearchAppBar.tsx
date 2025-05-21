// src/Layout/Header/SearchAppBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import { Drawer, List, ListItemButton, ListItemText, Divider } from '@mui/material'; // استفاده از ListItemButton

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main, 
    color: theme.palette.common.white, 
    width: 250, 
    boxShadow: theme.shadows[5], 
    borderRadius: '8px', 
  },
}));

export default function SearchAppBar() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open); 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Shop
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={query}
              onChange={handleSearchChange}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
            <IconButton size="large" color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <StyledDrawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItemButton onClick={toggleDrawer(false)}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Product List" />
            </Link>
          </ListItemButton>
          <Divider sx={{ backgroundColor: 'white' }} /> 
          <ListItemButton onClick={toggleDrawer(false)}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Cart" />
            </Link>
          </ListItemButton>
        </List>
      </StyledDrawer>
    </Box>
  );
}
