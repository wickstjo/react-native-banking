import React, { Component } from 'react';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';

class Profile extends Component {

   state = {
      header: 'View Profile',
      footer: 'Profile Menu',
   }

   goto_home = () => {
      this.props.navigation.navigate('Home')
      // this.props.navigation.getParam('name')
   }

   render() { return (
      <>
         <Header label={ this.state.header }/>
         <Content>
            <Map />
         </Content>
         <Footer>
            <Clickable
               label={ 'View Profile' }
               func={ this.goto_home }
            />
         </Footer>
      </>
   )}
}

export default Profile;