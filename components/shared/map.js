import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Create extends Component {

   state = {
      header: 'Create Profile',
      footer: 'Create',
      start: 'none',
      destination: 'none',
   }

   render() { return (
      <View style={ styles.container }>
         <Text>Foo</Text>
         <TextInput />
      </View>
   )}
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#9AFE9A'
   }
}

export default Create;