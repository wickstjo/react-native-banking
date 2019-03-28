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
            label={ this.state.header }
         />
         <Content>
            <Table
               data={ this.state.profiles }
               remove={ this.remove }
            />
         </Content>
         <Footer
            label={ this.state.footer }
            func={ this.add }
         />
      </>
   )}
}

export default Home;