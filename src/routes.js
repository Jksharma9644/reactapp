import {Navigation} from 'react-native-navigation';

import Landing from './screens/Landing';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';


export function registerScreens() {
  Navigation.registerComponent('Landing', () => Landing);
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Login',() => Login);
  Navigation.registerComponent('SignUp',() => SignUp);
}
