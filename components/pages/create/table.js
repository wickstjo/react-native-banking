import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Table extends Component {
   render() { return (
      <View style={{ ...styles.container, ...this.props.styles }}>
         <View style={ styles.row }>
            <Text style={ styles.left }>{ this.props.primary }:</Text>
            <Text style={ styles.right }>{ this.props.secondary }</Text>
         </View>
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: 'lightgray',
      borderBottomColor: '#BCBCBC',
      borderBottomWidth: 1,
      flex: 1
   },
   row: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   left: {
      flex: 1,
      paddingLeft: 10
   },
   right: {
      flex: 2,
      textAlign: 'right',
      paddingRight: 10
   }
}

export default Table;