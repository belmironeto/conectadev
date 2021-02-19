import React from 'react';
import { Grid, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signUp } from '../../actions/accountActions';

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
export default function SignUp() {
  const classes = useStyles();
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
          <Typography variant="h5">Registrar</Typography>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              fullName: Yup.string()
                .max(255)
                .required('Favor inserir o nome completo'),
              email: Yup.string()
                .email('Favor inserir um e-mail válido')
                .max(255)
                .required('Favor inserir um e-mail'),
              password: Yup.string()
                .max(255)
                .required('Favor informar a senha'),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              try {
                await dispatch(
                  signUp(values.fullName, values.email, values.password)
                );
                navigate('/');
              } catch (error) {
                const message =
                  (error.response && error.response.data.message) ||
                  'Aconteceu algo de errado.';

                setStatus({ success: false });
                setErrors({ submit: message });
                setSubmitting(false);
              }
            }}
          >
            {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
              <form noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="fullName"
                  label="Nome Completo"
                  name="fullName"
                  autoComplete="fullName"
                  autoFocus
                  value={values.fullName}
                  onChange={handleChange}
                  helperText={errors.fullName}
                  error={Boolean(errors.fullName)}
                />
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
                  value={values.email}
                  onChange={handleChange}
                  helperText={errors.email}
                  error={Boolean(errors.email)}
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
                  value={values.password}
                  onChange={handleChange}
                  helperText={errors.password}
                  error={Boolean(errors.password)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Registrar
                </Button>
                {errors.submit && (
                  <FormHelperText error>{errors.submit}</FormHelperText>
                )}
                <Grid container>
                  <Grid item>
                    <Link>Já possui uma conta?</Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
          <CopyRight />
        </Box>
      </Grid>
    </Grid>
  );
}
