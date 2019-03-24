import React, { Component } from 'react';
import { Alert } from 'react-native'; //Alert.alert('foo');
import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

class App extends Component {

   state = {
      header: 'Header',
      footer: 'Footer',
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
         <Header text={ this.state.header } />
         <Content data={ this.state.content } remove={ this.remove } />
         <Footer text={ this.state.footer } add={ this.add } />
      </>
   )}
}

export default App;