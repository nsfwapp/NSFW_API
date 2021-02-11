import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, useState } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";


const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '30px',
    display: 'flex'
  },
  root: {
    maxWidth: '420',
    backgroundColor: '#000909',
    objectFit:'contain',
    margin:'auto'
    // color: theme.palette.secondary.main,

    
  },
  media: {
    height: 200,
    Width: 500,
    
    
    
  },
  container:{
    marginLeft: '2.5%',
    marginRight: '2.5%',
    marginTop: '0.3%'
  }

}));

export default function SceneCard({ scenes }) {
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
        {scenes.map((scene) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={scene.id}
            className={classes.gridf}
          >
              {console.log(scene.thumbnailUrl)}
            {scene.thumbnailUrl !== null && (
              
              <Card className={classes.root}>
                <CardActionArea href={`/scene/${scene.id}`} >
                  <CardMedia
                    className={classes.media}
                    image={scene.thumbnailUrl}
                    title={scene.title}
                  />
                  <CardContent>
                    <Typography align="center" color='secondary'>
                      {scene.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              
            )}

            {scene.thumbnailUrl == null && (
              <Card className={classes.root}>
                <CardActionArea href={`/scene/${scene.id}`} >
                  <CardMedia
                    className={classes.media}
                    image="https://cdn-pics.letmejerk.com/thumbs/874423/874423.jpg"
                    title={scene.thumbnailUrl}
                  />
                  <CardContent>
                    <Typography color="primary" align="center"  color='secondary'>
                    {scene.title}
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
