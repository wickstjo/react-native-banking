import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

class Table extends Component {

   constructor(props) {
      super(props);

      this.myRef = React.createRef();
   }

   render() { return (
      <TouchableWithoutFeedback onPress={ () => { this.myRef.focus() } }>
         <View style={{ ...styles.container, ...this.props.styles }}>
            <View style={ styles.row }>
               <Text style={ styles.left }>{ this.props.primary }:</Text>
               <View style={ styles.right }>
                  <TextInput
                     ref={ component => this.myRef = component }
                     placeholder={ `None` }
                     style={ styles.input }
                  />
               </View>
            </View>
         </View>
      </TouchableWithoutFeedback>
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
      paddingRight: 10,
   },
   input: {
      flex: 1,
      padding: 0,
      textAlign: 'right'
   }
}

export default Table;