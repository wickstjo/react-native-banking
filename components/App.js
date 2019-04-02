import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home/home';
import Create from './pages/create/create';
import Profile from './pages/profile/profile';

class App extends Component {
   render() { return (
      <AppContainer />
   )}
}

const MainNavigator = createStackNavigator({
   Home: {
      screen: Home,
      navigationOptions: {
         header: null,
      },
   },
   Create: {
      screen: Create,
      navigationOptions: {
         header: null,
      },
   },
   Profile: {
      screen: Profile,
      navigationOptions: {
         header: null
      }
   },
});

const AppContainer = createAppContainer(MainNavigator);
export default App;