import React, { Component } from 'react';
import { YellowBox, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Create from './pages/create/create';
import storage from './funcs/storage';

class App extends Component {

   state = {
      routes: storage.get_profiles()
   }

   add = () => {
      this.setState({
         routes: [...this.state.routes, 'foo']
      })
   }

   remove = (id, header) => {
      this.setState({
         routes: this.state.routes.filter((value, index) => index !== id)
      })
   }

   render() {  
      const MainNavigator = createStackNavigator({
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
         Create: {
            screen: Create,
            navigationOptions: {
               header: null,
            },
            params: {
               add: this.add
            }
         },
         Profile: {
            screen: Profile,
            navigationOptions: {
               header: null
            }
         }
      });

      YellowBox.ignoreWarnings(['ViewPagerAndroid', 'Slider']);
      const AppContainer = createAppContainer(MainNavigator);
      return ( <AppContainer /> )
   }
}

export default App;