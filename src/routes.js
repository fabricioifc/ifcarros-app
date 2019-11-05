import React from "react";
import { Icon } from "native-base";

import { NavigationActions } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { isAuthenticated, TOKEN_KEY } from "./services/auth";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import { AsyncStorage } from "react-native";

// export const Nav = createAppContainer(createDrawerNavigator({ Main, Logout }));

// export const AuthNav = createAppContainer(
//   createSwitchNavigator({ Login, Main })
// );

const AppSwitchNav = createSwitchNavigator({
  Main: { screen: Main },
  Dashboard: { screen: Dashboard }
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Main,
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

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});

const AppDrawerNav = createDrawerNavigator(
  {
    Dashboard: { screen: DashboardStackNavigator }
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

// const AppSwitchNavigator = createSwitchNavigator({
//   Dashboard: { screen: AppDrawerNav },
//   Main: { screen: Main }
// });

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Logout: { screen: Logout }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export const createRootNavigator = (signedIn = false) => {
  console.log('====================================');
  console.log(signedIn);
  console.log('====================================');
 return SwitchNavigator = createSwitchNavigator(
    {
      Auth: AuthNavigation,
      App: AppDrawerNav
    },
    {
      initialRouteName: (signedIn == true ? "App" : "Auth")
    }
  )
}

// export const AppContainer = createAppContainer(createRootNavigator(isAuthenticated()));