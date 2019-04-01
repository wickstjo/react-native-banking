import React, { Component } from 'react';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Table from './table/table';

class Home extends Component {

   // MAKE PARAMS GLOBALLY AVAILABLE
   params = this.props.navigation.state.params;

   // GOTO PROFILE SCREEN
   goto_profile = (id, header) => {
      this.props.navigation.navigate(
         'Profile',
         { name: header }
      )
   }

   // GOTO CREATE SCREEN
   goto_create = () => {
      this.props.navigation.navigate('Create')
   }

   render() { return (
      <>
         <Header label={ 'Saved Profiles' }/>
         <Content>
            <Table
               data={ this.params.routes }
               remove={ this.params.remove }
               goto_profile={ this.goto_profile }
            />
         </Content>
         <Footer>
            <Clickable
               label={ 'Create Profile' }
               func={ this.goto_create }
            />
         </Footer>
      </>
   )}
}

export default Home;