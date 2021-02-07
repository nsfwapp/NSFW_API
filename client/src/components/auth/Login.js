import React, { useState, useEffect} from 'react'
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import './register.css'


import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Lock from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (Event, tokenAuth, client) => {
        Event.preventDefault();
        const res = await tokenAuth();
        localStorage.setItem('authToken', res.data.tokenAuth.token)
        client.writeData({ data: { isLoggedIn: true}})
    }

    return (
        <div className='login'>

        <Paper className='paper'>
            
            <Avatar className='avatar'>
                <Lock />
            </Avatar>
            
            <Typography variant='h4'>
                Login as Existing User
            </Typography>

             <Mutation 
                mutation={LOGIN_MUTATION}
                variables= {{ username, password }}   
             >
                {(tokenAuth, {loading, error, called, client}) => {

                    return ( 
                        <form className='form' onSubmit={Event => handleSubmit(Event, tokenAuth, client)}>
                            <FormControl margin='normal' required >
                                <InputLabel htmlFor='username'>Username</InputLabel>
                                <Input id='username' onChange={Event => setUsername(Event.target.value)} />
                            </FormControl>

                            <FormControl margin='normal' required >
                                <InputLabel htmlFor='password'>Password</InputLabel>
                                <Input id='password' type='password' onChange={Event => setPassword(Event.target.value)} />
                            </FormControl>

                            <Button
                                type='submit'
                                variant='contained'
                                disabled={loading || !username.trim() || !password.trim()}
                            >
                            Login  
                            </Button>

                            <Button
                                type='submit'
                                variant='contained'
                                
                                
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
