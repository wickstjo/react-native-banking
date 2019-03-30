import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Row from './row';

class Table extends Component {
   render() { return (
      <View style={ styles.container }>
         <FlatList
            data={ this.props.data }
            keyExtractor={( item, index ) => index.toString() }
            renderItem={
               ({ item, index }) =>
                  <Row
                     label={ item }
                     id={ index }
                     remove_route={ this.props.remove_route }
                     open={ this.props.open }
                  />
            }
         />
      </View>
   )}
}

const styles = {
   container: {
      padding: 5,
      paddingBottom: 0
   }
}

export default Table;