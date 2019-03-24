import React, { Component } from 'react';
import { View } from 'react-native';
import Table from './table';

class Content extends Component {
   render() { return (
      <View style={ styles.container }>
         <View style={ styles.innerbody }>
            <Table data={ this.props.data } />
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
      padding: 15,
      paddingTop: 10
   }
}

export default Content;