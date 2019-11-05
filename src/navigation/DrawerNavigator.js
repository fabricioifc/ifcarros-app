import React from "react";
import { Icon } from "native-base";

import { createDrawerNavigator } from "react-navigation-drawer";
// import StackNavigator from "./StackNavigator";
import Main from "../pages/Main";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import CustomDrawerNavigator from "./DrawerNavigator/CustomDrawerNavigator";

const AppDrawerNav = createDrawerNavigator(
  // {
  // Dashboard: { screen: StackNavigator }
  // },
  {
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
    contentComponent: CustomDrawerNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

export default AppDrawerNav;
