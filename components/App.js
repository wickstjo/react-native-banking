import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Create from './pages/create/create';
import route from './funcs/route';

class App extends Component {
   render() { return (
      <AppContainer />
   )}
}

const MainNavigator = createStackNavigator({
   Home: {
      screen: Home,
      navigationOptions: {
         title: 'Home',
         header: null
      }
   },
   Profile: {
      screen: Profile,
      navigationOptions: {
         title: 'Profile',
         header: null
      }
   },
   Create: {
      screen: Create,
      navigationOptions: {
         title: 'Create',
         header: null
      }
   },
});

const AppContainer = createAppContainer(MainNavigator);

export default App;