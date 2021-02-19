import React from 'react'
import Search from '../components/layout/Search'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Loading from '../components/Shared/Loading'
import Error from '../components/Shared/Error'
import SceneCard from '../components/scene/SceneCard'
const useStyles = makeStyles( (theme) => ({
    container:{
        backgroundColor: '#010102'
    },
}))




export default function Scenes() {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Search />
            {/* create performers */}
            <Query query={GET_SCENES_QUERY}>
                {({ data, loading, error}) =>{
                    if (loading) return <Loading />;
                    if (error) return <Error />;

                    return <SceneCard scenes={data.scenes} />
                }}

            </Query>

        </div>
    )
}

const GET_SCENES_QUERY = gql`
{
    scenes{
      id
      title
      thumbnailUrl
      previewUrl
      length
      studio{
        studio
      }
      performers{
        name
      }
      favoriteScenes{
        id
      }
    }
  }
`
