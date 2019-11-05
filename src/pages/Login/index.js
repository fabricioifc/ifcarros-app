import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from "react-native";
import { styles } from "./styles";

import api from "~services/api";
import { getToken, loginLocal, logoutLocal } from "../../services/auth";
import axios from "axios";
import { baseURL, loginFetch } from "../../services/api";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      email: "admin@admin.com",
      password: "admin",
      cars: []
    };
  }

  componentDidMount() {}

  efetuarLogin = async () => {
    let data = JSON.stringify({
      password: this.state.password,
      email: this.state.email,
      username: this.state.username
    });
    
    return fetch(`${baseURL}/auth/login/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        password: this.state.password,
        email: this.state.email,
        username: this.state.username
      })
    })
      .then(response => {
        response.json().then(result => {
          console.log('====================================');
          console.log(result);
          console.log('====================================');
          if (result.token) {
            loginLocal(result.token)
            let navigation = this.props.navigation;
            navigation.navigate("Main");  
          } else {
            Alert.alert('Usuário e/ou Senha Inválido!')
          }
          
        })
      })
      .done();

  };

  efetuarLogout = () => {
    console.log("logout");
    logoutLocal()
  };
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/cotton/64/000000/mail-account.png"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/ultraviolet/40/000000/password.png"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.efetuarLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.efetuarLogout}
        >
          <Text style={styles.loginText}>Logout</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener("restore_password")}
        >
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener("register")}
        >
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
