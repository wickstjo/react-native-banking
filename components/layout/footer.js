import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

class Footer extends Component {
   render() { return (
      <TouchableWithoutFeedback onPress={ this.props.add }>
         <View style={ styles.container }>
            <Text style={ styles.text }>
               { this.props.text }
            </Text>
         </View>
      </TouchableWithoutFeedback>
   )}
}

const styles = {
   container: {
      backgroundColor: '#6A94E1',
      flex: 1,
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