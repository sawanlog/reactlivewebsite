import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import { ShoppingCart,Category } from '@mui/icons-material';

//import { Link } from '@mui/icons-material';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          <a href="/">
              <img src="img/dslogo.png" alt="DS Canteen" />
            </a> 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
           
              <ListItem button >
                <ListItemIcon> 
                <DashboardIcon />                  
                  </ListItemIcon>
                <ListItemText primary= "Dahboard" />
               
              </ListItem>

              
              <ListItem button >
                <ListItemIcon> 
                <GroupIcon />                  
                  </ListItemIcon>
                <ListItemText primary= "Users" />
              </ListItem>

              <ListItem button >
                <ListItemIcon> 
                <Category />                  
                  </ListItemIcon>
                <ListItemText primary= "Category" />
              </ListItem>
              
              <ListItem button >
                <ListItemIcon> 
                <ShoppingCart />                  
                  </ListItemIcon>
                <ListItemText primary= "Orders" />
              </ListItem>

              
              <ListItem button >
                <ListItemIcon> 
                <LogoutIcon />                  
                  </ListItemIcon>
                <ListItemText primary= "Logout" />
              </ListItem>
  
          </List>
          <Divider />
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
         Dashboard of DS Canteen
         </Typography>
      </Box>
    </Box>
  );
}
