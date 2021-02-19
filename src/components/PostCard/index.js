import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  IconButton,
  Avatar,
  //Icon,
} from '@material-ui/core';
import { useNavigate } from 'react-router';
//import { Book } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    display: 'flex',
    alignItems: 'center',
  },
  caption: {
    marginRight: theme.spacing(1),
  },
  message: {
    height: 'auto',
    marginBottom: theme.spacing(2),
    padding: '0 24px',
  },
  image: {
    height: 300,
    width: '100%',
    maxWidth: '100%',
  },
  content: {
    padding: 0,
  },
  favorite: {
    marginLeft: 'auto',
  },
}));

function PostCard({ post }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`/post/${post.slug}`);
  };
  return (
    <Card className={classes.root} onClick={handlePostClick}>
      <CardHeader
        avatar={<Avatar src={post.autor?.avatar} />}
        title={<Typography variant="h6">{post?.title}</Typography>}
        subheader={
          <div className={classes.subheader}>
            <Typography variant="caption" className={classes.caption}>
              {'Criado por'}
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
              {post.autor?.name}
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
              {moment(post.date).fromNow()}
            </Typography>
          </div>
        }
      />
      <CardContent className={classes.content}>
        <CardActionArea>
          <Typography className={classes.message} variant="body1">
            {post?.hashtags}
          </Typography>
          <img src={post?.image} className={classes.image} alt="" />
        </CardActionArea>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography
            style={{ cursor: 'pointer' }}
            color="textSecondary"
            variant="body2"
          >
            {'10'}
          </Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <MessageIcon />
          <Typography
            className={classes.reactions}
            color="textSecondary"
            variant="body2"
          >
            {'30'}
          </Typography>
        </IconButton>
        <IconButton aria-label="favorite" className={classes.favorite}>
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
