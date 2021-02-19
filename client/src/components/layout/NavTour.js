import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#010102',
  },
  buttontext: {
      '&:hover':{
          //backgroundColor: '#fff'
          color: '#fff',

      }
  },
  logo: {
//    marginLeft: theme.spacing.unit * 8,
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing.unit * 8,
    },
    
  },
  logotext: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 3,
  },
  lr: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing.unit * 8,
    },
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div >
      <Grid container alignItems="center">
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="regular">
            <Grid item>
              <Button
                href="/"
                variant="inherit"
                color="secondary"
                className={classes.logo}
                size="large"
              >
                <Typography className={classes.logotext} color="secondary">NSFW</Typography>
              </Button>
            </Grid>
            <Grid item sm />
            <Grid item className={classes.lr}>
            <Button href="/tour" variant="inherit" color="secondary">
                <Typography className={classes.buttontext} color="secondary">Tour</Typography>
              </Button>

              <Button href="/register" variant="inherit" color="secondary">
                <Typography className={classes.buttontext} color="secondary">Register</Typography>
              </Button>

              <Button href="/login" variant="inherit" color="secondary">
                <Typography className={classes.buttontext} color="secondary">Login</Typography>
              </Button>
            </Grid>    
          </Toolbar>
      </AppBar>
      </Grid>
    </div>
  );
}
