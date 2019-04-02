import React, { Component } from 'react';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';

class Profile extends Component {

   // MAKE PARAMS GLOBALLY AVAILABLE
   params = this.props.navigation.state.params;

   // GOTO HOME SCREEN
   goto_home = () => {
      this.props.navigation.navigate('Home')
   }

   render() { return (
      <>
         <Header
            label={ this.params.name }
         />
         <Content>
            <Map />
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