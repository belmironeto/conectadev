import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tollbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
//import authService from '../../../services/authService';
import { useSelector } from 'react-redux';

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
  button: {
    marginRight: 10,
  },
  bell: {
    marginRight: 10,
  },
});

function Header() {
  const account = useSelector((state) => state.account);
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Tollbar>
        <img src="/images/logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Novo Post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell />
          </SvgIcon>
          <Avatar
            alt={account.user && account.user.name}
            src={account.user && account.user.avatar}
          />
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
