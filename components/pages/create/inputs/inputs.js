import React, { Component } from 'react';
import { View } from 'react-native';
import Name from './name';
import Waypoint from './waypoint';

class Inputs extends Component {
   render() { return (
      <View style={ styles.container }>
         <Name
            label={ 'Route Name' }
            update_name={ this.props.update_name }
         />
         <Waypoint
            label={ 'Waypoint' }
            add_waypoint={ this.props.add_waypoint }
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