import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.text.primary,
    height: '800px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
    },
  },
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  lead: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  medhubpaper: {
    marginTop: '20%',
    marginBottom: '5%'
  }
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <div className={classes.content}>
        <Paper className={classes.medhubpaper} elevation='24'>
            <img className={classes.image} src='images/MedHub.png'/>
        </Paper>
        <Typography variant="h1" className={classes.title}>
          Welcome to MedHub!
        </Typography>
        <Typography variant="h6" className={classes.lead}>
          Please visit the Products Page to start your personal medical supply order!
        </Typography>
        <div className={classes.button}>
          <Button href="/products" variant="contained" color="secondary" size="large" className={classes.button}>
            View Products
          </Button>
        </div>
      </div>
    </Container>
  );
};
