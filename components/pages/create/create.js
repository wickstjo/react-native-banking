import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Map from '../../shared/map';
import Selections from './selections';

class Create extends Component {

   state = {
      header: 'Create Profile',
      footer: 'Create',
      start: 'none',
      destination: 'none',
   }

   render() { return (
      <>
         <Header
            label={ this.state.header }
            styles={ this.props.styles }
         />
         <Content size={ 15 }>
            <View style={ styles.container }>
               <View style={ styles.upper }>
                  <Selections
                     start={ this.state.start }
                     destination={ this.state.destination }
                  />
               </View>
               <View style={ styles.lower }>
                  <Map />
               </View>
            </View>
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

const styles = {
   container: {
      flex: 1
   },
   upper: {
      flex: 1
   },
   lower: {
      flex: 6
   }
}

export default Create;