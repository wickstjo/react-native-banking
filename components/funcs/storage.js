import { AsyncStorage } from 'react-native';

class Storage {
   key = 'native-storage'

   // CHECK IF STORAGE ITEM EXISTS
   constructor() {
      this.routes().then((data) => {
         if (data === null) {
            this.save({})
         }
      });
   }

   // FETCH ROUTES
   routes() {
      return AsyncStorage.getItem(this.key);
   }

   // SAVE ROUTES
   save(routes) {
      AsyncStorage.setItem(this.key, JSON.stringify(routes));
   }
}

export default new Storage();