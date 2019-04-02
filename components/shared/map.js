import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// <MapView provider={ PROVIDER_GOOGLE } style={ styles.container } region={ this.props.coords } />

class Map extends Component {

   vars = () => {
      if (this.props.waypoints !== undefined) {
         return this.props.waypoints.map((item, index) =>
            <View key={ index }>
               <Text>
                  { item[0] }
               </Text>
               <Text>
                  { JSON.stringify(item[1]) }
               </Text>
            </View>
         )
      }
   }

   render() { return (
      <View style={ styles.container }>
         <View>
            { this.vars() }
         </View>
      </View>
   )}
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#84DD84'
   }
}

export default Map;