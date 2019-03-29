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
      footer_secondary: 'Cancel',
      start: 'none',
      destination: 'none',
   }

   footer_primary = () => {
      this.props.navigation.navigate(
         'Profile',
         { name: 'Jane' }
      )
   }

   footer_secondary = () => {
      this.props.navigation.navigate('Home')
   }

   render() { return (
      <>
         <Header label={ this.state.header } />
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
            label={ this.state.footer_secondary }
            func={ this.footer_secondary }
            secondary_label={ this.state.footer }
            secondary_func={ this.props.add }
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