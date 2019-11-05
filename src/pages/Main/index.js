import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar
} from "react-native";

import { styles } from "./styles";
import { isAuthenticated, logoutLocal, getToken } from "../../services/auth";
import api, { logout, baseURL } from "../../services/api";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log(await getToken());
    
    // clearAsyncStorage()
    // return api
    //   .get("/api/cars/")
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {});
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png"
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <View>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#7159c1"
          ></StatusBar>
          <Image
            source={{
              uri:
                "https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png"
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcome}>Bem-vindo ao Template Avançado!</Text>
          <Text style={styles.instructions}>
            Essa é a tela principal da sua aplicação =)
          </Text>
          <Text style={styles.instructions}>
            Você pode editar a tela no arquivo:
          </Text>
          <Text style={[styles.instructions, styles.fileName]}>
            src/pages/Main/index.js
          </Text>
          <Button title="Logout" onPress={this.handleLogout}></Button>
        </View>
      </ImageBackground>
    );
  }
  handleLogout = () => {
    return fetch(`${baseURL}/auth/logout/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      }
    }).then(result => {
      logoutLocal()
      this.props.navigation.navigate("Login")
    })
    // return api
    //   .post("/api/auth/logout/", {
    //     // credentials: "same-origin",
    //     headers: {
    //       Accept: "application/json",
    //     }
    //   })
    //   .then(result => {
    //     logoutLocal();
    //     this.props.navigation.navigate("Login");
    //     // console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
}
