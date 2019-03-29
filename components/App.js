import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Create from './pages/create/create';
import route from './funcs/route';

class App extends Component {

   state = {
      profiles: [
         'first',
         'second',
         'third'
      ]
   }

   render() { return (
      <AppContainer />
   )}
}

const MainNavigator = createStackNavigator({
   Home: {
      screen: Home,
      navigationOptions: {
         header: null
      }
   },
   Profile: {
      screen: Profile,
      navigationOptions: {
         header: null
      }
   },
   Create: {
      screen: Create,
      navigationOptions: {
         header: null
      }
   },
});

const AppContainer = createAppContainer(MainNavigator);

export default App;