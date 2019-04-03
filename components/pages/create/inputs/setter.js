import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

class Setter extends Component {

   state = {
      value: ''
   }

   // INPUT REFERENCE
   input_field = React.createRef();

   // UPDATE VALUE
   update = (text) => {
      this.setState({
         value: text
      })
   }

   // EXECUTE FUNC
   execute = () => {
      this.props.func(
         this.state.value,
         this.reset
      )
   }

   // RESET FIELD & STATE
   reset = () => {
      this.update('');
   }

   // FIGURE OUT PLACEHOLDER
   get_placeholder = () => {
      if (this.props.placeholder === undefined || this.props.placeholder === '') {
         return 'None'
      } else {
         return this.props.placeholder;
      }
   }

   render() { return (
      <View style={ styles.container }>
         <TouchableWithoutFeedback onPress={() => { this.input_field.focus() }}>
            <View style={ styles.input }>
               <View style={ styles.left }>
                  <Text>{ this.props.label }:</Text>
               </View>
               <View style={ styles.right }>
                  <TextInput
                     placeholder={ this.get_placeholder() }
                     value={ this.state.value }
                     style={ styles.textbox }
                     ref={ component => this.input_field = component }
                     onChangeText={ this.update }
                  />
               </View>
            </View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={ this.execute }>
            <View style={ styles.button }>
               <Text>{ this.props.button }</Text>
            </View>
         </TouchableWithoutFeedback>
      </View>
   )}
}

const styles = {
   container: {
      marginTop: 5,
      flex: 1,
      flexDirection: 'row'
   },
   input: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'lightgray',
      borderBottomColor: '#BCBCBC',
      borderBottomWidth: 1,
      paddingLeft: 10,
      paddingRight: 10
   },
   button: {
      backgroundColor: '#F8A7E4',
      borderBottomColor: '#DC6FC1',
      borderBottomWidth: 1,
      marginLeft: 5,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
   },
   left: {
      justifyContent: 'center',
   },
   right: {
      justifyContent: 'center',
      flex: 1,
   },
   textbox: {
      padding: 0,
      textAlign: 'right'
   }
}

export default Setter;