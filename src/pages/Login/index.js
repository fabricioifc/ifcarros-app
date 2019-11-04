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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "admin@admin.com",
      password: "admin",
      cars: []
    };
  }

  componentDidMount() {
    // return api
    //   .get("/api/cars/")
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {});
  }

  efetuarLogin = () => {
    // Alert.alert(this.state.email);
    let data = JSON.stringify({
      password: this.state.password,
      email: this.state.email
    });
    console.log(data);

    return api
      .post("/api/auth/login/", data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
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
