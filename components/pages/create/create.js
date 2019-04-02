import React, { Component } from 'react';
import { View } from 'react-native';

// UI
import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';
import Inputs from './inputs/inputs';

// FUNCS
import prompt from '../../funcs/prompt';
import apis from '../../funcs/apis';

class Create extends Component {

   state = {
      name: '',
      primary: {},
      waypoints: []
   }

   // MAKE PARAMS GLOBALLY AVAILABLE
   params = this.props.navigation.state.params;

   // UPDATE ROUTE NAME
   update_name = (text) => {
      this.setState({
         name: text
      })
   }

   // SET PRIMARY WAYPOINT
   set_primary = (address, field) => {
      
      // IF SOMETHING WAS WRITTEN
      if (address !== '') {

         // CONVERT ADDRESS TO COORDS WITH API
         apis.query(address).then((response) => {

            // IF SOMETHING IS FOUND
            if (response.data.status !== 'ZERO_RESULTS') {
               this.setState({
                  primary: {
                     name: address,
                     coords: response.data.results[0].geometry.location
                  }
               })

               // PROMPT SUCCESS
               prompt('Primary waypoint set!');

            // OTHERWISE, PROMPT ERROR, RESET THE FIELD & RESET STATE PROP
            } else {
               prompt('API returned nothing!');
               field.clear();                            // MAKE BACKTRACKABLE RESET FUNC IN FIELD CLASS?

               this.setState({
                  primary: {}
               })
            }
         })
      }
   }

   // ADD WAYPOINT
   add_waypoint = (address, field) => {

      // IF SOMETHING WAS WRITTEN
      if (address !== '') {

         // CONVERT ADDRESS TO COORDS WITH API
         apis.query(address).then((response) => {

            // IF SOMETHING IS FOUND
            if (response.data.status !== 'ZERO_RESULTS') {

               // CONSTRUCT OBJECT
               let waypoint = {
                  name: address,
                  coords: response.data.results[0].geometry.location
               };

               // ADD TO STATE
               this.setState({
                  waypoints: [...this.state.waypoints, waypoint]
               })

               // PROMPT SUCCESS
               prompt('Waypoint "' + address + '" added!')

            // OTHERWISE, PROMPT ERROR
            } else { prompt('API returned nothing!') }
         })
      
      // OTHERWISE, PROMPT ERROR
      } else { prompt('Nothing was specified!') }

      // IN ANY CASE, CLEAR THE FIELD
      field.clear();
   }

   // ADD ROUTE TO STORAGE
   add_route = () => {

      // IF A NAME WAS GIVEN
      if (this.state.name !== '') {

         // IF THERE ARE WAYPOINTS
         if (this.state.waypoints.length !== 0) {

            // IF THE PRIMARY WAYPOINT HAS BEEN SET
            if (Object.keys(this.state.primary).length !== 0) {

                // ADD IT TO STORAGE
               this.params.add(this.state);

               // RESET FIELDS
               this.setState({
                  name: '',
                  primary: {},
                  waypoints: []
               })

            // PRIMARY ERROR
            } else { prompt('Route requires a primary waypoint!') }

         // OTHERWISE, PROMPT ERROR
         } else { prompt('Route requires waypoints!') }

      // OTHERWISE, PROMPT ERROR
      } else { prompt('Route requires a name!') }
   }

   // GOTO HOME SCREEN
   goto_home = () => {

      // RESET FIELDS
      this.setState({
         name: '',
         primary: {},
         waypoints: []
      })

      // CHANGE SCREEN
      this.props.navigation.navigate('Home')
   }

   render() { return (
      <>
         <Header label={ 'Create Route' } />
         <Content>
            <View style={ styles.container }>
               <View style={ styles.upper }>
                  <Inputs
                     update_name={ this.update_name }
                     set_primary={ this.set_primary }
                     add_waypoint={ this.add_waypoint }
                  />
               </View>
               <View style={ styles.lower }>
                  <Map
                     waypoints={ this.state.waypoints }
                     name={ this.state.name }
                  />
               </View>
            </View>
         </Content>
         <Footer>
            <Clickable
               label={ 'Cancel' }
               func={ this.goto_home }
               styles={ styles.cancel }
            />
            <Clickable
               label={ 'Save' }
               func={ this.add_route }
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
      flex: 3
   },
   cancel: {
      backgroundColor: '#E25D5D'
   }
}

export default Create;