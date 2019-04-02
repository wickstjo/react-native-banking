import React, { Component } from 'react';
import { View } from 'react-native';
import Block from './block';

class Row extends Component {
   render() { return (
      <View style={ styles.container }>
         <Block
            label={ this.props.label }
            styles={ styles.header }
            func={ this.props.goto_profile }
            id={ this.props.id }
         />
         <Block
            label={ 'Remove' }
            styles={ styles.secondary }
            func={ this.props.remove }
            id={ this.props.id }
         />
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: 'lightgray',
      borderBottomColor: '#BCBCBC',
      borderBottomWidth: 1,
      flex: 1,
      flexDirection: 'row',
      marginBottom: 5,
   },
   header: {
      flex: 1,
      padding: 12,
   },
   secondary: {
      padding: 12,
   }
}

export default Row;