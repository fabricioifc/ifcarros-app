import { createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./navigation/AuthNavigator";
import AppDrawerNav from "./navigation/DrawerNavigator";

// const AppSwitchNav = createSwitchNavigator({
//   Main: { screen: Main },
//   Dashboard: { screen: Dashboard }
// });

export const createRootNavigator = (signedIn = false) => {
  return (SwitchNavigator = createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: AppDrawerNav
    },
    {
      initialRouteName: signedIn == true ? "App" : "Auth"
    }
  ));
};
