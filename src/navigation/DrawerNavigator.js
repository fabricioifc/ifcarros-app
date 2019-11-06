import React from "react";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";
// import StackNavigator from "./StackNavigator";
import Main from "../pages/Main";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import CustomDrawerNavigator from "./DrawerNavigator/CustomDrawerNavigator";
import StackNavigator from "./StackNavigator";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native";
import { logoutService } from "../services/authentication";

const AppDrawerNav = createDrawerNavigator(
  {
    // StackNavigator: StackNavigator,
    Main: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: Main
    },

    Settings: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "Settings"
      },
      screen: Settings
    },

    Profile: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" style={{ color: tintColor }} />
        ),
        drawerLabel: "Profile"
      },
      screen: Profile
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={30} style={{ paddingLeft: 15 }} />
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity onPress={() => logoutService({ navigation })}>
            <Ionicons
              name="md-log-out"
              size={30}
              style={{ paddingRight: 15 }}
            />
          </TouchableOpacity>
        )
      };
    },
    contentComponent: CustomDrawerNavigator,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "drawerToggle"
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: AppDrawerNav }
  },
  {
    headerMode: "float"
  }
);

export default AppNavigator;
