import React, { Component } from 'react';
import { View } from 'react-native';
import Table from '../pages/home/table';

class Content extends Component {
   render() { return (
      <View style={{ ...styles.container, ...{ flex: this.props.size } }}>
         <View style={ styles.innerbody }>
            <Table data={ this.props.data } remove={ this.props.remove } />
         </View>
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: 'white',
   },
   innerbody: {
      padding: 15,
      paddingTop: 10
   }
}

export default Content;