import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { PostProvider } from '../../../context/PostContext';
import PostEditor from './Editor';
import PostPreview from './Preview';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
  },
}));

export default function NewPost() {
  const classes = useStyles();
  return (
    <PostProvider>
      <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
        <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
          <PostEditor />
        </Box>
        <Box width="50%" height="100%" padding={2}>
          <PostPreview />
        </Box>
      </Box>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Button className={classes.buttom}>Salvar rascunho</Button>
          <Button color="secondary" variant="outlined">
            Publicar
          </Button>
        </Toolbar>
      </AppBar>
    </PostProvider>
  );
}
