import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';
import Selections from './selections';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Create extends Component {

   state = {
      header: 'Create Profile',
      footer: 'Create',
      start: 'none',
      destination: 'none',
   }

   render() { return (
      <>
         <Header
            label={ this.state.header }
            styles={ this.props.styles }
         />
         <Content size={ 15 }>
            <View style={ styles.container }>
               <View style={ styles.upper }>
                  <Selections
                     start={ this.state.start }
                     destination={ this.state.destination }
                     update_start ={
                        (value) => { this.setState({ start: value }) }
                     }
                     update_destination ={
                        (value) => { this.setState({ destination: value }) }
                     }
                  />
               </View>
               <View style={ styles.lower }>
               <View style={foos.container}>
                  <MapView
                     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                     style={foos.map}
                     region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                     }}
                  >
                  </MapView>
               </View>
               </View>
            </View>
         </Content>
         <Footer size={ 1 }>
            <Clickable
               styles={ this.props.styles.font }
               func={ this.add }
               label={ this.state.footer }
            />
         </Footer>
      </>
   )}
}

const styles = {
   container: {
      flex: 1
   },
   upper: {
      flex: 1
   },
   lower: {
      flex: 6
   }
}

const foos = StyleSheet.create({
   container: {
     ...StyleSheet.absoluteFillObject,
     height: 400,
     width: 400,
     justifyContent: 'flex-end',
     alignItems: 'center',
   },
   map: {
     ...StyleSheet.absoluteFillObject,
   },
  });

export default Create;