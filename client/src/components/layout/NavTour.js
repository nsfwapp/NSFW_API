    import React from 'react'
    import { AppBar, Toolbar } from '@material-ui/core'
    import {Link} from 'react-router-dom'
    
    export default function Nav() {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Link to="/" >
                        Home
                    </Link>

                    <Link to="/login" >
                        Login
                    </Link>

                    <Link to="/register" >
                        Register
                    </Link>

                </Toolbar>
            </AppBar>
        )
    }
    