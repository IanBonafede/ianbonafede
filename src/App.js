import React from 'react';
import clsx from 'clsx';
import './App.css';
import Home from "./Home"
import Bio from "./Bio"
import Projects from "./Projects"
import {HashRouter, Route, Switch} from 'react-router-dom'
import { Container } from '@material-ui/core';
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PaletteIcon from '@material-ui/icons/Palette';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const MuiTheme = createMuiTheme({
    light: '#A3A3A3',
    main: '#828282',
    dark: '#686868',
    contrastText: '#fff'
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: "#828282"
  }
}));

function App() {

  const classes = useStyles();

  
  document.body.style = 'background: #686868;';

 
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List style={{ background: MuiTheme.main }}>
            <ListItem >
              <ListItemText primary="Quick Links" style={{ color: MuiTheme.contrastText }}/>
           </ListItem>
            <Divider></Divider>
            <ListItem button component="a" href="https://www.linkedin.com/in/ian-bonafede/">
              <ListItemText primary="LinkedIn" style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://www.facebook.com/ian.bonafede">
              <ListItemText primary="Facebook" style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://twitter.com/bonafede_ian">
              <ListItemText primary="Twitter" style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber">
              <ListItemText primary="Youtube" style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://www.instagram.com/ianbonafede/">
              <ListItemText primary="Instagram" style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://discord.gg/H4XhXqw">
              <ListItemText primary="Discord" style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://github.com/IanBonafede">
              <ListItemText primary="GitHub" style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
        </List>
      </div>
    );

  return (
      <>
          <div className={classes.root}>
            <AppBar position="static" style={{ background: MuiTheme.main, padding: 0 }}>
              <Toolbar >
              {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ color: MuiTheme.contrastText }}/></Button>
                  <SwipeableDrawer
                    classes={{ paper: classes.paper }}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
                
                <Typography variant="h6" className={classes.title}>
                  Ian Bonafede
                </Typography>
                <Button href="/ianbonafede/#/" ><HomeIcon style={{ color: MuiTheme.contrastText }}/></Button>
                <Button href="/ianbonafede/#/bio"><AccountCircleIcon style={{ color: MuiTheme.contrastText }}/></Button>
                <Button href="/ianbonafede/#/projects"><LibraryBooksIcon style={{ color: MuiTheme.contrastText }}/></Button>
                <Button ><PaletteIcon style={{ color: MuiTheme.contrastText }}/></Button>
              </Toolbar>
            </AppBar>
          </div>
          <Container style={{backgroundColor: MuiTheme.main}} maxWidth="lg">
              <HashRouter basename={`${process.env.PUBLIC_URL}`} >
                <Switch>

                
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/bio" component={Bio}/>
                  <Route exact path="/Projects" component={Projects}/>
                  
                </Switch>
              </HashRouter>
          </Container>
          
      </>

  );
  


}



export default App;
