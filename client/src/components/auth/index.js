import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './Register'
import HomePage from './HomePage'
import Login from './Login'
import NavTour from '../layout/NavTour'

import TourPage from './TourPage';

function Tour() {

  return (
    <Router>
      
      <NavTour />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/tour' component={TourPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      
    </Router>
  )
  // newUser ?(
  //   <div className="HomePage">
  //       <Register setNewUser={setNewUser} />
  //   </div>
  // ) : (
  //   <Login setNewUser={setNewUser}/>
  // );
}

export default Tour;
