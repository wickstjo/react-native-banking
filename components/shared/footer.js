import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Footer extends Component {
   render() { return (
      <View style={{ ...styles.container, ...{ flex: this.props.size } }}>
         { this.props.children }
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: '#6A94E1',
   }
}

export default Footer;