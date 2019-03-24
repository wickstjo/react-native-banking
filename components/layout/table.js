import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

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
         <View style={ styles.row.left }>
            <Text>{ props.header } </Text>
         </View>
         <View style={ styles.row.right }>
            <Text style={ styles.row.text } onPress={ () => { props.remove(props.id) } }>Remove</Text>
         </View>
      </View>
   )
}

const styles = {
   row: {
      container: {
         padding: 5,
         borderBottomWidth: 1,
         borderBottomColor: 'gray',
         flex: 1,
         flexDirection: 'row'
      },
      left: {
         flex: 2
      },
      right: {
         flex: 1,
      },
      text: {
         textAlign: 'right'
      }
   }
}

export default Table;