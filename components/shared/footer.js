import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

class Footer extends Component {

   secondary = () => {
      if (this.props.secondary_label !== undefined) {
         return <Block
            func={ this.props.secondary_func }
            label={ this.props.secondary_label }
            styles={ styles.secondary } 
         />
      }
   }

   render() { return (
      <View style={ styles.container }>
         <Block
            func={ this.props.func }
            label={ this.props.label }
         />
         { this.secondary() }
      </View>
   )}
}

function Block(props) {
   return (
      <TouchableWithoutFeedback onPress={ props.func }>
         <View style={{ ...styles.clickable, ...props.styles }}>
            <Text style={ styles.font }>
               { props.label }
            </Text>
         </View>
      </TouchableWithoutFeedback>
   )
}

const styles = {
   container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#6A94E1',
      borderTopWidth: 1,
      borderTopColor: 'white',
   },
   clickable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   secondary: {
      borderLeftWidth: 1,
      borderLeftColor: 'white',
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