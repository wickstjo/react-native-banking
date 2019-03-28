import React, { Component } from 'react';
import { View } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// <MapView provider={ PROVIDER_GOOGLE } style={ styles.container } region={ this.props.coords } />

class Map extends Component {
   render() { return (
      <View
         style={ styles.container }
      />
   )}
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#84DD84'
   }
}

export default Map;