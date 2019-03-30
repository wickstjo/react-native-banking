import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';
import Inputs from './inputs/inputs';

class Create extends Component {

   state = {
      name: this.props.name,
      waypoints: this.props.waypoints,
   }

   // ADD ITEM
   add = (id, header) => {
      this.setState({
         profiles: [...this.state.profiles, 'foo']
      })
   }

   primary = () => {
      this.props.navigation.navigate(
         'Profile',
         { name: 'Jane' }
      )
   }

   secondary = () => {
      this.props.navigation.navigate('Home')
   }

   add = () => {
      //this.props.navigation.navigate('Home')
      this.props.storage.add_profile('profile')
   }

   update_name = (value) => {
      this.setState({
         name: value
      })
   }

   add_waypoint = (value) => {
      this.setState({
         waypoints: [...this.state.waypoints, value]
      })
   }

   render() { return (
      <>
         <Header label={ 'Modify Route' } />
         <Content>
            <View style={ styles.container }>
               <View style={ styles.upper }>
                  <Inputs
                     update_name={ this.update_name }
                     add_waypoint={ this.add_waypoint }
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
         <Footer>
            <Clickable
               label={ 'Cancel' }
               func={ this.secondary }
            />
            <Clickable
               label={ 'Save' }
               func={ this.props.add_route }
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
      flex: 5
   }
}

export default Create;