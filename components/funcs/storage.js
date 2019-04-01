import { AsyncStorage } from 'react-native';

class Storage {
   key = 'native-storage'

   // CHECK IF STORAGE ITEM EXISTS
   constructor() {
      this.routes().then((data) => {
         if (data === null) {
            this.save([])
         }
      });
   }

   // FETCH ROUTES
   routes() {
      return AsyncStorage.getItem(this.key);
   }

   // SAVE ROUTES
   save(list) {
      const object = { routes: list }
      AsyncStorage.setItem(this.key, JSON.stringify(object));
   }
}

export default new Storage();