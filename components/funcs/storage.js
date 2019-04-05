import { AsyncStorage } from 'react-native';

class Storage {
   key = 'native-storage'

   // CHECK IF STORAGE ITEM EXISTS
   constructor() {
      this.check();
   }

   // FETCH ROUTES
   fetch() {
      return AsyncStorage.getItem(this.key);
   }

   // SAVE ROUTES
   save(list) {
      AsyncStorage.setItem(this.key, JSON.stringify({ routes: list }));
   }

   check() {
      this.fetch().then((data) => {
         if (data === null) {
            this.save([])
         }
      });
   }
}

export default new Storage();