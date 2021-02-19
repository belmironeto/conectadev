import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Markdown from 'react-markdown';
import moment from 'moment';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  imagePreview: {
    width: '100%',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  textArea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    border: 'none',
    outline: 'none',
    fontSize: 15,
  },
  markdown: {
    color: theme.palette.text.primary,
  },
}));

export default function PostView({ post }) {
  const classes = useStyles();
  const { image, title, date, autor, tags, markdownText } = post;

  return (
    <Container maxWidth="lg">
      <Box mb={2}>
        <Typography color="textPrimary" variant="h4">
          {title}
        </Typography>
      </Box>
      <Box display="Flex" alignItems="center" mb={2}>
        <Box>
          <Avatar className={classes.avatar} src={autor?.avatar} />
        </Box>
        <Box>
          <Typography color="textPrimary" variante="body1">
            {autor?.name}
          </Typography>
          <Typography color="textPrimary" variant="body2" color="textSecondary">
            {moment(date).fromNow()}
          </Typography>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="body1" color="textPrimary">
          {tags?.map((item) => item).join(',')}
        </Typography>
      </Box>
      <Box mb={2}>
        {image && (
          <img src={image} alt="backgroud" className={classes.imagePreview} />
        )}
      </Box>
      <Box>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography
            style={{ cursor: 'pointer' }}
            color="textSecondary"
            variant="body2"
          >
            {post.likes}
          </Typography>
        </IconButton>
      </Box>
      <Divider />
      <Box mb={8}>
        <Markdown source={markdownText} className={classes.markdown} />
      </Box>
    </Container>
  );
}
