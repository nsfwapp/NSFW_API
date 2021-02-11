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
    height: 640,
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
    maxWidth: 420,
    marginLeft: "7%",
    marginTop: "5.5%",
    
  },
  info:{
    margin:'2%'
  }
}));

export default function PerformerPage({ match }) {
  const id = match.params.id;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* create performers */}
      <Query query={GET_PERFORMER_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error />;

          const performer = data.performers[0];

          return (
            <div className="container">
              <Grid container >
                <Grid item className={classes.left} xs={12} md={6} lg={6}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={performer.profilePic.slice(2, -2)}
                      title="Contemplative Reptile"
                    />
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
                        {performer.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h5"
                        color="inherit"
                        
                        
                      >
                        Aliases: {performer.aliases}
                      </Typography>
                      </Grid>
                    {/* </Grid>
                    <Typography
                        
                        align="center"
                        variant="body2"
                        color="inherit"
                        
                        
                      >
                        Description: {performer.description}
                      </Typography>
                    </Grid> */}
                    <Grid item xs={12} md={5} className={classes.info} >
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        Date Of Birth: {performer.dateOfBirth}
                      </Typography>
                      
                    </Grid>

                    <Grid item xs={12} md={5} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        ethnicity: {performer.ethnicity}
                      </Typography>
                      
                    </Grid>

                    <Grid item xs={12} md={5} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        Height: {performer.height}
                      </Typography>
                      
                    </Grid>

                    <Grid item xs={12} md={5} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        Hair Color: {performer.hairColor}
                      </Typography>
                      
                    </Grid>

                    <Grid item xs={12} md={5} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        
                        
                      >
                        Tattoos: {performer.tattoos}
                      </Typography>
                      </Grid>


                      <Grid item xs={12} md={5} className={classes.info} >
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        Brests: {performer.boobs}
                      </Typography>
                      
                    </Grid>

                    <Grid item xs={12} md={5} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        Birth Place: {performer.birthPlace}
                      </Typography>
                      
                    </Grid>

                    <Grid item xs={12} md={5} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        
                        
                      >
                        Piercings: {performer.piercings}
                      </Typography>
                      
                    </Grid>

                    <Grid item xs={12} md={5} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        Measurments: {performer.measurments}
                      </Typography>
                      
                    </Grid>

                    <Grid item xs={12} md={5} className={classes.info}>
                    <Typography
                        
                        align="center"
                        variant="h6"
                        color="inherit"
                        noWrap
                        
                      >
                        years Active: {performer.yearsActive}
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

const GET_PERFORMER_QUERY = gql`
  query($id: Int!) {
    performers(id: $id) {
      id
      name
      aliases
      profilePic
      gender
      dateOfBirth
      description
      ethnicity
      height
      hairColor
      tattoos
      boobs
      birthPlace
      piercings
      eyeColor
      measurments
      yearsActive
      favoritePerformers {
        id
      }
    }
  }
`;
