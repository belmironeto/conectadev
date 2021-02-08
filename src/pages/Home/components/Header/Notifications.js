import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  Users as ConnectionIcon,
} from 'react-feather';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import Popover from '@material-ui/core/Popover';
import { getNotifications } from '../../../../actions/notificationActions';

const useStyles = makeStyles((theme) => ({
  icon: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));
const iconsMap = {
  reviews: StarIcon,
  new_comment: MessageIcon,
  like: HeartIcon,
  connection: ConnectionIcon,
};

export default function Notifications() {
  const account = useSelector((state) => state.account);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const isAuthenticated = !!account.user;
  const ref = useRef(null);

  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);
  return (
    isAuthenticated && (
      <>
        <IconButton ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <BellIcon />
          </SvgIcon>
        </IconButton>
        <Popover
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isOpen}
          onClose={handleClose}
        >
          <Box p={2}>
            <Typography variant="h6" color="textPrimary">
              Notificações
            </Typography>
            <List>
              {notifications.map((notification) => {
                const Icon = iconsMap[notification.type];
                return (
                  <ListItem key={notification.id}>
                    <ListItemAvatar>
                      <Avatar className={classes.icon}>
                        <SvgIcon>
                          <Icon />
                        </SvgIcon>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notification.title}
                      primaryTypographyProps={{
                        variant: 'subtitle2',
                        color: 'textPrimary',
                      }}
                      secondary={notification.description}
                    >
                      OK
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Popover>
      </>
    )
  );
}
