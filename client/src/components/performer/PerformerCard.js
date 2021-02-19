import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Grid, useState } from "@material-ui/core";
import { DataGrid }  from '@material-ui/data-grid'
import CssBaseline from "@material-ui/core/CssBaseline";
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '30px',
    display: 'flex'
  },
  root: {
    maxWidth: 345,
    backgroundColor: '#000909',
    // color: theme.palette.secondary.main,

    
  },
  media: {
    height: 540,
    
    
  },
  container:{
    marginLeft: '2.5%',
    marginRight: '2.5%'
  }

}));

export default function PerformerCard({ performers }) {
  let url = "";




  // const performer_url = performers.profilePic;
  // if (typeof(performer_url) != null) {
  //   url = performer_url.trim();
  //  } else {
  //    url = 'https://none';
  //  }

  const classes = useStyles();
  return (
    <div className={classes.main}>
     
      <Grid container spacing={2} className={classes.container}>
      <CssBaseline />
        {performers.map((performer) => (
          <Grid
            item
            xs={6}
            md={4}
            lg={3}
            key={performer.id}
            className={classes.gridf}
          >
            {performer.profilePic !== null && (
              
              <Card className={classes.root}>
                <CardActionArea href={`/performer/${performer.id}`} >
                  <CardMedia
                    className={classes.media}
                    image={performer.profilePic.slice(2, -2)}
                    title={performer.name}
                  />
                  <CardContent>
                    <Typography align="center" variant="h5">
                      {performer.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              
            )}

            {performer.profilePic == null && (
              <Card className={classes.root}>
                <CardActionArea href={`/performer/${performer.id}`} >
                  <CardMedia
                    className={classes.media}
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Carmen_Sandiego.png/220px-Carmen_Sandiego.png"
                    title={performer.name}
                  />
                  <CardContent>
                    <Typography color="primary" align="center" variant="h5" >
                      {performer.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )}
          </Grid>
        ))}
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Grid>
    </div>
  );
}
