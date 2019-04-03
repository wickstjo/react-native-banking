import React, { Component } from 'react';
import { View } from 'react-native';
import Field from './field';
import Setter from './setter';

class Inputs extends Component {
   render() { return (
      <View style={ styles.container }>
         <Field
            label={ 'Route Name' }
            func={ this.props.update_name }
         />
         <Setter
            label={ 'Primary Waypoint' }
            button={ 'Set' }
            func={ this.props.set_primary }
            placeholder={ this.props.primary_placeholder }
         />
         <Setter
            label={ 'Waypoint' }
            button={ 'Add' }
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