import React, { Component } from 'react';
import {
 Platform,
 AppRegistry
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import SharePlaceScreen  from './components/screens/sharePlaceScreen';
import FindPlaceScreen  from './components/screens/findPlaceScreen';
export default class  App extends Component {

  constructor(props){
  super(props)
  console.log(props);
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
  }
  
  
  
} 


