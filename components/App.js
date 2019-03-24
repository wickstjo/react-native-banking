import React, { Component } from 'react';
import { Alert } from 'react-native'; //Alert.alert('foo');
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

   // ADD ITEM
   add = () => {
      this.setState({
         content: [...this.state.content, 'foo']
      })
   }

   // REMOVE ITEM
   remove = (id) => {
      this.setState({
         content: this.state.content.filter((value, index) => index !== id)
      })
   }

   render() { return (
      <>
         <Header />
         <Content data={ this.state.content } remove={ this.remove } />
         <Footer add={ this.add } />
      </>
   )}
}

export default App;