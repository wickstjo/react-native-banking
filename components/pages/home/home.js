import React, { Component } from 'react';
import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
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
            styles={ this.props.styles }
         />
         <Content size={ 15 }>
            <Table
               data={ this.state.profiles }
               remove={ this.remove }
            />
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

export default Home;