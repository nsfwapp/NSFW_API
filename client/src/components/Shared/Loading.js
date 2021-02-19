import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles((theme) =>({
    root: {
      width: '100vw',
      textAlign: 'center'
      
    },
    progress: {
      margin: theme.spacing.unit * 2,
      color: theme.palette.secondary.dark
    }
}))


export default function Loading() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
    <CircularProgress className={classes.progress} />
  </div>

    )
}
