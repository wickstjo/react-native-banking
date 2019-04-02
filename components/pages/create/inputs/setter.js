import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

class Setter extends Component {

   state = {
      value: ''
   }

   // INPUT REFERENCE
   input_field = React.createRef();

   // UPDATE FIELD VALUE
   update_value = (text) => {
      this.setState({
         value: text
      })
   }

   // EXECUTE FUNC
   execute = () => {
      this.props.func(
         this.state.value,
         this.input_field
      )
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
                     placeholder={ 'None' }
                     style={ styles.textbox }
                     ref={ component => this.input_field = component }
                     onChangeText={ this.update_value }
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