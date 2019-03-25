import React, { Component } from 'react';
import { Text } from 'react-native';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Table from './table';

class Home extends Component {

   state = {
      header: 'Saved Profiles',
      footer: 'Create Profile',
      profiles: [
         'first',
         'second',
         'third'
      ]
   }

   // ADD ITEM
   add = () => {
      this.setState({
         profiles: [...this.state.profiles, 'foo']
      })
   }

   // REMOVE ITEM
   remove = (id) => {
      this.setState({
         profiles: this.state.profiles.filter((value, index) => index !== id)
      })
   }

   render() { return (
      <>
         <Header
            page={ this.state.header }
            styles={ this.props.styles }
         />
         <Content size={ 15 }>
            <Table
               data={ this.state.profiles }
               remove={ this.remove }
            />
         </Content>
         <Footer size={ 1 }>
            <Text style={ this.props.styles.font }>
               Create Profile
            </Text>
         </Footer>
      </>
   )}
}

export default Home;