import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { usePost } from '../../../../context/PostContext';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
  },
}));

const handleSaveDraft = () => {
  //acessar backend e salvar o rascunho
};

const handlePublish = () => {
  //acessar backend e publicar o post
};

export default function BottomBar() {
  const classes = useStyles();
  const ctx = usePost();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Button className={classes.buttom}>Salvar rascunho</Button>
        <Button color="secondary" variant="outlined">
          Publicar
        </Button>
      </Toolbar>
    </AppBar>
  );
}
