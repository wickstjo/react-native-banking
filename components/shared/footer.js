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
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      fontSize: 15,
      fontFamily: 'verdana',
      color: 'white',
      textShadowColor: '#0E375C',
      textShadowOffset: {
         width: 1,
         height: 1
      },
      textShadowRadius: 1,
   }
}

export default Footer;