import React, { Component } from 'react';
import { View } from 'react-native';

class Content extends Component {
   render() { return (
      <View style={ styles.container }>
         { this.props.children }
      </View>
   )}
}

const styles = {
   container: {
      flex: 13,
      backgroundColor: 'white',
   }
}

export default Content;