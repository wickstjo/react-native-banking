import { ToastAndroid } from 'react-native';

function Prompt(message) {
   ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
   )
}

export default Prompt;