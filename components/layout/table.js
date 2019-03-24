import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';

class Table extends Component {
   render() { return (
      <FlatList
         data={ this.props.data }
         keyExtractor={ (item, index) => index.toString() }
         renderItem={
            ({item}) => <Text style={ styles.row }>{ item }</Text>
         }
      />
   )}
}

const styles = {
   row: {
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
   }
}

export default Table;