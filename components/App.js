import React, { Component } from 'react';
import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

class App extends Component {

   state = {
      content: [
         'first',
         'second',
         'third'
      ]
   }

   render() { return (
      <>
         <Header />
         <Content list={ this.state.content } />
         <Footer />
      </>
   )}
}

export default App;