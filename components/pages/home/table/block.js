import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

class Row extends Component {
   render() { return (
      <TouchableWithoutFeedback onPress={() => { this.props.func(this.props.id, this.props.label) }}>
         <View style={ this.props.styles }>
            <Text>
               { this.props.label }
            </Text>
         </View>
      </TouchableWithoutFeedback>
   )}
}

export default Row;