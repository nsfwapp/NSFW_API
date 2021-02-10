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
    display: 'flex'
    
  },
  root: {
    maxWidth: 460,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '10%'
    

    // color: theme.palette.secondary.main,
  },
  media: {
    height: 640,
    
  },
  container: {
    //marginLeft: "4%",
    //marginRight: "4%",
  },
  title:{
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '7.5%'
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

          const performer = data.performers[0]

          return (
            <div className="container">
              
              <Grid container sm={12}>
                <Grid item sm={6}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={performer.profilePic.slice(2, -2)}
                      title="Contemplative Reptile"
                    />
                  </Card>
                </Grid>

                <Grid item sm={6}>
                    <Grid container flexDirection='column'>
                        <Grid item className={classes.title}>
                <Typography  align="center" variant="h2" color='secondary' noWrap>
                      {performer.name}
                    </Typography>
                    <Grid item>
                        tabes edit/info/scenes/movies 
                    </Grid>
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
