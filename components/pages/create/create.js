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
      name: 'no name',
      waypoints: ['foo', 'bar'],
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

   update_name = (text) => {
      this.setState({
         name: text
      })
   }

   add_waypoint = (value) => {
      this.setState({
         waypoints: [...this.state.waypoints, value]
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
                  func={() => { params.add(this.state.name) }}
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