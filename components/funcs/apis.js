import axios from 'axios';

class Apis {
   key = 'AIzaSyDgmC7tB3nNrLjeU7n9LrStGR6yM70m0NU';

   query(foo) {
      return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + foo + '&key=' + this.key);
   }

   optimize(primary, waypoints) {
      const key = 'AIzaSyBcbkfxWDiiWg6sjnkWHdsrsW7-bT7tfE8';
      return axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=' + primary.name + '&destination=' + primary.name + '&waypoints=optimize:true' + this.waypoints(waypoints) + '&key=' + key)
   }

   urlify(item) {
      const coords = item.coords;
      const response = coords.latitude + '%2C' + coords.longitude;
      return response;
   }

   waypoints(waypoints) {
      let response = '';

      waypoints.forEach(waypoint => {
         response += '|' + waypoint.name;
      });

      return response;
   }
}

export default new Apis();