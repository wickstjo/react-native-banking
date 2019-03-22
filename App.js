import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() { return (
      <View style={styles.container}>
         <Text style={styles.welcome}>Welcome to React fuckthis!</Text>
         <Text style={styles.instructions}>To get started, edit App.js</Text>
         <Text style={styles.instructions}>foo</Text>
      </View>
   )}
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