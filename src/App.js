import React from 'react';
import './App.css';
import Home from "./Home"
import Bio from "./Bio"
import Projects from "./Projects"
import {HashRouter, Route, Switch} from 'react-router-dom'
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
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
}));


function App() {

  const classes = useStyles();

  

  


  return (
      <>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Ian Bonafede
                </Typography>
                <Button href="/ianbonafede/#/" ><HomeIcon fontSize="default"  style={{ color: MuiTheme.palette.primary.contrastText }}/></Button>
                <Button href="/ianbonafede/#/bio"><AccountCircleIcon  fontSize="default" style={{ color: MuiTheme.palette.primary.contrastText }}/></Button>
                <Button href="/ianbonafede/#/projects"><LibraryBooksIcon  fontSize="default" style={{ color: MuiTheme.palette.primary.contrastText }}/></Button>
              </Toolbar>
            </AppBar>
          </div>

          <HashRouter basename={`${process.env.PUBLIC_URL}`}>
            <Switch>

            
              <Route exact path="/" component={Home}/>
              <Route exact path="/bio" component={Bio}/>
              <Route exact path="/Projects" component={Projects}/>
              
            </Switch>
          </HashRouter>
      </>

  );
  


}



export default App;
