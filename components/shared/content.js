import React, { Component } from 'react';
import { View } from 'react-native';

class Content extends Component {
   render() { return (
      <View style={{ ...styles.container, ...{ flex: this.props.size } }}>
         { this.props.children }
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: 'white',
   }
}

export default Content;