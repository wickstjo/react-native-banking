import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Create from './pages/create/create';
import storage from './funcs/storage';

class App extends Component {

   state = {
      routes: storage.get_profiles()
   }

   add_route = () => {
      this.setState({
         routes: [...this.state.routes, 'foo']
      })
   }

   remove_route = (id, header) => {
      this.setState({
         routes: this.state.routes.filter((value, index) => index !== id)
      })
   }

   render() {  
      const MainNavigator = createStackNavigator({
         Home: {
            screen: (props) => {
               return <Home
                  navigation={ props.navigation }
                  routes={ this.state.routes }
                  remove_route={ this.remove_route }
               />
            },
            navigationOptions: {
               header: null,
            },
            params: {
               product: 'Playstation'
            }
         },
         Create: {
            screen: (props) => {
               return <Create
                  navigation={ props.navigation }
                  add_route={ this.add_route }
               />
            },
            navigationOptions: {
               header: null,
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
      return ( <AppContainer />)
   }
}

export default App;