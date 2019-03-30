import React, { Component } from 'react';
import { Alert } from 'react-native';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Table from './table/table';

class Home extends Component {

   state = {
      profiles: [
         'First',
         'Second',
         'Third',
      ]
   }

   // REMOVE ITEM
   open = (id, header) => {
      this.props.navigation.navigate(
         'Profile',
         { name: header }
      )
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

   render() {
      const { params } = this.props.navigation.state;
      Alert.alert(params.product)
      return (
      <>
         <Header label={ 'Saved Profiles' }/>
         <Content>
            <Table
               data={ this.props.routes }
               remove_route={ this.props.remove_route }
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