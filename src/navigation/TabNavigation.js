import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const TabNavigator = createBottomTabNavigator(
  {
    // Main: {
    //   screen: Main,
    //   navigationOptions: {
    //     tabBarLabel: "Inicio"
    //   }
    // },
    Main: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home",
        tabBarLabel: "Inicio"
      },
      screen: Main
    },
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

export default TabNavigator;
