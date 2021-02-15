import React from "react";
import Search from "../layout/Search";
import { Grid, Card, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Loading from "../Shared/Loading";
import Error from "../Shared/Error";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#010102",
    //display: 'flex'
  },
  root: {
    // maxWidth: 420,
    

    // color: theme.palette.secondary.main,
  },
  media: {
    height: 150,
    backgroundSize: '175px',
    backgroundColor: '#000'
  },
  container: {
    //marginLeft: "4%",
    //marginRight: "4%",
  },
  title: {

  },
  right: {
    marginRight: "2%",
    marginTop: "5%",
    
  
    
  },
  left: {
    //flexDirection:'column',
    maxWidth: 240,
    marginLeft: "7%",
    marginTop: "5.5%",
    
  },
  info:{
    margin:'0.7%'
  }
}));

export default function StudioPage({ match }) {
  const id = match.params.id;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* create performers */}
      <Query query={GET_STUDIO_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error />;

          const studio = data.studios[0];

          return (
            <div className="container">
              <Grid container >
                <Grid item className={classes.left} xs={12} md={6} lg={6}>
                  {console.log(studio.url)}
                  <Card className={classes.root}>
                    { studio.url !== null && (<CardMedia
                      className={classes.media}
                      image={studio.url}
                      title="{studio.studio}"
                    />)}

                    { studio.url == null && (
                     <CardMedia
                        className={classes.media}
                        image="https://payload.cargocollective.com/1/5/173809/13009228/Logo_4.2_670.jpg"
                        title="{studio.studio}"
                      />
                    )}
                  </Card>
                </Grid>
                {/* <Grid item sm /> */}
                <Grid item xs={12} md>
                  <Grid container className={classes.right}>
                    <Grid item xs={12} className={classes.info}>
                      <Typography
                        
                        align="center"
                        variant="h3"
                        color="secondary"
                        noWrap
                      >
                        {studio.studio}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h5"
                        color="inherit"
                        
                        
                      >
                        Description: {studio.description}
                      </Typography>
                      </Grid>

                    <Grid item xs={12} md={5} className={classes.info} >
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="secondary"
                        noWrap
                        
                      >
                        Parent Studio: 
                      </Typography>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        {studio.parentStudio}
                      </Typography>
                      
                    </Grid>


                  </Grid>
                </Grid>
              </Grid>
              </div> 
          );
        }}
      </Query>
    </div>
  );
}

const GET_STUDIO_QUERY = gql`
query($id: Int!) {
  studios(id: $id) {
    id
    studio
    parentStudio
    url
    description
  }
}
`;
