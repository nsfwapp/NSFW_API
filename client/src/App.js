import React from 'react';
import { gql} from 'apollo-boost'
import { Query } from 'react-apollo'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/layout/Nav'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Scenes from './pages/Scenes'
import Performers from './pages/Performers'
import Movies from './pages/Movies'
import Loading from "./components/Shared/Loading";
import Error from "./components/Shared/Error";
import PerformerPage from './components/performer/PerformerPage'
import Studio from './pages/Studios'
import StudioPage from './components/studio/StudioPage'
import ScenePage from './components/scene/ScenePage'
import MoviePage from './components/movie/MoviePage'

const ME_QUERY = gql `
{
  me{
    id
		username
    email
  }
}
`

const App = () => (
 
    <Query query={ME_QUERY}>
      {
      ({data, loading, error}) => {
        if (loading) return <Loading />;
        if (error) return <Error />;

        const currentUser = data.me;

        return (
          
          <Router>
            <Nav currentUser={currentUser}/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/scenes' component={Scenes} />
              <Route path='/scene/:id' component={ScenePage} />

              <Route path='/movies' component={Movies} />
              <Route path='/movie/id' component={MoviePage} />

              <Route path='/studios' component={Studio} />
              <Route path='/studio/:id' component={StudioPage} />

              <Route exact path='/performers' component={Performers} />
              <Route path='/performer/:id' component={PerformerPage} />

              <Route path='/profile/:id' component={Profile} />
            </Switch>
          </Router>
        )
     }}

    </Query>

);

export default App;
