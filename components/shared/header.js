import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
   render() { return (
      <View style={ styles.container }>
         <View style={ styles.left }>
            <Text style={ styles.font }>
               React Maps
            </Text>
         </View>
         <View style={ styles.right }>
            <Text style={{ ...styles.alignment, ...styles.font }}>
               { this.props.label }
            </Text>
         </View>
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: '#6A94E1',
      flexDirection: 'row',
      padding: 13
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
      textShadowRadius: 1,
      textTransform: 'capitalize'
   }
}

export default Header;