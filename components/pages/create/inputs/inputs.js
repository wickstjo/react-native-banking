import React, { Component } from 'react';
import { View } from 'react-native';
import Name from './name';
import Waypoint from './waypoint';

class Inputs extends Component {
   render() { return (
      <View style={ styles.container }>
         <Name
            label={ 'Route Name' }
            func={ this.props.update_name }
         />
         <Waypoint
            label={ 'Waypoint' }
            func={ this.props.add_waypoint }
         />
      </View>
   )}
}

const styles = {
   container: {
      flex: 1,
      padding: 5
   }
}

export default Inputs;