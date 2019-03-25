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

   render() { return (
      <>
         <Header
            label={ this.state.header }
            styles={ this.props.styles }
         />
         <Content size={ 15 }>
            <Map />
         </Content>
         <Footer size={ 1 }>
            <Clickable
               styles={ this.props.styles.font }
               func={ this.add }
               label={ this.state.footer }
            />
         </Footer>
      </>
   )}
}

export default Profile;