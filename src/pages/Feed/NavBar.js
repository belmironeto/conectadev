import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import { ListItem, ListItemText } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
}));

const tags = [
  { id: 1, name: 'reactjs' },
  { id: 2, name: 'javascript' },
  { id: 3, name: 'dotnet' },
  { id: 4, name: 'php' },
  { id: 5, name: 'materialdesign' },
  { id: 6, name: 'webdev' },
];

function NavBar() {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const navigate = useNavigate();

  return (
    <Paper className={classes.root}>
      {!isAuthenticated && (
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() => navigate('/sign-up')}
        >
          Registrar Grátis
        </Button>
      )}

      <ListSubheader>{`Tags em Alta`}</ListSubheader>
      {tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}
      <ListItem button>Exibir mais Tags</ListItem>
    </Paper>
  );
}

export default NavBar;
