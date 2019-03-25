import React, { Component } from 'react';
import Header from '../../layout/header';
import Content from '../../layout/content';
import Footer from '../../layout/footer';

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
         />
         <Content
            size={ 15 }
            data={ this.state.profiles }
            func={ this.remove }
         />
         <Footer
            size={ 1 }
            add={ this.add }
            text={ this.state.footer }
            func={ this.add }
         />
      </>
   )}
}

export default Home;