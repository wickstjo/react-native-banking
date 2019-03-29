import React, { Component } from 'react';
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

   footer_func = () => {
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
         <Header
            label={ this.state.header }
         />
         <Content>
            <Table
               data={ this.props.profiles }
               remove={ this.props.remove }
               open={ this.open }
            />
         </Content>
         <Footer
            label={ this.state.footer }
            func={ this.footer_func }
         />
      </>
   )}
}

export default Home;