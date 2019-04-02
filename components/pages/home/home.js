import React, { Component } from 'react';

// UI
import Header from '../../shared/header';
import Content from '../../shared/content';
import Footer from '../../shared/footer';
import Clickable from '../../shared/clickable';
import Table from './table/table';

// FUNCS
import storage from '../../funcs/storage';
import prompt from '../../funcs/prompt';

class Home extends Component {

   state = {
      routes: {}
   }

   // FETCH ROUTES FROM STORAGE
   componentWillMount() {
      storage.routes().then((response) => {

         // PUSH ROUTE TO STATE
         this.setState({
            routes: JSON.parse(response)
         })
      });
   }

   // ADD ROUTE
   add = (name, route) => {

      // AWAIT STATE UPDATE BEFORE RESOLVING
      new Promise((resolve, reject) => {
         this.setState({
            routes: {
               ...this.state.routes,
               ...route
            }
         })

         resolve();

      // THEN REWRITE STORAGE & PROMPT SUCCESS
      }).then(() => {
         storage.save(this.state.routes);
         prompt('Route "' + name + '" added!');

         // OPEN PROFILE SCREEN
         this.goto_profile(name);
      });
   }

   // REMOVE ROUTE
   remove = (name) => {

      // TAKE SNAPSHOT & DELETE PROPERTY FROM ROUTES
      let routes = this.state.routes;
      delete routes[name];

      // AWAIT STATE UPDATE BEFORE RESOLVING
      new Promise((resolve, reject) => {
         this.setState({
            routes: routes
         })

         resolve();

      // THEN REWRITE STORAGE & PROMPT SUCCESS
      }).then(() => {
         storage.save(this.state.routes)
         prompt('Route "' + name + '" removed!')
      });
   }

   // GOTO PROFILE SCREEN
   goto_profile = (name) => {
      this.props.navigation.navigate(
         'Profile',
         { name: name }
      )
   }

   // GOTO CREATE SCREEN
   goto_create = () => {
      this.props.navigation.navigate(
         'Create',
         { add: this.add }
      )
   }

   render() { return (
      <>
         <Header label={ 'Saved Routes' }/>
         <Content>
            <Table
               data={ this.state.routes }
               remove={ this.remove }
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