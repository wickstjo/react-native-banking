import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

class Row extends Component {
   render() { return (
      <TouchableWithoutFeedback onPress={() => { this.props.func(this.props.id) }}>
         <View style={ this.props.styles }>
            <Text style={ styles.capitalize }>
               { this.props.label }
            </Text>
         </View>
      </TouchableWithoutFeedback>
   )}
}

const styles = {
   capitalize: {
      textTransform: 'capitalize'
   }
}

export default Row;