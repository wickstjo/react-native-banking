import React, { Component } from 'react';
import { View } from 'react-native';
import Table from './table';

class Create extends Component {
   render() { return (
      <View style={ styles.container }>
         <Table primary={ `Start` } secondary={ this.props.start } styles={ styles.upper } />
         <Table primary={ `Destination` } secondary={ this.props.destination } />
      </View>
   )}
}

const styles = {
   container: {
      flex: 1,
      padding: 5
   },
   upper: {
      marginBottom: 5
   }
}

export default Create;