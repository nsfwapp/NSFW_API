import {React, useState} from 'react'
import {
    Drawer,
    Grid,
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    IconButton,
    Icon,
    InputBase

}
from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TheatersIcon from '@material-ui/icons/Theaters';
import FaceIcon from '@material-ui/icons/Face';
import BusinessIcon from '@material-ui/icons/Business';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import List from '@material-ui/icons/List'
import Search from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#fff',
      
    },
    appbar: {
        backgroundColor: '#000',
        marginTop: '55px',
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })},
    title: {
        marginRight: theme.spacing.unit * 6,
        letterSpacing: 2,
    },
    menuicon: {
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing.unit * 2,
          },
    },
    searchbar: {
        backgroundColor: "#242424",
        display: 'flex',
        height: "35px"
    },
    inputRoot: {
        color: 'inherit',
   
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 1.5,
        transition: theme.transitions.create('width'),
        
        
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
      avatar: {
          marginLeft: theme.spacing.unit * 4,
          //marginRight: theme.spacing.unit * 2,
      },
      drawer: {
        width: '240px',
        flexShrink: 0,
      }
  }));


export default function SideBar() {

    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <div className={classes.root}>
            <CssBaseline />
            
            <AppBar className={classes.appbar}>
                <Toolbar variant='dense'>
                    <IconButton 
                    edge='start' 
                    onClick={handleDrawerOpen}
                    className={classes.menuicon}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        HOME
                    </Typography>
                    <div className={classes.searchbar}>
                    <IconButton>
                        <Search />
                    </IconButton>
                    <InputBase 
                    placeholder="Search"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    >
                    </InputBase>
                    
                    </div>
                    <Grid item sm />
                    <IconButton
                     edge='end'
                     className={classes.avatar}
                     >
                         <AccountCircleIcon />
                     </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            >
            <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List disablePadding>
                
                <ListItem button>
                <ListItemIcon>
                    <VideoLibraryIcon />
                </ListItemIcon>
                    <ListItemText primary="Scenes" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <TheatersIcon />
                </ListItemIcon>
                    <ListItemText primary="Movies" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <FaceIcon />
                </ListItemIcon>
                    <ListItemText primary="Performers" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <BusinessIcon />
                </ListItemIcon>
                    <ListItemText primary="Studios" />
                </ListItem>
            </List>
                
            </Drawer>
        </div>
    )
}
