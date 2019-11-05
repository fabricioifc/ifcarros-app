import { createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/DrawerNavigator";

// const AppSwitchNav = createSwitchNavigator({
//   Main: { screen: Main },
//   Dashboard: { screen: Dashboard }
// });

export const createRootNavigator = (signedIn = false) => {
  return (SwitchNavigator = createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: AppNavigator
    },
    {
      initialRouteName: signedIn == true ? "App" : "Auth"
    }
  ));
};
