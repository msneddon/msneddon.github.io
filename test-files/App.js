
import React, { Component } from 'react';
import './App.css';
import './fa/css/font-awesome.min.css';


/* Material-UI Theme */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


/* AppBar */
import AppBar from 'material-ui/AppBar';

/* Menu Drawer */
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

/* Main Controller */
import MainViewport from './MainViewport.js';


import {
  deepOrange300, deepOrange400,
  blueGrey200, blueGrey50,
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500, grey800,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: deepOrange400,
    primary2Color: deepOrange400,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: grey800,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});



const views = [
  {id:'home', display:'Home'},
  {id:'portfolio', display:'Portfolio'},
  {id:'publications', display:'Publications'},
  {id:'about', display:'About'}
]

/*  The App Component manages the overall theme and navigation- basically the AppBar,
navigation, and the MainViewPort */
class App extends Component {

  constructor() {
    super();
    this.state = {
      view: 'publications',
      menuVisible: false
    };
  }

  toggleMenu = () => {
    if(this.state.menuVisible)
      this.setState({menuVisible: false});
    else
      this.setState({menuVisible: true});
  }


  setView = (view) => {
    this.closeMenu();
    this.setState({view: view});
  }

  closeMenu = () => {
    this.setState({menuVisible: false});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar onLeftIconButtonTouchTap={this.toggleMenu}/>
          <MainViewport view={this.state.view} />

          <Drawer
            docked={false}
            width={150}
            open={this.state.menuVisible}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={() => this.setView('home')}>Home</MenuItem>
            <MenuItem onTouchTap={() => this.setView('portfolio')}>Portfolio</MenuItem>
            <MenuItem onTouchTap={() => this.setView('publications')}>Publications</MenuItem>
            <MenuItem onTouchTap={() => this.setView('about')}>About</MenuItem>
            <MenuItem onTouchTap={() => this.setView('contact')}>Contact</MenuItem>

          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;