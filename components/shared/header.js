import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
   render() { return (
      <View style={ styles.container }>
         <View style={ styles.innerbody }>
            <View style={ styles.left }>
               <Text style={ this.props.styles.font }>React Maps</Text>
            </View>
            <View style={ styles.right }>
               <Text style={{ ...styles.alignment, ...this.props.styles.font }}>{ this.props.page }</Text>
            </View>
         </View>
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: '#6A94E1',
      flex: 1,
   },
   innerbody: {
      flex: 1,
      flexDirection: 'row',
      paddingLeft: 15,
      paddingRight: 15
   },
   left: {
      flex: 1,
      justifyContent: 'center',
   },
   right: {
      flex: 2,
      justifyContent: 'center'
   },
   alignment: {
      textAlign: 'right',
   }
}

export default Header;