import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './routes';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Login',
    title: 'Login'
  }
});
