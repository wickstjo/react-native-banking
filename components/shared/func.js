import axios from 'axios';

class func {
   
   foobar() {
      const foo = axios.get('https://jsonplaceholder.typicode.com/users');
      
      foo.then((response) => {
         Alert.alert(JSON.stringify(response.data))
      })
   }

   query(url) {
      return axios.get(url);
   }
}

export default new func();