import React from "react";
import Search from "../layout/Search";
import { Grid, Card, Typography, IconButton, GridList, CardActionArea, Divider } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Loading from "../Shared/Loading";
import Error from "../Shared/Error";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#010102",
    display: 'flex',
    overflow: 'hidden',   
    marginTop: '3.4%',
 
  },
  root: {
    width: '100%',
    //marginLeft: '5%'
   
    // color: theme.palette.secondary.main,
  },
  media: {
    width: '100%',
    height: 720,
    objectFit: 'cover'
  },
  unkown:{
    height: 720,
    width: '100%',
    alignContent: 'center',
    objectFit: 'cover'
  },
  info:{
    margin:'1%',
    marginTop: '2%',
    marginLeft: '3%',
    marginRight: '3%',
    textAlign: 'left',
    objectFit: 'cover'
  },
  description:{
      margin: '1%',
      marginLeft: '3%',
      marginRight: '3%',

  },
  gallarycard: {
    maxWidth: '100%',
    backgroundColor: '#000909',
    objectFit: 'contain'
    
    
  },
  gallarytitle:{
    margin: '2%'
  },
  gmedia: {
    height: 200,
    },
    gcontainer:{
        
    }


}));

export default function ScenePage({ match }) {
  const id = match.params.id;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* create performers */}
      <Query query={GET_SCENE_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error />;

          const scene = data.scenes[0];

          return (
            <div className="container">
              
              <Grid container alignContent='center'>
                <Grid item className={classes.left} xs={12} md={12} lg={12}>
                  <Card className={classes.root} square>
                    { scene.previewUrl !== null && (<CardMedia
                      className={classes.media}
                      autoPlay
                      component='video'
                      image={scene.previewUrl}
                      controls
                      itemType='video/mp4'           
                    />)}

                    { scene.previewUrl == null && (
                     <CardMedia
                        className={classes.unkown}
                        image="https://cdn-pics.letmejerk.com/thumbs/874423/874423.jpg"
                        title="{scene.title}"
                      />
                    )}
                  </Card>
                </Grid>
                {/* <Grid item sm /> */}
                
                  
                    <Grid item  className={classes.info}>
                      <Typography 
                        align="left"
                        variant="h4"
                        color="secondary"
                        noWrap
                      >
                        {scene.title}
                      </Typography>
                      <Typography color='inherit' >
                      {scene.length}
                      </Typography>

                      <Grid color='inherit' >
                          {scene.performers.map((performer) => (
                          <Grid item key={performer.name}>
                          <Typography > {performer.name}</Typography>
                          </Grid>
                          ))}
                      </Grid>
               
                    </Grid>
                <Grid item sm />
                    <Grid item className={classes.info} >
                        
                    <IconButton >
                        <ThumbUpIcon style={{ fontSize:'30px'}} />
                      </IconButton>
                    
                    <IconButton>
                        <ThumbDownIcon style={{ fontSize:'30px'}} />
                      </IconButton>
                    
                      <IconButton>
                        <FavoriteBorderIcon style={{ fontSize:'30px'}} />
                      </IconButton>
                      <IconButton>
                        <BookmarkBorderIcon style={{ fontSize:'30px'}} />
                      </IconButton>
                      <IconButton>
                        <CloudDownloadIcon style={{ fontSize:'30px'}} />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} className={classes.description}>
                    <Typography
                        
                        align="center"
                        variant="body1"
                        color="inherit"    
                      >
                        {scene.description}
                      </Typography>
                      </Grid>
                     
                      <Grid item xs={12} className={classes.gallarytitle} >
                          <Typography variant='h4' align='center' >
                              Gallaries
                          </Typography>
                     </Grid>  
                     
                     <Grid container spacing={1}>
                             {(scene.gallaryUrls).map((url) => (
                            <Grid item  xs={12} md={3} key={url}>
                            <Card square className={classes.gallarycard} >
                                
                                <CardMedia
                                  className={classes.gmedia}
                                  image={url.toString().replace(/,/g, '')}
                                  title={scene.thumbnailUrl}
                                />
                            </Card>
                            </Grid> 
                              ))}
                    </Grid>
                    
                                    

                  </Grid>
               
           
              </div> 
          );
        }}
      </Query>
    </div>
  );
}

const GET_SCENE_QUERY = gql`
query($id: Int!) {
    scenes(id: $id) {
      id
      title
      thumbnailUrl
      previewUrl
      length
      gallaryUrls
      studio{
        studio
      }
      performers{
        name
      }
      tags{
        tagName
      }
      favoriteScenes{
        id
      }
      
      description
    }
  }
`;
