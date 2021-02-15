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
    maxWidth: 220,
    backgroundColor: '#000909',
    // color: theme.palette.secondary.main,
    //objectFit: 'cover'
    

    
  },
  media: {
    height: 110,
    backgroundSize: '125px',
    
    
    
  },
  container:{
    marginLeft: '2.5%',
    marginRight: '2.5%'
  }

}));

export default function StudioCard({ studios }) {
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
        {studios.map((studio) => (
          <Grid
            item
            xs={6}
            md={2}
            lg={2}
            key={studio.id}
            className={classes.gridf}
          >
            {studio.url !== null && (
              
              <Card className={classes.root}>
                <CardActionArea href={`/studio/${studio.id}`} >
                  <CardMedia
                    className={classes.media}
                    image={studio.url}
                    title={studio.studio}
                    style={{ objectFit:'fit'}}
                  />
                  {/* <CardContent>
                    <Typography align="center" variant="h6"  color='secondary'>
                      {studio.studio}
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
              </Card>
              
            )}

            {studio.url == null && (
              <Card className={classes.root}>
                <CardActionArea href={`/studio/${studio.id}`} >
                  <CardMedia
                    className={classes.media}
                    image="https://payload.cargocollective.com/1/5/173809/13009228/Logo_4.2_670.jpg"
                    title={studio.url}
                  />
                  <CardContent>
                    <Typography color="primary" align="center" variant="h6"  color='secondary'>
                      {studio.studio}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )}
          </Grid>
        ))}
      
      </Grid>
    </div>
  );
}
