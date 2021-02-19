import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tollbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

import Notifications from './Notifications';
import Account from './Account';
import WritePost from './WritePost';
import Settings from './Settings';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
});

function Header() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Tollbar>
        <Link to="/">
          <img
            src={
              theme.darkMode ? '/images/logo-branca.png' : '/images/logo.png'
            }
            alt="logo"
            className={classes.img}
          />
        </Link>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Box ml={2}>
            <WritePost />
          </Box>
          <Box ml={2}>
            <Notifications />
          </Box>
          <Box ml={2}>
            <Settings />
          </Box>
          <Box ml={2}>
            <Account />
          </Box>
        </div>
      </Tollbar>
    </AppBar>
  );
}
export default Header;
