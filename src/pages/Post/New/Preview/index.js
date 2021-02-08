import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { usePost } from '../../../../context/PostContext';

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
}));

export default function PostPreview() {
  const classes = useStyles();
  const ctx = usePost();
  const { image, title, tags, markdownText } = ctx;
  const account = useSelector((state) => state.account);
  return (
    <>
      <Box mb={2}>
        {image && (
          <img src={image} alt="backgroud" className={classes.imagePreview} />
        )}
      </Box>
      <Box mb={2}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Box display="Flex" alignItems="center" mb={2}>
        <Box>
          <Avatar className={classes.avatar} src={account.user?.avatar} />
        </Box>
        <Box>
          <Typography variante="body1">{account.user?.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            10 meses atrás
          </Typography>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          {tags?.map((item) => item.title).join(',')}
        </Typography>
      </Box>
      <Divider />
      <Markdown source={markdownText} />
    </>
  );
}
