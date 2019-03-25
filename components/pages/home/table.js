import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Action from './action';

class Table extends Component {
   render() { return (
      <FlatList
         data={ this.props.data }
         keyExtractor={ (item, index) => index.toString() }
         renderItem={
            ({item, index}) =>
               <Row
                  style={ styles }
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
      <View style={ styles.container }>
         <Action
            func={ props.remove }
            id={ props.id }
            text={ props.header.toUpperCase() }
            primary={ styles.left }
         />
         <Action
            func={ props.remove }
            id={ props.id }
            text={ `Remove` }
            primary={ styles.right }
            secondary={ styles.text }
         />
      </View>
   )
}

const styles = {
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

export default Table;