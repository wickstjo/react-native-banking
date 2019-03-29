import React, { Component } from 'react';
import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Map from '../../shared/map';

class Profile extends Component {

   state = {
      header: 'View Profile',
      footer: 'Profile Menu',
   }

   footer_func = () => {
      this.props.navigation.navigate('Home')
      // this.props.navigation.getParam('name')
   }

   render() { return (
      <>
         <Header
            label={ this.state.header }
         />
         <Content>
            <Map />
         </Content>
         <Footer
            label={ this.state.footer }
            func={ this.footer_func }
         />
      </>
   )}
}

export default Profile;