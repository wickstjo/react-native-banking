import React, { Component } from 'react';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Create from './pages/create/create';
import func from './shared/func';

class App extends Component {
   render() { return (
      <Create styles={ styles } />
   )}
}

const styles = {
   font: {
      fontSize: 15,
      fontFamily: 'verdana',
      color: 'white',
      textShadowColor: '#0E375C',
      textShadowOffset: {
         width: 1,
         height: 1
      },
      textShadowRadius: 1
   }
}

export default App;