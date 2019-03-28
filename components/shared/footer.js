import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

class Footer extends Component {
   render() { return (
      <View style={ styles.container }>
         <TouchableWithoutFeedback onPress={ this.props.func }>
            <View style={ styles.clickable }>
               <Text style={ styles.font }>
                  { this.props.label }
               </Text>
            </View>
         </TouchableWithoutFeedback>
      </View>
   )}
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#6A94E1',
      borderTopWidth: 1,
      borderTopColor: '#4A94D2',
   },
   clickable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
      textShadowRadius: 1
   }
}

export default Footer;