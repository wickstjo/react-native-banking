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
                     label={ item[0] }
                     id={ index }
                     remove={ this.props.remove }
                     goto_profile={ this.props.goto_profile }
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