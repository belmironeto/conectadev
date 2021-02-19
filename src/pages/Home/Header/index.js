import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tollbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import Account from './Account';
import WritePost from './WritePost';

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

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Tollbar>
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className={classes.img} />
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
            <Account />
          </Box>
        </div>

        {/* <div className="">
          <a href="/">Conecta Dev</a>
          <input type="text"></input>
        </div>
        <div className="">
          
          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Tollbar>
    </AppBar>
  );
}
export default Header;
