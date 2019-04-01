import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Create from './pages/create/create';
import storage from './funcs/storage';
import prompt from './funcs/prompt';

class App extends Component {

   state = {
      routes: []
   }

   // FETCH ROUTES FROM STORAGE
   componentWillMount() {
      storage.routes().then((response) => {

         // PUSH ROUTE TO STATE
         this.setState({
            routes: JSON.parse(response).routes
         })
      });
   }

   // ADD ROUTE
   add = (name, waypoints) => {

      // AWAIT STATE UPDATE BEFORE RESOLVING
      new Promise((resolve, reject) => {
         this.setState({
            routes: [
               ...this.state.routes,
               [name, waypoints]
            ]
         })

         resolve();

      // THEN REWRITE STORAGE & PROMPT SUCCESS
      }).then(() => {
         storage.save(this.state.routes)
         prompt('Route "' + name + '" added!')
      });
   }

   // REMOVE ROUTE
   remove = (id) => {

      // FISH OUT THE ROUTE NAME FOR LOGGING
      const name = this.state.routes[id][0];

      // AWAIT STATE UPDATE BEFORE RESOLVING
      new Promise((resolve, reject) => {
         this.setState({
            routes: this.state.routes.filter((value, index) => index !== id)
         })

         resolve();

      // THEN REWRITE STORAGE & PROMPT SUCCESS
      }).then(() => {
         storage.save(this.state.routes)
         prompt('Route "' + name + '" removed!')
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