import React from 'react';
import { Grid, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Entrar
            </Button>
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
