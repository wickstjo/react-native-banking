import React, { Component } from 'react';
import { View } from 'react-native';

class Footer extends Component {
   render() { return (
      <View style={ styles.container}>
         { this.props.children }
      </View>
   )}
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#6A94E1',
      borderTopWidth: 1,
      borderTopColor: '#4A94D2',
   }
}

export default Footer;