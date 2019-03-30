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

   goto_profile = () => {
      this.props.navigation.navigate(
         'Profile',
         { name: 'Jane' }
      )
   }

   goto_home = () => {
      this.props.navigation.navigate('Home')
   }

   update_name = (value) => {
      this.setState({
         name: value
      })
   }

   render() {
      const { params } = this.props.navigation.state;
      return (
         <>
            <Header label={ 'Modify Route' } />
            <Content>
               <View style={ styles.container }>
                  <View style={ styles.upper }>
                     <Inputs
                        update_name={ this.update_name }
                        add_waypoint={ params.add }
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
                  func={ this.goto_home }
               />
               <Clickable
                  label={ 'Save' }
                  func={ params.add }
               />
            </Footer>
         </>
      )
   }
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