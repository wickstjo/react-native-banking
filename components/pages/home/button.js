import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

class Button extends Component {
   render() { return (
      <TouchableWithoutFeedback onPress={ () => { this.props.func(this.props.id) } }>
         <View style={ this.props.primary }>
            <Text style={ this.props.secondary }>{ this.props.text }</Text>
         </View>
      </TouchableWithoutFeedback>
   )}
}

export default Button;