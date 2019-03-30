import React, { Component } from 'react';
import { YellowBox } from 'react-native';
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

   // ADD ITEM
   add = (id, header) => {
      this.setState({
         profiles: [...this.state.profiles, 'foo']
      })
   }

   // REMOVE ITEM
   remove = (id, header) => {
      this.setState({
         profiles: this.state.profiles.filter((value, index) => index !== id)
      })
   }

   MainNavigator = createStackNavigator({
      Create: {
         screen: (props) => {
            return <Create
               navigation={ props.navigation }
               add={ this.add }
               name={ '' }
               waypoints={ [] }
            />
         },
         navigationOptions: {
            header: null
         }
      },
      Home: {
         screen: (props) => {
            return <Home
               profiles={ this.state.profiles }
               navigation={ props.navigation }
               remove={ this.remove }
            />
         },
         navigationOptions: {
            header: null
         }
      },
      Profile: {
         screen: Profile,
         navigationOptions: {
            header: null
         }
      }
   });

   render() {
      YellowBox.ignoreWarnings(['ViewPagerAndroid', 'Slider']);
      const AppContainer = createAppContainer(this.MainNavigator);
      
   return (
      <AppContainer />
   )}
}

export default App;