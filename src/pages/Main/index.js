import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  Alert
} from "react-native";

import { styles } from "./styles";
import { getCarList } from "../../services/CarService";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Alert.alert("teste");
    // getCarList();
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
        </View>
      </ImageBackground>
    );
  }
}
