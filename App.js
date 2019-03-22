import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {

   state = {
      foo: 'foobartesting'
   }

   render() { return (
      <View style={ styles.container }>
         <Block style={ styles.welcome } text={ `Welcome to React sadadsads!` } />
         <Block style={ styles.instructions } text={ `To get started, edit App.js` } />
         <Block style={ styles.instructions } text={ this.state.foo } />
      </View>
   )}
}

function Block(props) {
   return (
      <Text style={ props.style }>{ props.text }</Text>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
});

export default App;