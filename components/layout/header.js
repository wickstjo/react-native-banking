import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
   render() { return (
      <View style={ styles.container }>
         <View style={ styles.innerbody }>
            <Text style={ styles.text }>
               { this.props.text }
            </Text>
         </View>
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: '#6A94E1',
      flex: 1
   },
   innerbody: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 12
   },
   text: {
      fontSize: 15,
      fontFamily: 'verdana',
      color: 'white',
      textShadowColor: '#0E375C',
      textShadowOffset: {
         width: 1,
         height: 1
      },
      textShadowRadius: 1
   }
}

export default Header;