import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import axios from '../../utils/axios';
import PostCard from '../../components/PostCard';
import NavBar from '../Feed/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {},
  navbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function Feed() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const feed = await axios.get('/api/feed');
    setPosts(feed.data.posts);
  }, [setPosts]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <Box className={classes.navbar}>
          <NavBar />
        </Box>
        <div className={classes.root}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Feed;
