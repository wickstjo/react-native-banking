import React, { Component } from 'react';
import { Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';

class Table extends Component {
   render() { return (
      <FlatList
         data={ this.props.data }
         keyExtractor={ (item, index) => index.toString() }
         renderItem={
            ({item, index}) => <Row style={ styles.row } header={ item } id={ index } remove={ this.props.remove } />
         }
      />
   )}
}

function Row(props) {
   return (
      <View style={ styles.row.container }>
         <TouchableWithoutFeedback>
            <View style={ styles.row.left }>
               <Text>{ props.header }</Text>
            </View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={ () => { props.remove(props.id) } }>
            <View style={ styles.row.right }>
               <Text style={ styles.row.text }>Remove</Text>
            </View>
         </TouchableWithoutFeedback>
      </View>
   )
}

const styles = {
   row: {
      container: {
         borderBottomWidth: 1,
         borderBottomColor: 'gray',
         flex: 1,
         flexDirection: 'row'
      },
      left: {
         flex: 2,
         padding: 5,
      },
      right: {
         flex: 1,
         padding: 5,
      },
      text: {
         textAlign: 'right'
      }
   }
}

export default Table;