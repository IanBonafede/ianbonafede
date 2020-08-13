import React from 'react';
import clsx from 'clsx';
import './App.css';
import Home from "./Home"
import Bio from "./Bio"
import Projects from "./Projects"
import {HashRouter, Route, Switch} from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'; 
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
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';


import {FaLinkedinIn,
        FaFacebookF,
        FaTwitter,
        FaYoutube,
        FaInstagram,
        FaDiscord,
        FaGithub} from "react-icons/fa"





class App extends React.Component {
  constructor() {
    super()
    this.state = {
        pallete : {
          primary : {
            light: '#A3A3A3',
            main: '#828282',
            dark: '#686868',
            contrastText: '#fff'
          },
          secondary : {
            light: '#A3A3A3',
            main: '#828282',
            dark: '#686868',
            contrastText: '#fff'
          }
        },
        drawers : {
          left : false,
          right : false
        }
    }
    this.toggleLeftDrawer = this.toggleLeftDrawer.bind(this);
  }
    
    
  toggleLeftDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({
      drawers: {
        left: open
      }
    });
  };


  
    render() {

      document.body.style.background = this.state.pallete.primary.dark;

      

      const leftList = () => (
        <div
          className="leftList"
          style={{background: this.state.pallete.primary.main}}
          role="presentation"
          onClick={this.toggleLeftDrawer(false)}
          onKeyDown={this.toggleLeftDrawer(false)}
        >
          <List >
              <ListItem >
                <ListItemText primary="Quick Links" style={{ color: this.state.pallete.primary.contrastText }}/>
             </ListItem>
              <Divider></Divider>
              <ListItem button component="a" href="https://www.linkedin.com/in/ian-bonafede/" >
                <ListItemText primary="LinkedIn" style={{ color: this.state.pallete.primary.contrastText }} />
                <FaLinkedinIn style={{ color: this.state.pallete.primary.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://www.facebook.com/ian.bonafede">
                <ListItemText primary="Facebook" style={{ color: this.state.pallete.primary.contrastText }} />
                <FaFacebookF style={{ color: this.state.pallete.primary.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://twitter.com/bonafede_ian">
                <ListItemText primary="Twitter" style={{ color: this.state.pallete.primary.contrastText }}/>
                <FaTwitter style={{ color: this.state.pallete.primary.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber">
                <ListItemText primary="Youtube" style={{ color: this.state.pallete.primary.contrastText }}/>
                <FaYoutube style={{ color: this.state.pallete.primary.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://www.instagram.com/ianbonafede/">
                <ListItemText primary="Instagram" style={{ color: this.state.pallete.primary.contrastText }}/>
                <FaInstagram style={{ color: this.state.pallete.primary.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://discord.gg/H4XhXqw">
                <ListItemText primary="Discord" style={{ color: this.state.pallete.primary.contrastText }}/>
                <FaDiscord style={{ color: this.state.pallete.primary.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://github.com/IanBonafede">
                <ListItemText primary="GitHub" style={{ color: this.state.pallete.primary.contrastText }}/>
                <FaGithub style={{ color: this.state.pallete.primary.contrastText }}/>
              </ListItem>
          </List>
        </div>
      );

      

      return (
        <>
          <div style={{flexGrow: 1}}>
            <AppBar position="static" style={{ background: this.state.pallete.primary.main}}>
              <Toolbar variant="dense">

                
                    <Button onClick={this.toggleLeftDrawer(true)} edge="start" style={{height: 50}}><MenuIcon style={{ color: this.state.pallete.primary.contrastText }}/></Button>
                    <SwipeableDrawer
                      
                      anchor="left"
                      open={this.state.drawers.left}
                      onClose={this.toggleLeftDrawer(false)}
                      onOpen={this.toggleLeftDrawer(true)}
                    >
                      {leftList()}
                    </SwipeableDrawer>

                <Button href="/ianbonafede/#/" style={{height: 50, fontFamily: 'Merienda One', color: this.state.pallete.primary.contrastText, margin: 0}}>Ian Bonafede</Button>
                <Typography style={{flexGrow: 1}}></Typography>
                <Button href="/ianbonafede/#/bio" style={{height: 50}}><AccountCircleIcon style={{ color: this.state.pallete.primary.contrastText }}/></Button>
                <Button href="/ianbonafede/#/projects" style={{height: 50}}><LibraryBooksIcon style={{ color: this.state.pallete.primary.contrastText }}/></Button>
                <Button style={{height: 50}} edge="end"><PaletteIcon style={{ color: this.state.pallete.primary.contrastText }}/></Button>
              </Toolbar>
            </AppBar>
          </div>
          <Container style={{backgroundColor: this.state.pallete.primary.main}} maxWidth="lg">
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
}


export default App;

/***********************************this is the code that renders app

const MuiTheme = createMuiTheme({
    light: '#A3A3A3',
    main: '#828282',
    dark: '#686868',
    contrastText: '#fff',
    
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbarButton: {
    height: 50
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: MuiTheme.main
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
              <ListItemText primary="LinkedIn" style={{ color: MuiTheme.contrastText }} className={classes.title}/>
              <FaLinkedinIn style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://www.facebook.com/ian.bonafede">
              <ListItemText primary="Facebook" style={{ color: MuiTheme.contrastText }} />
              <FaFacebookF style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://twitter.com/bonafede_ian">
              <ListItemText primary="Twitter" style={{ color: MuiTheme.contrastText }}/>
              <FaTwitter style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber">
              <ListItemText primary="Youtube" style={{ color: MuiTheme.contrastText }}/>
              <FaYoutube style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://www.instagram.com/ianbonafede/">
              <ListItemText primary="Instagram" style={{ color: MuiTheme.contrastText }}/>
              <FaInstagram style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://discord.gg/H4XhXqw">
              <ListItemText primary="Discord" style={{ color: MuiTheme.contrastText }}/>
              <FaDiscord style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
            <ListItem button component="a" href="https://github.com/IanBonafede">
              <ListItemText primary="GitHub" style={{ color: MuiTheme.contrastText }}/>
              <FaGithub style={{ color: MuiTheme.contrastText }}/>
            </ListItem>
        </List>
      </div>
    );

  return (
      <>
          <div className={classes.root}>
            <AppBar position="static" style={{ background: MuiTheme.main, margin: 0, padding: 0}}>
              <Toolbar variant="dense">
              {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)} edge="start" className={classes.toolbarButton}><MenuIcon style={{ color: MuiTheme.contrastText }}/></Button>
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

                
                
                <Button href="/ianbonafede/#/" className={classes.toolbarButton} style={{fontFamily: 'Merienda One', color: MuiTheme.contrastText, margin: 0}}>Ian Bonafede</Button>
                <Typography className={classes.title}></Typography>
                <Button href="/ianbonafede/#/bio" className={classes.toolbarButton}><AccountCircleIcon style={{ color: MuiTheme.contrastText }}/></Button>
                <Button href="/ianbonafede/#/projects" className={classes.toolbarButton}><LibraryBooksIcon style={{ color: MuiTheme.contrastText }}/></Button>
                <Button className={classes.toolbarButton} edge="end"><PaletteIcon style={{ color: MuiTheme.contrastText }}/></Button>
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



export default App;*/
