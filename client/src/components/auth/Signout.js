import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ApolloConsumer } from 'react-apollo'

const useStyles = makeStyles((theme) => ({
    buttonText:{

    },
    buttonIcon: {
        marginLeft: '5px'
    },
    root: {


    }
}))


export default function Signout() {

    const classes = useStyles();

    const handleSignout = client => {
        localStorage.removeItem('authToken')
        client.writeData({ data: { isLoggedIn: false}});
        console.log("Signed out User", client)
    };

    return (
        <div className={classes.root}>
            <ApolloConsumer>
            {client => (


    <Button onClick={() => handleSignout(client)}>
      <Typography
        variant="body1"
        className={classes.buttonText}
        color="secondary"
      >
        Signout
      </Typography>
      <ExitToApp className={classes.buttonIcon} color="secondary" />
    </Button> )}
    </ApolloConsumer>
    </div>
    )
}
