import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Create extends Component {

   state = {
      header: 'Create Profile',
      footer: 'Create',
      start: 'none',
      destination: 'none',
   }

   render() { return (
      <MapView
         provider={ PROVIDER_GOOGLE }
         style={ styles.container }
         region={ this.props.coords }
      />
   )}
}

const styles = {
   container: {
      flex: 1
   }
}

export default Create;