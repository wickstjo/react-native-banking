import React, { Component } from 'react';
import { BackHandler } from 'react-native';

// UI
import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';

class Profile extends Component {

   // MAKE PARAMS GLOBALLY AVAILABLE
   params = this.props.navigation.state.params;

   // OVERRIDE DEFAULT BACK BUTTON
   componentDidMount() {
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
         this.goto_home();
         return true;
      });
   }

   // REMOVE BACK BUTTON OVERRIDE
   componentWillUnmount() {
      this.backHandler.remove();
   }

   // GOTO HOME SCREEN
   goto_home = () => {
      this.props.navigation.navigate('Home')
   }

   title = () => {
      const km = (this.params.route.distance / 1000).toFixed(1);
      const hrs = ((this.params.route.duration / 60) / 60).toFixed(1);
      return this.params.route.name + ' (' + km + ' km, ' + hrs + ' hrs)';
   }

   render() { return (
      <>
         <Header
            label={ this.title() }
         />
         <Content>
            <Map
               waypoints={ this.params.route.waypoints }
               primary={ this.params.route.primary }
               polyline={ this.params.route.polyline }
            />
         </Content>
         <Footer>
            <Clickable
               label={ 'Main Menu' }
               func={ this.goto_home }
            />
         </Footer>
      </>
   )}
}

export default Profile;