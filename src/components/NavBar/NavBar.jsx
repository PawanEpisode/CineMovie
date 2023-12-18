import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { SideBar } from '..';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar 
        sx={{
          marginLeft: { sm : '280px',md: '280px', lg: '280px'},
          flexWrap: {sm : "wrap"}
        }} 
        className='h-[80px] flex justify-between'>
          {
            isMobile && (
              <IconButton 
                color='inherit'
                edge='start'
                style={{ outline: 'none'}}
                onClick={()=> setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                className=''
                sx={{
                  marginRight: '20px',
                  display: {xs: 'block',sm: 'block',md: 'block' }
                }}
              >
                <Menu />
              </IconButton>
            )
          }
          <IconButton
          color='inherit'
          sx={{ ml: 1}}
          onClick={()=> {}}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 />: <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <Button color='inherit' onClick={()=>{}}>
                Login &nbsp; <AccountCircle /> 
              </Button>
            ): (
              <Button
              color='inherit'
              component={Link}
              to={`/profile/:id`}
              className='hover:text-white'
              onClick={()=>{}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar 
                  style={{ width: 30, height: 30}}
                  alt='Profile'
                  src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fdefault-avatar-icon&psig=AOvVaw0uwSqh1fE4IqWHfQ_EJHuR&ust=1702730645274000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMifhse8kYMDFQAAAAAdAAAAABAr'
                />
              </Button>
            )}
          </div>
          {isMobile && 'Search...'}
          
        </Toolbar>
      </AppBar>
      <div>
        <nav className='drawer sm:w-[240px] sm:flex-shrink-0'>
          {
            isMobile ? (
              <Drawer
                variant='temporary'
                anchor='right'
                open={mobileOpen}
                onClose={()=> setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                // className='drawerBackground '
                classes={{ paper: 'drawerPaper w-[240px]'}}
                ModalProps={{ keepMounted: true }}
              >
                <SideBar setMobileOpen={setMobileOpen} />
              </Drawer>
            ) : (
              <Drawer 
                classes={{ paper: 'drawerPaper w-[240px]'}}
                variant='permanent'
                open
                >
                <SideBar setMobileOpen={setMobileOpen} />
              </Drawer>
            )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
