import React, { useState } from 'react';
import { Grid, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch } from 'react-redux';

import { signIn } from '../../actions/accountActions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
}));

function CopyRight() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://www.linkedin.com/in/belmiro-neto/">
        Belmiro Christo Neto
      </a>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}
export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  async function handleSignIn() {
    try {
      await dispatch(signIn(email, password));
      navigate('/');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        md={7}
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.image}
      >
        <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: 'rgb(255,255,255,0.7)',
            margimTop: 30,
            fontSize: 15,
            lineHeight: '30px',
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
          Software
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Acesso</Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              label="Senha"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleSignIn()}
            >
              Entrar
            </Button>
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
            <Grid container>
              <Grid item>
                <Link>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link>Não tem uma conta? Registre-se</Link>
              </Grid>
            </Grid>
          </form>
          <CopyRight />
        </Box>
      </Grid>
    </Grid>
  );
}
