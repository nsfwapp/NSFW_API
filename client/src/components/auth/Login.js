import React, { useState, useEffect} from 'react'
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";



import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Lock from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";
import {
    AppBar,
    Toolbar,
    Button,
    makeStyles,
    Grid,
    Container,
  } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up("md")]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
          }
    },
    paper: {
        backgroundColor: '#000E2B',
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing.unit * 2    
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.light
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.secondary.main
      },
    submit: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
    }
  }));



export default function Login() {

    const classes = useStyles();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (Event, tokenAuth, client) => {
        Event.preventDefault();
        const res = await tokenAuth();
        localStorage.setItem('authToken', res.data.tokenAuth.token)
        client.writeData({ data: { isLoggedIn: true}})
    }

    return (
        
        <div className={classes.root} >
        <Paper className={classes.paper}>

            <Avatar className={classes.avatar}>
                <Lock />
            </Avatar>

            <Typography className={classes.title} variant='h4'>
                Login as Existing User
            </Typography>


             <Mutation 
                mutation={LOGIN_MUTATION}
                variables= {{ username, password }}   
             >
                {(tokenAuth, {loading, error, called, client}) => {

                    return ( 
                        
                        <form className={classes.form} onSubmit={Event => handleSubmit(Event, tokenAuth, client)}>

                            <FormControl margin='normal' required fullWidth >
                                <InputLabel htmlFor='username'>Username</InputLabel>
                                <Input id='username' onChange={Event => setUsername(Event.target.value)} />
                            </FormControl>


                            <FormControl margin='normal' required fullWidth >
                                <InputLabel htmlFor='password'>Password</InputLabel>
                                <Input id='password' type='password' onChange={Event => setPassword(Event.target.value)} />
                            </FormControl>
                            
                            <Button
                                className={classes.submit}
                                type='submit'
                                variant='contained'
                                color="secondary"
                                fullWidth
                                disabled={loading || !username.trim() || !password.trim()}
                            >
                            Login  
                            </Button>

                            <Button
                                href="/register"
                                className={classes.submit}
                                variant='outlined'
                                color="secondary"
                                fullWidth
  
                            >New user? Register here
                            </Button>

                            {error && <div>error</div>}

                        </form>
                        


                        
                    )
                 }} 
            </Mutation> 

            </Paper>
            </div>
        
        )
        
}

const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
