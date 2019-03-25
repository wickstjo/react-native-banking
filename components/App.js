import React, { Component } from 'react';
import Home from './pages/home/home';

class App extends Component {
   render() { return (
      <Home styles={ styles } />
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