import React, { Component } from 'react';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

class Map extends Component {

   state = {
      region: {
         latitude: 64.92410999999999,
         longitude: 25.7481511,
         latitudeDelta: 12,
         longitudeDelta: 12,
      }
   }

   // PRIMARY WAYPOINT
   primary = () => {
      if (this.props.primary.coords !== undefined) {
         return <Marker
            coordinate={ this.props.primary.coords }
            title={ this.props.primary.name }
            pinColor={ 'blue' }
         />
      }
   }

   // SECONDARY WAYPOINTS
   secondary = () => {
      return this.props.waypoints.map((item, index) =>
         <Marker
            key={ index }
            coordinate={ item.coords }
            title={ item.name }
            pinColor={ 'red' }
         />
      )
   }

   // DRAW DIRECTIONAL POLYLINE
   directions = () => {
      let wps = [];
      this.props.waypoints.map(item => wps.push(item.coords))

      return <MapViewDirections
         origin={ this.props.primary.coords }
         destination={ this.props.primary.coords }
         waypoints={ wps }
         apikey={ 'AIzaSyBcbkfxWDiiWg6sjnkWHdsrsW7-bT7tfE8' }
         strokeWidth={ 3 }
         strokeColor={ 'hotpink' }
      />
   }

   render() { return (
      <MapView provider={ PROVIDER_GOOGLE } style={ styles.container } initialRegion={ this.state.region }>
         { this.primary() }
         { this.secondary() }
         { this.directions() }
      </MapView>
   )}
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#84DD84'
   }
}

export default Map;