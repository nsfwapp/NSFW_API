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
      fontWeight: '500',
      '&:hover':{
          //backgroundColor: '#fff'
          color: '#fff',

      }
  },
  logo: {
//    marginLeft: theme.spacing.unit * 8,
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(8),
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
    
  },
  
}));

export default function Nav({currentUser}) {
  const classes = useStyles();

  return (
    <div >
      <Grid container alignItems="center">
      <AppBar position='fixed' className={classes.root}>
        <Toolbar variant="dense">
            <Grid item>
              <Button
                href="/"
                variant="text"
                color="secondary"
                className={classes.logo}
                size="large"
              >
                <Typography className={classes.logotext} color="secondary">NSFW</Typography>
              </Button>
            </Grid>
            <Grid item sm />
            <Grid item className={classes.lr}>
  
            <Button  href="/scenes" variant="text" color="secondary">
                <Typography className={classes.buttontext} color="secondary">Scenes</Typography>
              </Button>
              <Button  href="/movies" variant="text" color="secondary">
                <Typography className={classes.buttontext} color="secondary">Movies</Typography>
              </Button>
            <Button href="/performers" variant="text" color="secondary">
                <Typography className={classes.buttontext} color="secondary">Performers</Typography>
              </Button>
              <Button href="/studios" variant="text" color="secondary">
                <Typography className={classes.buttontext} color="secondary">Studios</Typography>
              </Button>
             {currentUser && (
              <Button href={`/profile/${currentUser.id}`} variant="text" color="secondary">
                <Typography className={classes.buttontext} color="secondary">{currentUser.username}</Typography>
              </Button>
             )}

              {/* <Button href="/signout" variant="inherit" color="secondary">
                <Typography className={classes.buttontext} color="secondary">Sign Out</Typography>
              </Button> */}
            </Grid>    
          </Toolbar>
      </AppBar>
      </Grid>
    </div>
  );
}
