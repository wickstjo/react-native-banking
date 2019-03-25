import React, { Component } from 'react';
import { View } from 'react-native';

class Content extends Component {
   render() { return (
      <View style={{ ...styles.container, ...{ flex: this.props.size } }}>
         <View style={ styles.innerbody }>
            { this.props.children }
         </View>
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: 'white',
   },
   innerbody: {
      padding: 15,
      paddingTop: 10
   }
}

export default Content;