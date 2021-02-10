import { CssBaseline } from '@material-ui/core'
import React from 'react'
import SideBar from '../layout/SideBar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './Register'
import HomePage from './HomePage'
import Login from './Login'
import NavTour from '../layout/NavTour'
import Nav from '../layout/Nav'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
}));


export default function TourPage() {

    const classes = useStyles();

    return (

    <container className={classes.root}>
      
        <SideBar />
  
    </container>

    )
}
