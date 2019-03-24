import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

class Content extends Component {
   render() { return (
      <View style={ styles.container }>
         <View style={ styles.innerbody }>
            <FlatList
               data={ this.props.list }
               keyExtractor={ (item, index) => index.toString() }
               renderItem={
                  ({item}) => <Text>{ item }</Text>
               }
            />
         </View>
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: 'white',
      flex: 15
   },
   innerbody: {
      padding: 15
   }
}

export default Content;