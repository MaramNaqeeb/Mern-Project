import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';






const drawerWidth = 240;


  

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    margin:' 100px 50px',
    
    maxWidth: 1400,


  },
  media: {
    height: 60,

  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
   
     

     
  },
 


  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <div className={classes.toolbar}  />
      <Divider style={ {backgroundColor:"#e9e3db"}}/>
      
      <List style={ {backgroundColor:"#dde7ed",height:'1000px',}}>
      {[ <span onClick={() => navigate("/home")}>About Us</span>,
        
         ,"", <span onClick={()=>navigate("/")}>All Dentists</span>, "",<span onClick={()=>navigate("/new")}>Add a Dentist</span>,""].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    
    </div>
  );
  <Link to={"/new"}></Link>


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar   style={ {backgroundColor:"rgb(22 74 102)"}} position="fixed" className={classes.appBar} >
        
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            
          >
          </IconButton>
          
          <Typography variant="h6" noWrap >
           <p style={{marginLeft:"650px"}}>My Dentist</p>   
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
          
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
            
          </Drawer>
          
        </Hidden>
      </nav>
      
      <main >
      <Box  className='picture' component="img" src="clinicvv.jpg" alt="" sx={{ height: "450px", width: "80%",marginBottom:"20px" }} />
     
        <div className={classes.toolbar} />
        
     
        <Typography paragraph style={{textAlign:"start"}}>
        This application aims to facilitate the process of searching for a dentist in Palestine in particular. 
        It is beneficial for both the dentists and the patients, in which the app attracts more patients to the dentists as they simply can view the available dentists in each area in Palestine 
        with sufficient information about them. The user can add a dentist with his/her needed information to be viewed by the patients in a table
         so that the patients can click on the name of the dentist to be directed to the information about that dentist. Also, the patients who experienced 
         some of the added dentists can rate those dentists; therefore, the other patients who search for a dentist can see the rates of the dentists to choose from them depending on that rating. 


        </Typography>
        <Typography paragraph/>
    <div style={{display:"inline-flex",justifyContent:"space-between"}}>
    <div style={{display:"inline-flex"}}>

    <Card className={classes.root}>
      <CardActionArea><Link to={"/new"}></Link>


        
      <Avatar  alt="The image" src="/tooth6.jpg" style={{
                width: 220,
                height: 220,
           margin:" 27px"

              }} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Add Dentists
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p><Link to={"/new"}>You can add  dentists to the list</Link></p>
          

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </div>

    <div style={{display:"inline-flex"}}>
    <Card className={classes.root}>
      <CardActionArea>


        
        
             <Avatar  alt="The image" src="/tooth9.jpg" style={{
                width: 220,
                height: 220,
           margin:" 27px"

              }} />
       

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            View Dentists
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p><Link to={"/"}>You can view the dentists in your city</Link></p>
          

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </div>
    <div style={{display:"inline-flex"}}>
    <Card className={classes.root}>
      <CardActionArea>


        
      <Avatar  alt="The image" src="/toothe4.jpg" style={{
                width: 220,
                height: 220,
           margin:" 27px"

              }} />
       

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Recommened Dentists
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p><Link to={"/"}>You can recommened dentists</Link></p>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </div>
    </div>

      </main>

     
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,

  
};

export default ResponsiveDrawer;