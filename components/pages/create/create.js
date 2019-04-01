import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';
import Inputs from './inputs/inputs';

import apis from '../../funcs/apis';

class Create extends Component {

   state = {
      name: '',
      waypoints: []
   }

   // UPDATE ROUTE NAME
   update_name = (text) => {
      this.setState({
         name: text
      })
   }

   // ADD WAYPOINT TO ROUTE
   add_waypoint = (address) => {

      // CONVERT ADDRESS TO COORDS WITH API
      apis.query(address).then((response) => {

         // IF SOMETHING IS FOUND, ADD TO STATE
         if (response.data.status !== 'ZERO_RESULTS') {
            this.setState({
               waypoints: [
                  ...this.state.waypoints,
                  [address, response.data.results[0].geometry.location]
               ]
            })

         // OTHERWISE, PROMPT ERROR
         } else {
            ToastAndroid.showWithGravity(
               'No results found!',
               ToastAndroid.SHORT,
               ToastAndroid.CENTER,
            )
         }
      })
   }

   add_route = () => {
      //
   }

   render() {
      return (
         <>
            <Header label={ 'Modify Route' } />
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
   }
}

export default Create;