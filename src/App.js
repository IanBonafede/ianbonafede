import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ChromePicker, SliderPicker, CompactPicker } from 'react-color';
import FontPicker from "font-picker-react";
import './App.css';
import Home from "./Home"
import Bio from "./Bio"
import Projects from "./Projects"
import {HashRouter, Route, Switch} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PaletteIcon from '@material-ui/icons/Palette';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import {FaLinkedinIn,
        FaFacebookF,
        FaTwitter,
        FaYoutube,
        FaInstagram,
        FaDiscord,
        FaGithub} from "react-icons/fa"




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        pallete : {
          light: '#CCCCCC',
          main: '#808080',
          dark: '#666666',
          contrastText: '#ffffff'
        },
        fonts: {
          logo: "Merienda One",
          title: "Merienda One",
          section: "Merienda One",
          paragraph: "Merienda One"
        },
        drawers : {
          left : false,
          right : false
        }
    }
    this.toggleLeftDrawer = this.toggleLeftDrawer.bind(this);
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);

    this.handleLightColorChange = this.handleLightColorChange.bind(this);
    this.handleMainColorChange = this.handleMainColorChange.bind(this);
    this.handleDarkColorChange = this.handleDarkColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);

    this.handleLogoFontChange = this.handleLogoFontChange.bind(this);
    this.handleTitleFontChange = this.handleTitleFontChange.bind(this);
    this.handleSectionFontChange = this.handleSectionFontChange.bind(this);
    this.handleParagraphFontChange = this.handleParagraphFontChange.bind(this);
  }
  
  handleLightColorChange = (color) => {
    this.setState({
      pallete: {
        light: color.hex,
        main: this.state.pallete.main,
        dark: this.state.pallete.dark,
        contrastText: this.state.pallete.contrastText
      }
    });
  }

  handleMainColorChange = (color) => {
    this.setState({
      pallete: {
        light: this.state.pallete.light,
        main: color.hex,
        dark: this.state.pallete.dark,
        contrastText: this.state.pallete.contrastText
      }
    });
  }

  handleDarkColorChange = (color) => {
    this.setState({
      pallete: {
        light: this.state.pallete.light,
        main: this.state.pallete.main,
        dark: color.hex,
        contrastText: this.state.pallete.contrastText
      }
    });
  }

  handleTextColorChange = (color) => {
    this.setState({
      pallete: {
        light: this.state.pallete.light,
        main: this.state.pallete.main,
        dark: this.state.pallete.dark,
        contrastText: color.hex
      }
    });

    
  }

  handleLogoFontChange = (nextFont) => {
    this.setState({
      fonts: {
        logo: nextFont.family,
        title: this.state.fonts.title,
        section: this.state.fonts.section,
        paragraph: this.state.fonts.paragraph
      }
    });
  }

  handleTitleFontChange = (nextFont) => {
    this.setState({
      fonts: {
        logo: this.state.fonts.logo,
        title: nextFont.family,
        section: this.state.fonts.section,
        paragraph: this.state.fonts.paragraph
      }
    });
  }

  handleSectionFontChange = (nextFont) => {
    this.setState({
      fonts: {
        logo: this.state.fonts.logo,
        title: this.state.fonts.title,
        section: nextFont.family,
        paragraph: this.state.fonts.paragraph
      }
    });
  }

  handleParagraphFontChange = (nextFont) => {
    this.setState({
      fonts: {
        logo: this.state.fonts.logo,
        title: this.state.fonts.title,
        section: this.state.fonts.section,
        paragraph: nextFont.family
      }
    });
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

  toggleRightDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({
      drawers: {
        right: open
      }
    });
  };


  
    render() {

      document.body.style.background = this.state.pallete.dark;

      const families = [
        "Merienda One", "Charmonman", "Condiment", "Tangerine", "Euphoria Script", "Srisakdi", "Pirata One",
        "Mogra", "Modak", "Stylish", "Gabriela", "Marmelad", "DM Mono", "Calligraffitti", "Averia Serif Libre",
        "Asul", "Amita", "Milonga", "IM Fell English SC", "Germania One", "Stardos Stencil", "Shojumaru", "Almendra",
        "Oxanium", "Iceland", "Metamorphous", "Nova Mono", "Nova Round", "Sedgwick Ave Display", "Sarina", "Yatra One",
        "Marko One", "Iceberg", "Junge", "UnifrakturCook", "Uncial Antiqua", "Eagle Lake", "Linden Hill", "Kotta One",
        "Open Sans" , "Roboto", "Ubuntu", "Roboto Slab", "PT Serif"
      ]
        

      const leftList = () => (
        <div
          className="leftDrawerDiv"
          style={{background: this.state.pallete.main}}
          role="presentation"
          onKeyDown={this.toggleLeftDrawer(false)}
        >
          <List style={{background: this.state.pallete.main}}>
              <ListItem >
                <ListItemText primary="Quick Links" style={{ color: this.state.pallete.contrastText }}/>
             </ListItem>
              <Divider></Divider>
              <ListItem button component="a" href="https://www.linkedin.com/in/ian-bonafede/" >
                <ListItemText primary="LinkedIn" style={{ color: this.state.pallete.contrastText }} />
                <FaLinkedinIn style={{ color: this.state.pallete.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://www.facebook.com/ian.bonafede">
                <ListItemText primary="Facebook" style={{ color: this.state.pallete.contrastText }} />
                <FaFacebookF style={{ color: this.state.pallete.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://twitter.com/bonafede_ian">
                <ListItemText primary="Twitter" style={{ color: this.state.pallete.contrastText }}/>
                <FaTwitter style={{ color: this.state.pallete.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber">
                <ListItemText primary="Youtube" style={{ color: this.state.pallete.contrastText }}/>
                <FaYoutube style={{ color: this.state.pallete.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://www.instagram.com/ianbonafede/">
                <ListItemText primary="Instagram" style={{ color: this.state.pallete.contrastText }}/>
                <FaInstagram style={{ color: this.state.pallete.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://discord.gg/H4XhXqw">
                <ListItemText primary="Discord" style={{ color: this.state.pallete.contrastText }}/>
                <FaDiscord style={{ color: this.state.pallete.contrastText }}/>
              </ListItem>
              <ListItem button component="a" href="https://github.com/IanBonafede">
                <ListItemText primary="GitHub" style={{ color: this.state.pallete.contrastText }}/>
                <FaGithub style={{ color: this.state.pallete.contrastText }}/>
              </ListItem>
          </List>
        </div>
      );

      const rightList = () => (
        <div
          className="rightDrawerDiv"
          style={{background: this.state.pallete.main}}
          role="presentation"
          onKeyDown={this.toggleRightDrawer(false)}
        >
          <List style={{background: this.state.pallete.main}}>
              <ListItem >
                <ListItemText primary="Colors" style={{ color: this.state.pallete.contrastText }}/>
             </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Light" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <ListItem >
                 <ChromePicker onChange={this.handleLightColorChange} color={this.state.pallete.light}/>
              </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Main" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <ListItem >
                 <ChromePicker onChange={this.handleMainColorChange} color={this.state.pallete.main}/>
              </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Dark" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <ListItem >
                 <ChromePicker onChange={this.handleDarkColorChange} color={this.state.pallete.dark}/>
              </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Text/Icons" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <ListItem >
                 <ChromePicker onChange={this.handleTextColorChange} color={this.state.pallete.contrastText}/>
              </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Fonts" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Logo" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <ListItem >
                <FontPicker
                      apiKey="AIzaSyA_UvCyYSVUs29fC2_8ZEjLNc1sIFwB4Dk"
                      families={families}
                      activeFontFamily={this.state.fonts.logo}
                      onChange={this.handleLogoFontChange} />
              </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Title" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <ListItem >
                <FontPicker
                        apiKey="AIzaSyA_UvCyYSVUs29fC2_8ZEjLNc1sIFwB4Dk"
                        families={families}
                        activeFontFamily={this.state.fonts.title}
                        onChange={this.handleTitleFontChange} />
              </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Section" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <ListItem >
                <FontPicker
                        apiKey="AIzaSyA_UvCyYSVUs29fC2_8ZEjLNc1sIFwB4Dk"
                        families={families}
                        activeFontFamily={this.state.fonts.section}
                        onChange={this.handleSectionFontChange} />
              </ListItem>
              <Divider></Divider>
              <ListItem >
                  <ListItemText primary="Paragraph" style={{ color: this.state.pallete.contrastText }} />
              </ListItem>
              <ListItem >
                <FontPicker
                    apiKey="AIzaSyA_UvCyYSVUs29fC2_8ZEjLNc1sIFwB4Dk"
                    families={families}
                    activeFontFamily={this.state.fonts.paragraph}
                    onChange={this.handleParagraphFontChange} />
              </ListItem>
          </List>
        </div>
      );

      return (
        <>
          <div style={{flexGrow: 1}}>
            <AppBar position="static" style={{ background: this.state.pallete.main}} elevation={0}>
              <Toolbar variant="dense">

                
                    <Button onClick={this.toggleLeftDrawer(true)} edge="start" style={{height: 50}}><MenuIcon style={{ color: this.state.pallete.contrastText }}/></Button>
                    <SwipeableDrawer
                      
                      anchor="left"
                      open={this.state.drawers.left}
                      onClose={this.toggleLeftDrawer(false)}
                      onOpen={this.toggleLeftDrawer(true)}
                      BackdropProps={{ invisible: true }}
                    >
                      {leftList()}
                    </SwipeableDrawer>

                <Button href="/ianbonafede/#/" style={{height: 50, fontFamily: this.state.fonts.logo, color: this.state.pallete.contrastText, margin: 0}}>Ian Bonafede</Button>
                <Typography style={{flexGrow: 1}}></Typography>
                <Button href="/ianbonafede/#/bio" style={{height: 50}}><AccountCircleIcon style={{ color: this.state.pallete.contrastText }}/></Button>
                <Button href="/ianbonafede/#/projects" style={{height: 50}}><LibraryBooksIcon style={{ color: this.state.pallete.contrastText }}/></Button>
                <Button onClick={this.toggleRightDrawer(true)} style={{height: 50}} edge="end"><PaletteIcon style={{ color: this.state.pallete.contrastText }}/></Button>
                <SwipeableDrawer
                      
                      anchor="right"
                      open={this.state.drawers.right}
                      onClose={this.toggleRightDrawer(false)}
                      onOpen={this.toggleRightDrawer(true)}
                      BackdropProps={{ invisible: true }}
                    >
                      {rightList()}
                    </SwipeableDrawer>
              </Toolbar>
            </AppBar>
          </div>
          
          <HashRouter basename={`${process.env.PUBLIC_URL}`} >
            <Switch>
            
              <Route exact path="/" render={props => 
                    (<Home {...props}  pallete={this.state.pallete} fonts={this.state.fonts}/>)}/>

              <Route exact path="/bio" render={props => 
                    (<Bio {...props}  pallete={this.state.pallete} fonts={this.state.fonts}/>)}/>

              <Route exact path="/Projects" render={props => 
                    (<Projects {...props}  pallete={this.state.pallete} fonts={this.state.fonts}/>)}/>
              
            </Switch>
          </HashRouter>
        </>
      );
      
      
    
    
    }
}


export default App;
