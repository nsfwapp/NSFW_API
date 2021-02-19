import React from 'react'
import PerformerCard from '../components/performer/PerformerCard'
import Search from '../components/layout/Search'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Loading from '../components/Shared/Loading'
import Error from '../components/Shared/Error'
import StudioCard from '../components/studio/StudioCard'
const useStyles = makeStyles( (theme) => ({
    container:{
        backgroundColor: '#010102'
    },
}))




export default function Studio() {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Search />
            {/* create performers */}
            <Query query={GET_STUDIOS_QUERY}>
                {({ data, loading, error}) =>{
                    if (loading) return <Loading />;
                    if (error) return <Error />;

                    return <StudioCard studios={data.studios} />
                }}

            </Query>

        </div>
    )
}

const GET_STUDIOS_QUERY = gql`
{
	studios{
    id
    studio
    url
  }
}
`
