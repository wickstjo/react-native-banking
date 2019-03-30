import React, { Component } from 'react';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Table from './table';

class Home extends Component {

   state = {
      profiles: [
         'first',
         'second',
         'third'
      ]
   }

   // REMOVE ITEM
   remove = (id, header) => {
      this.setState({
         profiles: this.state.profiles.filter((value, index) => index !== id)
      })
   }

   goto_create = () => {
      this.props.navigation.navigate('Create')
   }

   // REMOVE ITEM
   open = (id, header) => {
      this.props.navigation.navigate(
         'Profile',
         { name: header }
      )
   }

   render() { return (
      <>
         <Header label={ 'Saved Profiles' }/>
         <Content>
            <Table
               data={ this.props.profiles }
               remove={ this.props.remove }
               open={ this.open }
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