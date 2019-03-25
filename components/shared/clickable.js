import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

class Clickable extends Component {
   render() { return (
      <TouchableWithoutFeedback onPress={ this.props.func }>
         <View style={ styles.container }>
            <Text style={ this.props.styles }>
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
   }
}

export default Clickable;