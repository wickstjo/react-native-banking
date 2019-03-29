import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Map from '../../shared/map';
import Selections from './selections';

class Create extends Component {

   state = {
      header: 'Create Profile',
      footer: 'Create',
      start: 'none',
      destination: 'none',
   }

   footer_func = () => {
      this.props.navigation.navigate(
         'Profile',
         { name: 'Jane' }
      )
   }

   render() { return (
      <>
         <Header
            label={ this.state.header }
         />
         <Content>
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
                  <Map
                     coords={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                     }}
                  />
               </View>
            </View>
         </Content>
         <Footer
            label={ this.state.footer }
            func={ this.footer_func }
         />
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
      flex: 5
   }
}

export default Create;