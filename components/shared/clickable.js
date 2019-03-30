import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

class Clickable extends Component {
   render() { return (
      <TouchableWithoutFeedback onPress={ this.props.func }>
         <View style={ styles.container }>
            <Text style={ styles.font }>
               { this.props.label }
            </Text>
         </View>
      </TouchableWithoutFeedback>
   )}
}

const styles = {
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 13
   },
   font: {
      fontSize: 15,
      fontFamily: 'verdana',
      color: 'white',
      textShadowColor: '#0E375C',
      textShadowOffset: {
         width: 1,
         height: 1
      },
      textShadowRadius: 1
   }
}

export default Clickable;