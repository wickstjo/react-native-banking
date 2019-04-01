import React, { Component } from 'react';
import { YellowBox, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Create from './pages/create/create';
import storage from './funcs/storage';

class App extends Component {

   state = {
      routes: []
   }

   componentWillMount() {
      storage.routes().then((response) => {
         this.setState({
            routes: JSON.parse(response).routes
         })
      });
   }

   add = (name, waypoints) => {
      new Promise((resolve, reject) => {
         this.setState({
            routes: [
               ...this.state.routes,
               [name, waypoints]
            ]
         })
         resolve();

      }).then(() => {
         storage.save(this.state.routes);
      });
   }

   remove = (id, header) => {
      new Promise((resolve, reject) => {
         this.setState({
            routes: this.state.routes.filter((value, index) => index !== id)
         })
         resolve();

      }).then(() => {
         storage.save(this.state.routes);
      });
   }

   render() {
      const MainNavigator = createStackNavigator({
         Create: {
            screen: Create,
            navigationOptions: {
               header: null,
            },
            params: {
               add: this.add
            }
         },
         Home: {
            screen: Home,
            navigationOptions: {
               header: null,
            },
            params: {
               routes: this.state.routes,
               remove: this.remove
            }
         },
         Profile: {
            screen: Profile,
            navigationOptions: {
               header: null
            }
         },
      });

      YellowBox.ignoreWarnings(['ViewPagerAndroid', 'Slider', 'Async Storage']);
      const AppContainer = createAppContainer(MainNavigator);
      return ( <AppContainer /> )
   }
}

export default App;