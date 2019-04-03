import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class Map extends Component {

   state = {
      region: {
         latitude: 64.92410999999999,
         longitude: 25.7481511,
         latitudeDelta: 12,
         longitudeDelta: 12,
      }
   }

   primary = () => {
      if (this.props.primary.coords !== undefined) {
         return <Marker
            coordinate={ this.props.primary.coords }
            title={ this.props.primary.name }
            pinColor={ 'blue' }
         />
      }
   }

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

   render() { return (
      <MapView
         provider={ PROVIDER_GOOGLE }
         style={ styles.container }
         initialRegion={ this.state.region }
      >
         { this.primary() }
         { this.secondary() }
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