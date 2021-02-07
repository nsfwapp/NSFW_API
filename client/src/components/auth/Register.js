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
import Gavel from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

function Transition(props) {
    return <Slide direction="up" {...props} />
}


export default function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [passwd, setPassword] = useState("")
    const [open, setOpen] = useState(false)

    const handleSubmit = (Event, createUser) => {
        Event.preventDefault();
        createUser();
    }


    return (
        <div className='register'>

            <Paper className='paper'>
                
                <Avatar className='avatar'>
                    <Gavel />
                </Avatar>
                
                <Typography variant='h4'>
                    Register
                </Typography>

                 <Mutation 
                    mutation={Register_Mutation}
                    variables= {{ username, email, passwd }}
                    onCompleted={data => {
                        console.log(data)
                        setOpen(true)
                    }}
                 >
                    {(createUser, {loading, error}) => {

                        return ( 
                            <form className='form' onSubmit={Event => handleSubmit(Event, createUser)}>
                                <FormControl margin='normal' required >
                                    <InputLabel htmlFor='username'>Username</InputLabel>
                                    <Input id='username' onChange={Event => setUsername(Event.target.value)} />
                                </FormControl>

                                <FormControl margin='normal' required >
                                    <InputLabel htmlFor='email'>Email</InputLabel>
                                    <Input id='email' type='email' onChange={Event => setEmail(Event.target.value)} />
                                </FormControl>

                                <FormControl margin='normal' required >
                                    <InputLabel htmlFor='password'>Password</InputLabel>
                                    <Input id='password' type='password' onChange={Event => setPassword(Event.target.value)} />
                                </FormControl>

                                <Button
                                    type='submit'
                                    variant='contained'
                                    disabled={loading || !username.trim() || !email.trim() || !passwd.trim()}
                                >
                                {loading ? "Registering..." : "Register"}   
                                </Button>

                                <Button
                                    type='submit'
                                    variant='contained'
                                    
                                >Login
                                </Button>

                                {error && <div>error</div>}

                            </form>


                            
                        )
                     }} 
                </Mutation> 

            </Paper>

            <Dialog
                open={open}
                disableBackdropClick={true}
                TransitionComponent={Transition}
            >
                <DialogTitle>
                    <VerifiedUserTwoTone />
                    New Account
                </DialogTitle>

                <DialogContent>
                    User Successfully Created!
                </DialogContent>

                <DialogActions>
                    <Button 
                    variant='contained'
                    >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

const Register_Mutation = gql`
mutation($username: String!, $passwd: String!, $email: String!){
    createUser(username: $username, email:$email, passwd: $passwd){
      user{
        username
        email
      }
    }
  }
`