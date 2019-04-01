import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

class Waypoint extends Component {

   state = {
      waypoint: ''
   }

   input_field = React.createRef();

   add = () => {
      this.props.add_waypoint(this.state.waypoint);
      this.input_field.clear();
      this.update_waypoint('');
   }

   update_waypoint = (text) => {
      this.setState({
         waypoint: text
      })
   }

   render() { return (
      <View style={ styles.container }>
         <TouchableWithoutFeedback onPress={ () => { this.input_field.focus() } }>
            <View style={ styles.input }>
               <View style={ styles.left }>
                  <Text>Waypoint:</Text>
               </View>
               <View style={ styles.right }>
                  <TextInput
                     placeholder={ 'None' }
                     style={ styles.textbox }
                     ref={ component => this.input_field = component }
                     onChangeText={ this.update_waypoint }
                  />
               </View>
            </View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={ this.add }>
            <View style={ styles.button }>
               <Text>Add</Text>
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

export default Waypoint;