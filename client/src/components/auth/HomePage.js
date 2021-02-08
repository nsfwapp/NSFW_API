import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Grid,
  Container,
  CssBaseline,
  Paper,
  Typography,
  IconButton
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  paper: {
    width:'100%',
    minHeight: '100vh',
    // backgroundImage: `url(https://i.imgur.com/0N0eiUE.png)`,
    backgroundImage: `url("https://ctf-images.gammacdn.com/cdyxtpbavd4i/yKVZGyPnfp9RyKcUZkrap/9d55adcccc0ec20c9887ea66147fa163/AT-Freetour_MOSAIC2020.jpg?fm=webp")`,
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
    // maskImage: `url(https://static01-cms-fame.gammacdn.com/puretaboo/m/6aw1dabkwkkk0koo/raster.png)`
    
  },
  title: {
    fontSize: 68,
    fontStyle: 'Bold',
    alignContent: "left",
    marginTop: theme.spacing.unit * 20,
    marginLeft: theme.spacing.unit * 13,
    fontWeight: 1000,
    letterSpacing: 2,
    color: theme.palette.secondary.main

  },
  expand: {
    color: "#fff",
    marginTop: theme.spacing.unit * 15,
    fontSize: 48,
  }

}));



export default function HomePage() {

  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <container maxWidth="sm">
      <Paper className={classes.paper}>
      <Grid container alignContent="center">
      <CssBaseline />

          <Grid item sm={2}>
        <Typography className={classes.title} required>
          Ultimate Adult Entertainment
        </Typography>
        </Grid>
        <Grid item ></Grid>

        
      </Grid>
      <Grid container alignItems="center" direction="column">
        <Grid item>
      <IconButton >
          <ExpandMoreIcon className={classes.expand} />
        </IconButton>
        </Grid>
        </Grid>
      </Paper>
      
      </container>
    </div>
    <div>

    </div>
    </div>
  )
}
