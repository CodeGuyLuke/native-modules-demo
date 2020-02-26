import {NativeModules} from 'react-native';

export const showToast = (message, isLong = true) => {
  NativeModules.Toast.show(message, isLong)
}
