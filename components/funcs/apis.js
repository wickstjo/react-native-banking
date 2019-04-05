import axios from 'axios';

class Apis {
   key = 'AIzaSyBcbkfxWDiiWg6sjnkWHdsrsW7-bT7tfE8';

   // CONVERT ADDRESS TO COORDS
   coords(foo) {
      return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + foo + '&key=' + this.key);
   }

   // OPTIMIZE LIST OF WAYPOINTS
   optimize(primary, waypoints) {
      return axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=' + primary.name + '&destination=' + primary.name + '&waypoints=optimize:true' + this.waypoints(waypoints) + '&key=' + this.key)
   }

   // STITCH TOGETHER WAYPOINT QUERY
   waypoints(waypoints) {
      let response = '';

      waypoints.forEach(waypoint => {
         response += '|' + waypoint.name;
      });

      return response;
   }
}

export default new Apis();