import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Button from './button';

class Table extends Component {
   render() { return (
      <FlatList
         data={ this.props.data }
         keyExtractor={ (item, index) => index.toString() }
         renderItem={
            ({item, index}) =>
               <Row
                  style={ styles.row }
                  header={ item }
                  id={ index }
                  remove={ this.props.remove }
               />
         }
      />
   )}
}

function Row(props) {
   return (
      <View style={ styles.row.container }>
         <Button
            func={ props.remove }
            id={ props.id }
            text={ props.header.toUpperCase() }
            primary={ styles.row.left }
         />
         <Button
            func={ props.remove }
            id={ props.id }
            text={ `Remove` }
            primary={ styles.row.right }
            secondary={ styles.row.text }
         />
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