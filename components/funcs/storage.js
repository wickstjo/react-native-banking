import { AsyncStorage } from 'react-native';

class Storage {
   key = 'native-storage'

   routes() {
      return AsyncStorage.getItem(this.key);
   }

   save(list) {
      const object = { routes: list }
      AsyncStorage.setItem(this.key, JSON.stringify(object));
   }
}

export default new Storage();