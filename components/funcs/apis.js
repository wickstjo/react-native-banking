import axios from 'axios';

class Apis {
   key = 'AIzaSyDgmC7tB3nNrLjeU7n9LrStGR6yM70m0NU';

   query(foo) {
      return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + foo + '&key=' + this.key);
   }
}

export default new Apis();