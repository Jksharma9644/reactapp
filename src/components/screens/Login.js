import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,TouchableOpacity} from 'react-native'
import Loader from '../components/UI/loader';
import  startMainTabs  from './startMainTabs';
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }


  handleLogin = () => {
    startMainTabs();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        </View>
        <TouchableOpacity onPress={this.handleLogin}>
                    <View style={styles.textbutton}>
                        <Text>Submit</Text>
                    </View>
                </TouchableOpacity>


        <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignUp')}>
                    <View >
                        <Text style={styles.link}>Don't have an account ! Sign Up?</Text>
                    </View>
                </TouchableOpacity>

         {/* <Loader auth='true' /> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd"


    },
    inputContainer: {
        width: "80%"
    },
    textInput: {
        borderColor: "#bbb",
        width:"100%"
    },
    textbutton: {
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: "#0074d9",
        borderWidth: 1,
        backgroundColor: "#0074d9",
        
    },
    textHeading: {
        fontSize: 28,
        fontWeight: "bold"
    },
    link:{
        color:'#0074d9'
    }

})