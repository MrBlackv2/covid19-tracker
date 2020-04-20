import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import AppDrawer from './AppDrawer';

interface AppDrawerContainerProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: (event: any, reason?: any) => void
}

export default function AppDrawerContainer({ drawerWidth, mobileOpen, handleDrawerToggle }: AppDrawerContainerProps) {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: drawerWidth
    }
  }));

  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label="side nav">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onClick={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <AppDrawer />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open
        >
          <AppDrawer />
        </Drawer>
      </Hidden>
    </nav>
  );
}
