import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import SharePlaceScreen  from './screens/sharePlaceScreen';
import FindPlaceScreen  from './screens/findPlaceScreen';

Navigation.registerComponent('Login',() => Login);
Navigation.registerComponent('SignUp',() => SignUp); 
Navigation.registerComponent('SharePlace',() => SharePlaceScreen); 
Navigation.registerComponent('FindPlace',() => FindPlaceScreen); 




Navigation.startSingleScreenApp({
  screen: {
    screen: 'Login',
    title: 'Login'
  }
});
