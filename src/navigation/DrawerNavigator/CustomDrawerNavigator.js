import React from "react";
import {
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";

import styles from "./styles";
import { Text, Container, Header, Body, Content } from "native-base";
import { getProfile } from "../../services/auth";

class CustomDrawerNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isLoading: true
    };
  }

  async componentWillMount() {
    const user = await getProfile();
    // console.log(JSON.parse(user));
    this.setState({
      user: JSON.parse(user),
      isLoading: false
    });

    // getProfile()
    //   .then(user => {
    //     this.setState({
    //       user,
    //       isLoading: false
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  render() {
    let { isLoading, user } = this.state;
    // console.log(isLoading, user);

    if (isLoading || !user) {
      return null;
    }
    let { name } = this.state.user;
    let { profile } = this.state.user

    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            height: 200,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={styles.profileImage}
            source={{
              uri: profile !== null ? profile.avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-rBKSEWCsWiybBcnzPHdw3aJzr93Pchxe97rx4Apzs22LPLXQ'
            }}
          ></Image>
          <Text style={styles.headerText}>{name}</Text>
        </View>
        <ScrollView>
          <DrawerItems
            activeBackgroundColor={"black"}
            activeTintColor={"white"}
            iconContainerStyle={styles.icons}
            {...this.props}
          />
        </ScrollView>
      </SafeAreaView>
      // <Container>
      //   <Header style={styles.headerContainer}>
      //     <Body>
      //       <Image
      //         style={styles.profileImage}
      //         source={{
      //           uri: avatar
      //         }}
      //       ></Image>
      //     </Body>
      //     <Text style={styles.headerText}>{name}</Text>
      //   </Header>
      //   <Content>
      //     <DrawerItems
      //       activeBackgroundColor={"black"}
      //       activeTintColor={"white"}
      //       iconContainerStyle={styles.icons}
      //       {...this.props}
      //     />
      //   </Content>
      // </Container>
    );
  }
}

export default CustomDrawerNavigator;
