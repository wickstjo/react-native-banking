import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';
import Inputs from './inputs/inputs';

import prompt from '../../funcs/prompt';
import apis from '../../funcs/apis';

class Create extends Component {

   state = {
      name: '',
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

   // ADD WAYPOINT
   add_waypoint = (address) => {

      // IF SOMETHING WAS WRITTEN
      if (address !== '') {

         // CONVERT ADDRESS TO COORDS WITH API
         apis.query(address).then((response) => {

            // IF SOMETHING IS FOUND
            if (response.data.status !== 'ZERO_RESULTS') {

               // ADD TO STATE
               this.setState({
                  waypoints: [
                     ...this.state.waypoints,
                     [address, response.data.results[0].geometry.location]
                  ]
               })

               // PROMPT SUCCESS
               prompt('Waypoint added!')

            // OTHERWISE, PROMPT ERROR
            } else { prompt('API returned nothing!') }
         })
      
      // OTHERWISE, PROMPT ERROR
      } else { prompt('Nothing was specified!') }
   }

   // ADD ROUTE TO STORAGE
   add_route = () => {

      // IF A NAME WAS GIVEN
      if (this.state.name !== '') {

         // IF THERE ARE WAYPOINTS
         if (this.state.waypoints.length !== 0) {

            // ADD ROUTE
            this.params.add(
               this.state.name,
               this.state.waypoints
            )

            // RESET FIELDS
            this.setState({
               name: '',
               waypoints: []
            })

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
                     name={ this.state.name }
                     update_name={ this.update_name }
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
      flex: 5
   },
   cancel: {
      backgroundColor: '#E25D5D'
   }
}

export default Create;